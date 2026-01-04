import { NextResponse } from 'next/server';
import { AzureOpenAI } from 'openai';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
        const apiKey = process.env.AZURE_OPENAI_API_KEY;
        const deployment = "gpt-35-turbo"; // Default or environment variable

        // Graceful fallback for demo purposes if keys aren't set
        if (!endpoint || !apiKey) {
            console.warn("Missing Azure credentials. Returning mock response.");
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate latency
            return NextResponse.json({
                message: "I am currently running in demo mode because the Azure service is not configured. Please add AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_API_KEY to your .env.local file to enable real AI responses."
            });
        }

        const client = new AzureOpenAI({ endpoint, apiKey, deployment, apiVersion: "2024-05-01-preview" });

        const completion = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are CareerPath AI, a helpful counselor for students in Kerala finishing 10th standard. Provide brief, encouraging advice about courses like Plus Two (Science, Commerce, Humanities), VHSE, Polytechnic, and ITI. Keep answers under 3 sentences." },
                ...messages
            ],
            model: deployment,
        });

        return NextResponse.json({ message: completion.choices[0].message.content });

    } catch (error: any) {
        console.error("Azure OpenAI Error:", error);
        return NextResponse.json({ error: "Failed to generate response." }, { status: 500 });
    }
}
