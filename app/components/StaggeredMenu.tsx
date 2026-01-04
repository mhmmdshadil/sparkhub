"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "#" },
    { title: "Institutes", href: "#" },
    { title: "YIP Discord", href: "https://discord.gg/placeholder", external: true }, // Placeholder link
    { title: "Contact", href: "#" },
];

const menuVars = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
        },
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
};

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};

export default function StaggeredMenu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                className="z-[99] relative text-white hover:text-gray-300 transition-colors"
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen bg-black origin-top z-[98] flex flex-col justify-center items-center p-10"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-6 text-center"
                        >
                            {menuItems.map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div
                                        variants={mobileLinkVars}
                                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            target={link.external ? "_blank" : "_self"}
                                            className="hover:text-gray-400 transition-colors flex items-center justify-center gap-3"
                                        >
                                            {link.title}
                                            {link.external && <ArrowRight size={24} className="-rotate-45" />}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
