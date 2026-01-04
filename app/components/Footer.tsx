export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 py-8 text-center text-sm text-gray-600 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    © 2026 <span className="text-white font-medium">SparkHub</span>. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
