export default function Summary() {
    return (
        <section className="space-y-6">
            <div className="bios-border p-4 bg-[#0000aa]">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bios-border p-2 bg-black/40 font-mono text-[6px] leading-[1] text-white hidden md:block select-none flex-shrink-0">
                        <pre className="whitespace-pre">
                            {`
      _______________________
     /                       \\
    /   ___________________   \\
   /   /                   \\   \\
  /   /     _________       \\   \\
 /   /     /         \\       \\   \\
|   |     |   _   _   |       |   |
|   |     |  | | | |  |       |   |
|   |     |  |_| |_|  |       |   |
|   |     |           |       |   |
|   |     |   _____   |       |   |
|   |     |  \\     /  |       |   |
 \\   \\     \\  \\___/  /       /   /
  \\   \\     \\_______/       /   /
   \\   \\___________________/   /
    \\                         /
     \\_______________________/
           NIKHIL_V.SYS
`}
                        </pre>
                    </div>
                    <div className="flex-1 w-full">
                        <h3 className="text-[#ffffff] font-bold mb-4 underline text-xl">SYSTEM_SUMMARY</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex flex-col sm:flex-row border-b border-white/10 pb-2">
                                <span className="w-40 text-[#ffffff] font-bold">USER_OBJECTIVE:</span>
                                <span className="flex-1 text-green-400">AI_AND_DATA_SCIENCE_STUDENT</span>
                            </div>
                            <div className="flex flex-col sm:flex-row border-b border-white/10 pb-2">
                                <span className="w-40 text-[#ffffff] font-bold">SPECIALIZATION:</span>
                                <span className="flex-1">MACHINE_LEARNING_&_FULL_STACK</span>
                            </div>
                            <div className="flex flex-col sm:flex-row border-b border-white/10 pb-2">
                                <span className="w-40 text-[#ffffff] font-bold">CORE_TECH:</span>
                                <span className="flex-1 text-[#aaaaaa]">PYTHON, FLASK, LLM_INTEGRATION</span>
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <span className="w-40 text-[#ffffff] font-bold">ACCESS_LEVEL:</span>
                                <span className="flex-1 text-yellow-500">ROOT_ADMINISTRATOR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bios-border p-6 bg-black/10">
                <h3 className="text-[#ffffff] font-bold mb-4 underline">BIOGRAPHY_VERBOSE</h3>
                <p className="leading-relaxed text-sm md:text-base text-justify">
                    AI AND DATA SCIENCE STUDENT WITH HANDS-ON EXPERIENCE IN MACHINE LEARNING,
                    FULL-STACK DEVELOPMENT, AND LLM INTEGRATION. PROFICIENT IN PYTHON,
                    FLASK, AND TABLEAU, WITH A STRONG FOUNDATION IN BUILDING REAL-WORLD
                    APPLICATIONS. COMPLETED INTERNSHIPS IN AI AND DATA ANALYTICS,
                    DELIVERING IMPACTFUL, USER-FOCUSED SOLUTIONS.
                </p>
            </div>

            <div className="text-[10px] text-white opacity-40 text-right mt-2 flex justify-between items-center px-2">
                <span>PARITY: EVEN</span>
                <span>CHECKSUM: OK (0x55AA)</span>
            </div>
        </section>
    );
}
