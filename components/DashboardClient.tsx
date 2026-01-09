"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import StaggeredMenu from "@/components/StaggeredMenu";
import About from "@/components/About";
import Institutes from "@/components/Institutes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { UserButton } from "@clerk/nextjs";

type ViewState = 'hero' | 'chat' | 'about' | 'institutes' | 'contact';

export default function DashboardClient() {
    const [currentView, setCurrentView] = useState<ViewState>('hero');

    const renderContent = () => {
        switch (currentView) {
            case 'chat':
                return <ChatInterface />;
            case 'about':
                return <About />;
            case 'institutes':
                return <Institutes />;
            case 'contact':
                return <Contact />;
            default:
                return <Hero onStart={() => setCurrentView('chat')} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col pt-16 bg-black text-white">
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('hero')}>
                        <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rotate-45 rounded-md">
                            S
                        </div>
                        <span className="font-bold text-lg tracking-tight">Sparkhub</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-not-allowed" title="Coming Soon">
                            EN / ML
                        </button>
                        <button onClick={() => setCurrentView('hero')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Reset
                        </button>
                        <div className="w-px h-6 bg-gray-800 mx-2 hidden md:block"></div>

                        {/* User Profile */}
                        <UserButton afterSignOutUrl="/sign-in" appearance={{
                            elements: {
                                avatarBox: "h-8 w-8"
                            }
                        }} />

                        <StaggeredMenu onNavigate={(view) => setCurrentView(view as ViewState)} />
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-4 mt-8 md:mt-0">
                {renderContent()}
            </main>

            {currentView !== 'chat' && <Footer />}
        </div>
    );
}
