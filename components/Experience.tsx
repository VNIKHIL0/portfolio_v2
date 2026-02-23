export default function Experience() {
    const experiences = [
        {
            company: "DOUNTTECH PVT. LTD.",
            role: "SOFTWARE ENGINEER INTERN",
            details: [
                "DEVELOPED AI CHATBOT FOR INFORMATION SCRAPING",
                "INTEGRATED MEETING-SCHEDULING FUNCTIONALITY"
            ]
        },
        {
            company: "DELOITTE FORAGE",
            role: "DATA ANALYTICS INTERN (VIRTUAL)",
            details: [
                "BUILT INTERACTIVE TABLEAU DASHBOARDS",
                "DELIVERED DATA-DRIVEN INSIGHTS FOR CLIENT SCENARIOS",
                "COMPLETED VIRTUAL JOB SIMULATION"
            ]
        }
    ];

    return (
        <section className="space-y-8">
            {experiences.map((exp, i) => (
                <div key={i} className="bios-border p-4 bg-[#0000aa]/50">
                    <div className="flex justify-between items-center bg-[#aaaaaa] text-[#0000aa] px-2 mb-4 font-bold">
                        <span>EMPLOYER: {exp.company}</span>
                        <span>ID: 00{i + 1}</span>
                    </div>
                    <div className="mb-4">
                        <span className="text-[#ffffff] font-bold">POSITION:</span> {exp.role}
                    </div>
                    <div className="space-y-1">
                        <div className="text-[#ffffff] font-bold underline mb-1">TASK_LOGS:</div>
                        {exp.details.map((detail, j) => (
                            <div key={j} className="flex gap-2">
                                <span className="text-[#ffffff]">*</span>
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="text-xs text-white opacity-50 text-right">
                [SYS_LOG: EXPERIENCE_MODULE_LOADED]
            </div>
        </section>
    );
}
