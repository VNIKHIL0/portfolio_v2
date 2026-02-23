export default function AdditionalInfo() {
    const languages = ["ENGLISH", "HINDI", "MARATHI", "TAMIL"];
    const certifications = [
        "IBM GENERATIVE AI FOR SOFTWARE DEVELOPMENT",
        "GOOGLE GEN AI BADGE",
        "GREAT LEARNING - MACHINE LEARNING ALGORITHMS",
        "HP - DATA SCIENCE & ANALYTICS",
        "THIAGARAJAR COLLEGE - IDEATHON WINNER (4TH)",
        "POSTMAN - API STUDENT EXPERT"
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bios-border p-4 bg-[#0000aa]">
                <h3 className="text-[#ffffff] font-bold mb-4 underline">L_LANGUAGE_PACKS</h3>
                <div className="space-y-2">
                    {languages.map(lang => (
                        <div key={lang} className="flex justify-between items-center text-sm">
                            <span>{lang}</span>
                            <span className="text-green-400">[INSTALLED]</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bios-border p-4">
                <h3 className="text-[#ffffff] font-bold mb-4 underline">CERTIFICATION_REGISTRY</h3>
                <ul className="space-y-1 text-xs">
                    {certifications.map((cert, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-[#ffffff]">{i + 1}.</span>
                            <span>{cert}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:col-span-2 text-center text-xs opacity-50 space-x-4">
                <span>S/N: 2026-VISHW-99</span>
                <span>BUILD: 2026.02.23.14.22</span>
                <span>OS: PORTFOLIO_DOS_6.22</span>
            </div>
        </section>
    );
}
