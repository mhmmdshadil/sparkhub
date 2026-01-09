"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the data to an API
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 text-center">
                Get in Touch
            </h1>
            <p className="text-gray-400 mb-12 text-center max-w-xl">
                Have questions about SparkHub or need technical support? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Email</div>
                                    <div>support@sparkhub.ai</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Phone</div>
                                    <div>+91 98765 43210</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Location</div>
                                    <div>Technopark, Trivandrum, Kerala</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="p-8 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden">
                    {submitted ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] z-10 animate-in fade-in">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                <Send size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                            <p className="text-gray-400 mt-2">We'll get back to you shortly.</p>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase font-bold">First Name</label>
                                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-violet-500 outline-none transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase font-bold">Last Name</label>
                                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-violet-500 outline-none transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase font-bold">Email</label>
                            <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-violet-500 outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase font-bold">Message</label>
                            <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-violet-500 outline-none transition-colors" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
