import { ExternalLink, MapPin } from "lucide-react";

const institutes = [
    {
        name: "CUSAT",
        fullName: "Cochin University of Science and Technology",
        location: "Kochi, Kerala",
        tags: ["Engineering", "Science", "Law"],
        url: "https://cusat.ac.in"
    },
    {
        name: "NIT Calicut",
        fullName: "National Institute of Technology",
        location: "Kozhikode, Kerala",
        tags: ["Architecture", "Engineering", "Technology"],
        url: "https://nitc.ac.in"
    },
    {
        name: "IIST",
        fullName: "Indian Institute of Space Science and Technology",
        location: "Thiruvananthapuram, Kerala",
        tags: ["Space Science", "Avionics", "Aerospace"],
        url: "https://iist.ac.in"
    },
    {
        name: "Kerala University",
        fullName: "University of Kerala",
        location: "Thiruvananthapuram, Kerala",
        tags: ["Arts", "Science", "Commerce"],
        url: "https://keralauniversity.ac.in"
    },
    {
        name: "IIM Kozhikode",
        fullName: "Indian Institute of Management",
        location: "Kozhikode, Kerala",
        tags: ["Management", "MBA", "Research"],
        url: "https://iimk.ac.in"
    },
    {
        name: "Amrita Vishwa Vidyapeetham",
        fullName: "Amrita University",
        location: "Amritapuri, Kochi, Bengaluru",
        tags: ["Private", "Engineering", "Medicine"],
        url: "https://amrita.edu"
    }
];

export default function Institutes() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 text-center">
                Top Institutes
            </h1>
            <p className="text-gray-400 mb-12 text-center max-w-2xl">
                Explore premier educational institutions in Kerala and beyond. SparkHub helps you aim for the best.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {institutes.map((inst, idx) => (
                    <a
                        key={idx}
                        href={inst.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-violet-500/50 hover:bg-white/[0.02] transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold text-white group-hover:bg-violet-600 transition-colors">
                                {inst.name[0]}
                            </div>
                            <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">{inst.name}</h3>
                        <div className="text-xs text-gray-500 mb-4 font-medium">{inst.fullName}</div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                            <MapPin size={14} />
                            {inst.location}
                        </div>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {inst.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
