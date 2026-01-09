export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                About Sparkhub
            </h1>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-left">
                <p>
                    <strong className="text-white">Sparkhub AI</strong> is an advanced career guidance platform designed specifically for students in Kerala. Born from the VHSE SparkHub initiative, it leverages cutting-edge artificial intelligence to analyze your aptitude, interests, and skills.
                </p>
                <p>
                    Our mission is to democratize career counseling. We believe every student deserves personalized, high-quality guidance regardless of their background. By combining <span className="text-violet-400">Psychometric Analysis</span> with <span className="text-violet-400">AI-driven conversations</span>, Sparkhub provides insights that go beyond traditional tests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-3xl mb-4">🧠</div>
                        <h3 className="text-xl font-bold text-white mb-2">AI Powered</h3>
                        <p className="text-sm">Uses GPT-4o models to understand context and nuance in your queries.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-3xl mb-4">🌍</div>
                        <h3 className="text-xl font-bold text-white mb-2">Localized</h3>
                        <p className="text-sm">Trained on Kerala's educational landscape, courses, and entrance exams.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-3xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold text-white mb-2">Private</h3>
                        <p className="text-sm">Your data is secure. We prioritize student privacy and data protection.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
