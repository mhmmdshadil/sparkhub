"use client";

import { useState } from "react";
import { Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", content: "Hello. I am CareerPath AI. I can help you choose the right educational path after 10th standard. What are your interests?" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg: Message = { id: Date.now(), role: "user", content: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to fetch response");
            }

            const data = await response.json();
            setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content: data.message }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, role: "assistant", content: "I'm having trouble connecting to the server. Please check your API keys or try again later." }
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto h-[70vh] relative">
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-xl text-lg leading-relaxed ${msg.role === "user"
                                        ? "bg-[#1a1a1a] text-white"
                                        : "text-white"
                                    }`}
                            >
                                {msg.role === "assistant" && <span className="font-bold block mb-1 text-sm text-gray-500">Grok</span>}
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex w-full justify-start"
                        >
                            <div className="text-gray-500 text-sm ml-2 animate-pulse">Thinking...</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="p-4 border-t border-[#333] bg-black">
                <div className="relative flex items-center bg-[#111] rounded-2xl border border-[#333] focus-within:border-white transition-colors">
                    <input
                        type="text"
                        className="w-full bg-transparent text-white p-4 pl-5 outline-none placeholder-gray-500"
                        placeholder="Ask anything..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isTyping}
                        className="p-3 mr-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                    >
                        <Send size={20} />
                    </button>
                </div>
                <div className="text-center text-xs text-gray-600 mt-2">
                    CareerPath AI can make mistakes. Verify important information.
                </div>
            </div>
        </div>
    );
}
