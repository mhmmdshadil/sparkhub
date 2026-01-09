"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const menuItems = [
    { title: "Home", action: "hero" },
    { title: "Chat", action: "chat" },
    { title: "About", action: "about" },
    { title: "Institutes", action: "institutes" },
    { title: "Contact", action: "contact" },
    { title: "YIP Discord", href: "https://discord.gg/ZnnpAyrtC", external: true },
];

const drawerVars = {
    initial: { x: "100%" },
    animate: {
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 } as any
    },
    exit: {
        x: "100%",
        transition: { type: "spring", stiffness: 300, damping: 30 } as any
    },
};

const overlayVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

interface SideDrawerProps {
    onNavigate?: (view: string) => void;
}

export default function SideDrawer({ onNavigate }: SideDrawerProps) {
    const [open, setOpen] = useState(false);
    const { user } = useUser();

    const handleNavigation = (item: any) => {
        setOpen(false);
        if (item.action && onNavigate) {
            onNavigate(item.action);
        } else if (item.href) {
            window.open(item.href, '_blank');
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="z-[99] relative text-white hover:text-gray-300 transition-colors"
            >
                <Menu size={28} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={overlayVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98]"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            variants={drawerVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed right-0 top-0 h-screen w-80 bg-[#0a0a0a] border-l border-white/10 z-[99] flex flex-col p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-sm font-mono text-neutral-500">Navigation</span>
                                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Profile Section in Menu */}
                            <div className="flex items-center gap-3 mb-8 p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                                <UserButton />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">{user?.firstName || "User"}</span>
                                    <span className="text-xs text-neutral-500">Manage Account</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleNavigation(item)}
                                        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors flex items-center justify-between group w-full text-left"
                                    >
                                        {item.title}
                                        {item.external && <ArrowRight size={20} className="-rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-auto text-sm text-gray-600">
                                © 2026 Sparkhub AI
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
