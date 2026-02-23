"use client";

class SoundManager {
    private audioCtx: AudioContext | null = null;
    private isInitialized: boolean = false;

    constructor() { }

    init() {
        if (typeof window === "undefined" || this.isInitialized) return;
        this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.isInitialized = true;
    }

    private async ensureAudioContext() {
        if (!this.audioCtx) this.init();
        if (this.audioCtx?.state === "suspended") {
            await this.audioCtx.resume();
        }
    }

    async playBeep(frequency: number, duration: number, volume: number = 0.1, type: OscillatorType = "square") {
        await this.ensureAudioContext();
        if (!this.audioCtx) return;

        const oscillator = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

        gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        oscillator.start();
        oscillator.stop(this.audioCtx.currentTime + duration);
    }

    async playTyping() {
        // Mechanical click sound: short high-pitched blip
        await this.playBeep(400 + Math.random() * 200, 0.05, 0.05, "sine");
    }

    async playNav() {
        await this.playBeep(880, 0.05, 0.05, "sine");
    }

    async playSelect() {
        await this.playBeep(1200, 0.1, 0.05, "sine");
    }

    async playBootBeep() {
        await this.playBeep(800, 0.5, 0.1, "square");
    }

    async playDiskLoad() {
        await this.ensureAudioContext();
        if (!this.audioCtx) return;

        for (let i = 0; i < 5; i++) {
            const time = this.audioCtx.currentTime + i * 0.05;
            this.playBeep(100 + Math.random() * 100, 0.02, 0.02, "sawtooth");
        }
    }
}

const instance = new SoundManager();
export default instance;
