"use client";

import React, { useState, useEffect } from "react";

const Settings = () => {
    const [theme, setTheme] = useState("default");
    const [scanlines, setScanlines] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("bios-theme") || "default";
        const savedScanlines = localStorage.getItem("bios-scanlines") !== "false";
        setTheme(savedTheme);
        setScanlines(savedScanlines);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("bios-theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleScanlines = () => {
        const newVal = !scanlines;
        setScanlines(newVal);
        localStorage.setItem("bios-scanlines", String(newVal));
        const scanlineEl = document.querySelector(".scanlines") as HTMLElement;
        if (scanlineEl) {
            scanlineEl.style.display = newVal ? "block" : "none";
        }
    };

    return (
        <div className="space-y-6">
            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">SYSTEM_DISPLAY_SETTINGS</h3>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-[#aaaaaa]">COLOR_PALETTE:</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleThemeChange("default")}
                                className={`px-3 py-1 bios-border ${theme === "default" ? "bios-highlight font-bold" : "bg-[#0000aa]/20"}`}
                            >
                                CLASSIC_BLUE
                            </button>
                            <button
                                onClick={() => handleThemeChange("matrix")}
                                className={`px-3 py-1 bios-border ${theme === "matrix" ? "bios-highlight font-bold text-black" : "bg-[#0000aa]/20"}`}
                                style={{ borderColor: "#00ff00", color: theme === "matrix" ? "#000" : "#00ff00" }}
                            >
                                MATRIX_GREEN
                            </button>
                            <button
                                onClick={() => handleThemeChange("amber")}
                                className={`px-3 py-1 bios-border ${theme === "amber" ? "bios-highlight font-bold text-black" : "bg-[#0000aa]/20"}`}
                                style={{ borderColor: "#ffaa00", color: theme === "amber" ? "#000" : "#ffaa00" }}
                            >
                                VINTAGE_AMBER
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-[#aaaaaa]">CRT_SCANLINE_EMULATION:</span>
                        <button
                            onClick={toggleScanlines}
                            className={`px-6 py-1 bios-border ${scanlines ? "text-green-500" : "text-red-500"}`}
                        >
                            {scanlines ? "[ ENABLED ]" : "[ DISABLED ]"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">I/O_SUBSYSTEM_CONTROLS</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-[#aaaaaa]">LEGACY_AUDIO_DRIVERS (BEEP):</span>
                        <span className="text-green-500 font-bold bg-green-500/10 px-2">VERSION 1.0.4 (ACTIVE)</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#aaaaaa]">DEFAULT_BOOT_PRIORITY:</span>
                        <span className="text-white">PRIMARY_SSD (PAGE_LOAD)</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 border-2 border-dashed border-[#aaaaaa]/30 text-center">
                <div className="text-xs italic mb-2">"CHANGES ARE SAVED TO CMOS BATTERY (LOCAL_STORAGE)"</div>
                <div className="text-white font-bold">PRESS [ F10 ] TO EXIT WITHOUT SAVING</div>
            </div>
        </div>
    );
};

export default Settings;
