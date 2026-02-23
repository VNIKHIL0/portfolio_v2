export default function Skills() {
    const skills = {
        "LANGUAGES": ["PYTHON", "JAVASCRIPT", "SQL", "HTML/CSS"],
        "FRAMEWORKS": ["REACT", "EXPRESS", "FLASK", "TENSORFLOW", "SCIKIT-LEARN"],
        "TOOLS": ["GIT", "POSTMAN", "VS CODE", "TABLEAU", "FIGMA"],
        "DATABASES": ["MONGODB", "SQLITE"]
    };

    return (
        <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bios-border p-4 bg-[#0000aa]">
                        <h3 className="text-[#ffffff] font-bold mb-4 underline">{category}_STACK</h3>
                        <div className="space-y-1">
                            {items.map(skill => (
                                <div key={skill} className="flex items-center gap-2">
                                    <span className="text-green-400">[X]</span>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bios-border p-4 bg-[#aaaaaa] text-[#0000aa]">
                <div className="font-bold border-b border-[#0000aa] mb-2">DRIVER_STATUS_REPORT</div>
                <div className="flex flex-wrap gap-x-8 gap-y-1 text-xs">
                    <span>KERNEL: OPTIMIZED</span>
                    <span>COMPILER: GCC_12.2</span>
                    <span>MEMORY: 640KB_CONV</span>
                    <span>NETWORK: CONNECTED</span>
                </div>
            </div>
        </section>
    );
}
