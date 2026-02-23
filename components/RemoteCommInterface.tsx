"use client";

import React from "react";

const RemoteCommInterface = () => {
    const links = [
        { label: "INSTAGRAM_LINK", value: "https://www.instagram.com/nikhil._.v", type: "SOCIAL" },
        { label: "LINKEDIN_PORT", value: "https://www.linkedin.com/in/v-nikhil", type: "PROFESSIONAL" },
        { label: "GITHUB_LOCAL", value: "https://github.com/VNIKHIL0", type: "DEVELOPMENT" },
        { label: "GMAIL_GATEWAY", value: "mailto:nikhilv.work@gmail.com", type: "DIRECT_COMMS" },
    ];

    return (
        <div className="space-y-6">
            <div className="bios-border p-4 bg-black/20">
                <h3 className="text-white font-bold mb-4 underline">COMMUNICATION_LINK_ESTABLISHMENT</h3>
                <div className="space-y-4">
                    {links.map((link, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row border-b border-white/10 pb-2 hover:bg-white/5 transition-colors group">
                            <span className="w-48 text-[#aaaaaa] font-mono text-sm">{link.label}:</span>
                            <a
                                href={link.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-bold hover:text-green-400 break-all"
                            >
                                {link.value.replace("mailto:", "")}
                                <span className="ml-2 opacity-0 group-hover:opacity-100 text-[10px] text-green-400">[ CONNECT ]</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bios-border p-4 border-dashed opacity-70">
                <div className="text-xs font-mono text-white mb-2">INTERFACE_STABILITY: 99.9%</div>
                <div className="text-[#aaaaaa] text-[10px]">
                    SIGNALS ARE ROUTED THROUGH ENCRYPTED CHANNELS. INITIALIZE HANDSHAKE BY SELECTING A PORT ABOVE.
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <div className="bios-border p-4 w-full md:w-2/3 text-center bg-black/40">
                    <div className="text-yellow-500 font-bold mb-1">NETWORK_ADVISORY</div>
                    <div className="text-xs text-white">RECRUITERS: PLEASE USE GMAIL_GATEWAY FOR HIGH_PRIORITY_INTERRUPTS.</div>
                </div>
            </div>
        </div>
    );
};

export default RemoteCommInterface;
