"use client";

import React, { useState, useEffect } from "react";
import SoundManager from "@/utils/SoundManager";

interface BiosLayoutProps {
    children: React.ReactNode;
    menuItems: { id: string; label: string }[];
    activeSection: string;
    onSectionChange: (id: string) => void;
}

const BiosLayout: React.FC<BiosLayoutProps> = ({
    children,
    menuItems,
    activeSection,
    onSectionChange,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(
        menuItems.findIndex((item) => item.id === activeSection)
    );
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [diskActive, setDiskActive] = useState(false);

    // BIOS Header Clock
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSectionChange = async (id: string) => {
        if (id === activeSection) return;

        setIsLoading(true);
        setDiskActive(true);
        SoundManager.playDiskLoad();

        // Simulate hardware delay
        await new Promise(resolve => setTimeout(resolve, 800));

        onSectionChange(id);
        setIsLoading(false);
        setDiskActive(false);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp") {
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : menuItems.length - 1));
                SoundManager.playNav();
            } else if (e.key === "ArrowDown") {
                setSelectedIndex((prev) => (prev < menuItems.length - 1 ? prev + 1 : 0));
                SoundManager.playNav();
            } else if (e.key === "Enter") {
                handleSectionChange(menuItems[selectedIndex].id);
                SoundManager.playSelect();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, menuItems, activeSection]);

    return (
        <div className="min-h-screen flex flex-col p-4 font-mono select-none">
            <div className="scanlines"></div>
            <div className={`disk-activity ${diskActive ? "opacity-100" : "opacity-0"}`}></div>

            {/* BIOS Header */}
            <div className="bios-header mb-4 px-4">
                <span>AMIBIOS SETUP UTILITY - VERSION 1.23.4567</span>
                <span className="text-sm font-normal">
                    {currentTime.toLocaleTimeString()}
                </span>
            </div>

            <div className="flex flex-1 gap-4 overflow-hidden relative">
                {isLoading && (
                    <div className="loading-diagnostic">
                        <div className="mb-2 text-lg font-bold">READING SECTOR 0x{Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()}</div>
                        <div className="w-48 bg-gray-800 h-1.5 bios-border overflow-hidden">
                            <div className="bg-white h-full animate-progress-fast"></div>
                        </div>
                    </div>
                )}
                {/* Sidebar Menu */}
                <div className="w-64 bios-border p-2">
                    <div className="mb-2 border-b-2 border-[#aaaaaa] pb-1 text-center font-bold">
                        MAIN MENU
                    </div>
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li
                                key={item.id}
                                className={`px-2 py-0.5 cursor-pointer ${index === selectedIndex ? "bios-highlight" : ""
                                    } ${item.id === activeSection ? "text-white font-bold" : ""}`}
                                onClick={() => {
                                    setSelectedIndex(index);
                                    handleSectionChange(item.id);
                                    SoundManager.playSelect();
                                }}
                            >
                                {index === selectedIndex ? "> " : "  "}
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* content Area */}
                <div className="flex-1 bios-border p-4 relative overflow-y-auto custom-scrollbar">
                    <div className="mb-4 border-b-2 border-[#aaaaaa] pb-1 flex justify-between items-center">
                        <span className="font-bold">{menuItems.find(i => i.id === activeSection)?.label}</span>
                        <span className="text-xs text-white">DEVICE: PORTFOLIO_V2.SYS</span>
                    </div>
                    {children}
                </div>
            </div>

            {/* BIOS Footer */}
            <div className="bios-footer">
                <span>[↑↓] SELECT ITEM</span>
                <span>[ENTER] GO TO SECTION</span>
                <span>[ESC] BACK</span>
                <span>[F10] SAVE & EXIT</span>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0000aa;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #aaaaaa;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        @keyframes progress-fast {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-progress-fast {
            animation: progress-fast 0.6s infinite linear;
        }
      `}</style>
        </div>
    );
};

export default BiosLayout;
