export default function Projects() {
    const projects = [
        {
            title: "AI PRODUCT RECOMMENDER",
            category: "ML_ENGINE",
            desc: "PYTHON/SQLITE RECOMMENDATION ENGINE"
        },
        {
            title: "OLLAMA AI CHATBOT",
            category: "GEN_AI",
            desc: "FLASK/NLP INTERACTION STACK"
        },
        {
            title: "DOUNTTECH AI AGENT",
            category: "AUTOMATION",
            desc: "INTELLIGENT SCRAPING & SCHEDULING"
        },
        {
            title: "TABLEAU ANALYTICS",
            category: "DATA_VIZ",
            desc: "INTERACTIVE BI DASHBOARDS @DELOITTE"
        },
    ];

    return (
        <section className="space-y-4">
            <div className="bios-border overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bios-highlight">
                        <tr>
                            <th className="p-2 border-b-2 border-[#aaaaaa]">PROJECT_NAME</th>
                            <th className="p-2 border-b-2 border-[#aaaaaa]">SUBSYSTEM</th>
                            <th className="p-2 border-b-2 border-[#aaaaaa]">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, i) => (
                            <tr key={i} className="hover:bg-white hover:text-[#0000aa] cursor-default">
                                <td className="p-2 border-b border-[#aaaaaa]/30">{project.title}</td>
                                <td className="p-2 border-b border-[#aaaaaa]/30">{project.category}</td>
                                <td className="p-2 border-b border-[#aaaaaa]/30 text-green-400">LOADED</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bios-border p-4 mt-4">
                <div className="text-[#ffffff] font-bold mb-2 underline">FILE_DETAILS:</div>
                <div className="grid grid-cols-1 gap-1 text-sm">
                    {projects.map((project, i) => (
                        <div key={i} className="flex">
                            <span className="w-48 text-[#ffffff]">{project.title}</span>
                            <span className="flex-1 text-xs opacity-80">{project.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
