"use client";

import React, { useState, useEffect, useRef } from "react";

const CliShell = () => {
    const [history, setHistory] = useState<string[]>([
        "PORTFOLIO_V2 COMMAND LINE INTERFACE",
        "COPYRIGHT (C) 2026 NIKHIL-V SYSTEMS",
        "TYPE 'HELP' FOR A LIST OF COMMANDS.",
        ""
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toUpperCase();
        let response = "";

        switch (cmd) {
            case "HELP":
                response = "AVAILABLE COMMANDS: HELP, DIR, VER, CLS, ABOUT, WHOAMI, EXIT";
                break;
            case "DIR":
                response = "PROJECTS/\nEXPERIENCE/\nSKILLS/\nABOUT_ME.TXT\nSYSTEM.SYS";
                break;
            case "VER":
                response = "PORTFOLIO_DOS VERSION 6.22.2026";
                break;
            case "CLS":
                setHistory([]);
                setInput("");
                return;
            case "ABOUT":
                response = "NIKHIL V - AI & DATA SCIENCE STUDENT. SPECIALIZING IN INTELLIGENT SYSTEMS AND MODERN WEB ARCHITECTURES.";
                break;
            case "WHOAMI":
                response = "CURRENT_USER: GUEST_RECRUITER\nPRIVILEGES: READ_ONLY";
                break;
            case "EXIT":
                response = "UNABLE TO EXIT TO SYSTEM_PROMPT. BIOS_LOCK_ENABLED.";
                break;
            default:
                response = `'${cmd}' IS NOT RECOGNIZED AS AN INTERNAL OR EXTERNAL COMMAND.`;
        }

        setHistory((prev) => [...prev, `C:\\>${input}`, response, ""]);
        setInput("");
    };

    return (
        <div className="bios-border flex flex-col h-full bg-black/40 font-mono text-sm">
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" ref={scrollRef}>
                {history.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap mb-1">{line}</div>
                ))}
            </div>
            <form onSubmit={handleCommand} className="flex p-4 border-t border-[#aaaaaa]/30 bg-black/20">
                <span className="mr-2">C:\{">"}</span>
                <input
                    autoFocus
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none border-none uppercase text-[#00ff00]"
                    spellCheck={false}
                />
            </form>
        </div>
    );
};

export default CliShell;
