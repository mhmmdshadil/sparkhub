import { NextResponse } from 'next/server';
import { cosmosContainer } from '@/lib/cosmos';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!cosmosContainer) {
            // Cosmos not configured
            return NextResponse.json({ messages: [] });
        }

        const userId = user.id;

        // Fetch chat history for this user
        const querySpec = {
            query: "SELECT * FROM c WHERE c.userId = @userId ORDER BY c._ts ASC",
            parameters: [
                {
                    name: "@userId",
                    value: userId
                }
            ]
        };

        const { resources: items } = await cosmosContainer.items.query(querySpec).fetchAll();

        // Map cosmos documents to Message interface
        // Expected structure in DB: { id, userId, role, content, _ts }
        const messages = items.map(item => ({
            id: item.id, // or timestamp? 
            role: item.role,
            content: item.content
        }));

        return NextResponse.json({ messages });

    } catch (error) {
        console.error("Cosmos DB Error:", error);
        return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
    }
}
