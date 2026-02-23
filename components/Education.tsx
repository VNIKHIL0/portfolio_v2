export default function Education() {
    const educations = [
        {
            degree: "B.TECH - AI & DATA SCIENCE",
            period: "2024 - PRESENT",
            institution: "KARPAGAM COLLEGE OF ENGINEERING",
            result: "CGPA: 7.4"
        },
        {
            degree: "DIPLOMA - AI & MACHINE LEARNING",
            period: "2021 - 2024",
            institution: "THIAGARAJAR POLYTECHNIC COLLEGE",
            result: "PERCENTAGE: 88%"
        }
    ];

    return (
        <section className="space-y-6">
            {educations.map((edu, i) => (
                <div key={i} className="bios-border p-4">
                    <div className="flex justify-between items-start border-b border-[#aaaaaa] mb-4 pb-1">
                        <h3 className="text-[#ffffff] font-bold">{edu.degree}</h3>
                        <span className="text-xs bg-[#aaaaaa] text-[#0000aa] px-1">{edu.period}</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex">
                            <span className="w-32 text-[#ffffff]">INSTITUTION:</span>
                            <span>{edu.institution}</span>
                        </div>
                        <div className="flex">
                            <span className="w-32 text-[#ffffff]">RESULT:</span>
                            <span className="text-green-400 font-bold">{edu.result}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-xs text-white opacity-50 text-right">
                [EDU_REGISTRY: VERIFIED]
            </div>
        </section>
    );
}
