"use client";

import React, { useState, useEffect, useRef } from "react";
import SoundManager from "@/utils/SoundManager";

interface IntroProps {
    onComplete: () => void;
}

const BOOT_LOGS = [
    "INITIALIZING PORTFOLIO_V2 SYSTEMS...",
    "LOADING KERNEL_MODULES... [OK]",
    "DETECTING HARDWARE CAPABILITIES...",
    "CPU: CORE_AI_AGENT @ 4.20GHZ",
    "MEMORY: 640KB BASE / 16384KB EXTENDED",
    "STORAGE: IDE_HDC_0 [MOUNTED]",
    "FILE_SYSTEM: PORTFOLIO_DOS_6.22",
    "INITIALIZING NETWORK_STACK... [OK]",
    "IP_ADDRESS: 127.0.0.1",
    "MAC_ADDRESS: DE:AD:BE:EF:00:01",
    "LOADING GRAPHICS_DRIVER: BIOS_VGA_MODE_13H",
    "CHECKING SECURITY_PROTOCOLS...",
    "FIREWALL... [ENABLED]",
    "ENCRYPTION... [AES-256-BIT]",
    "LOADING USER_PROFILE: NIKHIL V",
    "SYSCALL: OPEN_PORTFOLIO_V2.EXE",
    "EXEC: BOOTSTRAP.BAT",
    "------------------------------------",
    "SYSTEM READINESS: 100%",
    "STARTING AMIBIOS SETUP UTILITY...",
];

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    const [phase, setPhase] = useState<"typing" | "booting">("typing");
    const [typedName, setTypedName] = useState("");
    const [logs, setLogs] = useState<string[]>([]);
    const [showCursor, setShowCursor] = useState(true);
    const logContainerRef = useRef<HTMLDivElement>(null);

    const nameToType = "NIKHIL V";

    // Phase 1: Typing Name
    useEffect(() => {
        if (phase === "typing") {
            let i = 0;
            const timer = setInterval(() => {
                if (i < nameToType.length) {
                    setTypedName((prev) => prev + nameToType[i]);
                    SoundManager.playTyping();
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        setPhase("booting");
                        SoundManager.playBootBeep();
                    }, 1000);
                }
            }, 150);
            return () => clearInterval(timer);
        }
    }, [phase]);

    // Phase 2: Boot Logs
    useEffect(() => {
        if (phase === "booting") {
            let i = 0;
            const timer = setInterval(() => {
                if (i < BOOT_LOGS.length) {
                    setLogs((prev) => [...prev, BOOT_LOGS[i]]);
                    SoundManager.playBeep(200 + (i * 20), 0.05, 0.02, "square");
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => onComplete(), 1500);
                }
            }, 100);
            return () => clearInterval(timer);
        }
    }, [phase, onComplete]);

    // Cursor Blinking
    useEffect(() => {
        const timer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(timer);
    }, []);

    // Auto-scroll logs
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="fixed inset-0 bg-black text-[#00FF00] font-mono p-4 md:p-10 z-[10000] overflow-hidden flex flex-col uppercase">
            <div className="flex-1 overflow-y-auto custom-scrollbar" ref={logContainerRef}>
                <div className="mb-4">
                    C:\{">"} USER_LOGIN --ID
                    <br />
                    ENTER_NAME: {typedName}
                    {phase === "typing" && showCursor && "|"}
                </div>

                {phase === "booting" && (
                    <div className="space-y-1">
                        {logs.map((log, index) => (
                            <div key={index} className="animate-in slide-in-from-left-2 duration-300">
                                {log}
                            </div>
                        ))}
                        {showCursor && "|"}
                    </div>
                )}
            </div>

            <div className="mt-4 text-xs opacity-50 flex justify-between">
                <span>MS-DOS VERSION 6.22</span>
                <span>2026-02-23 14:33</span>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00FF00;
        }
      `}</style>
        </div>
    );
};

export default Intro;
