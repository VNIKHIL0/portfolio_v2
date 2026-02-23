"use client";

import React from "react";

const HardwareInfo = () => {
    return (
        <div className="space-y-6">
            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">CENTRAL_PROCESSING_UNIT</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">PROCESSOR_TYPE:</span>
                        <span className="text-white font-bold">NIKHIL-V AI_OPTIMIZED_CORE</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">CLOCK_SPEED:</span>
                        <span className="text-white">4.20 GHZ (TURBO_ENABLED)</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">L1_CACHE:</span>
                        <span className="text-white">64 KB (DATA_SCIENCE_ALGORITHMS)</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">VIRTUALIZATION:</span>
                        <span className="text-green-500 underline">VT-X ENABLED (MACHINE_LEARNING)</span>
                    </div>
                </div>
            </div>

            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">MEMORY_MANAGEMENT</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">SYSTEM_RAM:</span>
                        <span className="text-white">32768 MB DDR4-3600</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">SWAP_FILE:</span>
                        <span className="text-white">EXPERIENCE_BUFFER.SYS (ACTIVE)</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">MEMORY_STATUS:</span>
                        <span className="text-green-500 font-bold">HEALTHY [OK]</span>
                    </div>
                </div>
            </div>

            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">STORAGE_CONTROLLER_#1</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">PRIMARY_MASTER:</span>
                        <span className="text-white">NEXT.JS_SSD_512GB</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">PRIMARY_SLAVE:</span>
                        <span className="text-white">REACT_LIBRARY_HDD</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">SECONDARY_MASTER:</span>
                        <span className="text-white">TAILWIND_CSS_CONTROLLER</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-[#aaaaaa]">S.M.A.R.T_STATUS:</span>
                        <span className="text-green-500">GOOD</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-2 text-[10px] opacity-40 italic">
                * HARDWARE METAPHORS REPRESENT ACTUAL SKILL PROFICIENCY AND EXPERIENCE LEVELS.
            </div>
        </div>
    );
};

export default HardwareInfo;
