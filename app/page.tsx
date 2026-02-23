"use client";

import React, { useState } from "react";
import BiosLayout from "@/components/BiosLayout";
import Intro from "@/components/Intro";
import Summary from "@/components/Summary";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import AdditionalInfo from "@/components/AdditionalInfo";
import HardwareInfo from "@/components/HardwareInfo";
import Settings from "@/components/Settings";
import CliShell from "@/components/CliShell";
import RemoteCommInterface from "@/components/RemoteCommInterface";
import SoundManager from "@/utils/SoundManager";

const menuItems = [
  { id: "summary", label: "01. SUMMARY" },
  { id: "projects", label: "02. PROJECTS" },
  { id: "experience", label: "03. EXPERIENCE" },
  { id: "skills", label: "04. SKILLS" },
  { id: "education", label: "05. EDUCATION" },
  { id: "info", label: "06. ADDITIONAL INFO" },
  { id: "hardware", label: "07. HARDWARE INFO" },
  { id: "cli", label: "08. TERMINAL SHELL" },
  { id: "comms", label: "09. REMOTE_COMM_INTERFACE" },
  { id: "settings", label: "10. SETUP UTILITY" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("summary");
  const [showIntro, setShowIntro] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleInitialize = () => {
    SoundManager.init();
    setIsInitialized(true);
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bios-border p-8 text-center bg-[#0000aa] animate-pulse cursor-pointer max-w-md w-full" onClick={handleInitialize}>
          <div className="text-white font-bold mb-4 text-xl underline italic">SYSTEM_STATUS: STANDBY</div>
          <div className="text-[#aaaaaa] mb-8 font-mono">WARNING: RETRO_AUDIO_CORE REQUIRES USER_SENTIENCE_HANDSHAKE.</div>
          <div className="bios-highlight p-2 text-sm font-bold uppercase tracking-widest">
            [ CLICK TO POWER ON ]
          </div>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return <Intro onComplete={() => setShowIntro(false)} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case "summary":
        return <Summary />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "info":
        return <AdditionalInfo />;
      case "hardware":
        return <HardwareInfo />;
      case "cli":
        return <CliShell />;
      case "comms":
        return <RemoteCommInterface />;
      case "settings":
        return <Settings />;
      default:
        return <Summary />;
    }
  };

  return (
    <main className="min-h-screen bg-[#0000aa]">
      <BiosLayout
        menuItems={menuItems}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      >
        <div className="animate-in fade-in duration-500">
          {renderSection()}
        </div>
      </BiosLayout>
    </main>
  );
}
