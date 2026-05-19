import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Flame, Wind, Activity, Sun } from "lucide-react";

const display = { fontFamily: "Anton, sans-serif" };
const jp = { fontFamily: '"Noto Sans JP", sans-serif' };
const mono = { fontFamily: '"JetBrains Mono", monospace' };

const BONE = "#F2F2F2";
const CREAM = "#F8F8F8";
const INK = "#0B0B0B";

type Gear = {
  id: string;
  num: string;
  name: string;
  jp: string;
  tagline: string;
  desc: string;
  accent: string;
  accentDeep: string;
  splat: string;
  Icon: typeof Zap;
  model: string;
  unlocked: string;
};

const gears: Gear[] = [
  {
    id: "g2",
    num: "02",
    name: "Gear Second",
    jp: "ギア・セカンド",
    tagline: "Steam Engine",
    desc: "Pumping blood at engine speed — Luffy moves faster than the eye can follow, trading stamina for blinding velocity.",
    accent: "#E11D48",
    accentDeep: "#7A0F2A",
    splat: "#E11D48",
    Icon: Wind,
    model: "GUM-GUM // ACCEL",
    unlocked: "ENIES LOBBY",
  },
  {
    id: "g3",
    num: "03",
    name: "Gear Third",
    jp: "ギア・サード",
    tagline: "Bone Balloon",
    desc: "Inflating his skeleton to giant proportions — devastating impact, but the cost is shrinking down small after.",
    accent: "#B8861A",
    accentDeep: "#6E4D08",
    splat: "#B8861A",
    Icon: Activity,
    model: "GUM-GUM // GIANT",
    unlocked: "WATER 7",
  },
  {
    id: "g4",
    num: "04",
    name: "Gear Fourth",
    jp: "ギア・フォース",
    tagline: "Boundman / Snakeman",
    desc: "Haki-infused rubber compression. Bounce, recoil, and a fluid fighting form built to break the New World.",
    accent: "#7C3AED",
    accentDeep: "#3F1373",
    splat: "#7C3AED",
    Icon: Flame,
    model: "GUM-GUM // HAKI",
    unlocked: "DRESSROSA",
  },
  {
    id: "g5",
    num: "05",
    name: "Gear Fifth",
    jp: "ニカ",
    tagline: "Sun God Nika",
    desc: "The awakening of the Hito Hito no Mi, Model: Nika. Freedom made flesh — cartoon physics, infinite imagination.",
    accent: "#D4A017",
    accentDeep: "#8A5F08",
    splat: "#7C3AED",
    Icon: Sun,
    model: "HITO HITO // NIKA",
    unlocked: "EGGHEAD",
  },
];

export function Gears() {
  const [active, setActive] = useState<Gear>(gears[3]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 75% 30%, ${active.splat}22 0%, transparent 55%), linear-gradient(180deg, ${BONE} 0%, ${CREAM} 100%)`,
        color: INK,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Side vertical labels */}
      <div
        className="fixed left-3 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] z-10"
        style={{ ...mono, color: INK, writingMode: "vertical-rl" }}
      >
        STRAW HAT PIRATES // CAPTAIN // FILE_NO.LUFFY
      </div>

      <div className="px-6 lg:px-12 py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 lg:mb-8 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2 py-0.5 text-[10px] tracking-[0.2em]"
                style={{ ...mono, backgroundColor: INK, color: BONE }}
              >
                ARSENAL // 04
              </span>
              <span className="text-[11px] tracking-[0.2em]" style={mono}>
                LUFFY // GEAR TRANSFORMATIONS
              </span>
            </div>
            <h1
              className="text-7xl sm:text-8xl lg:text-[10rem] leading-[0.82] uppercase"
              style={{ ...display, color: INK }}
            >
              Luffy
              <span
                style={{ color: active.accent, textShadow: `4px 4px 0 ${INK}` }}
              >
                's
              </span>{" "}
              Gears
            </h1>
          </div>
          <div className="text-right">
            <div className="text-[10px] tracking-[0.25em]" style={mono}>
              BOUNTY
            </div>
            <div
              className="text-4xl lg:text-5xl"
              style={{
                ...display,
                color: active.accent,
                textShadow: `2px 2px 0 ${INK}`,
              }}
            >
              ฿ 3,000,000,000
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {gears.map((g) => {
            const isActive = g.id === active.id;
            return (
              <motion.button
                key={g.id}
                onClick={() => setActive(g)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded-full inline-flex items-center gap-2"
                style={{
                  backgroundColor: isActive ? g.accent : BONE,
                  color: isActive ? BONE : INK,
                  border: `2px solid ${INK}`,
                  boxShadow: isActive ? `4px 4px 0 ${INK}` : `2px 2px 0 ${INK}`,
                }}
              >
                <g.Icon className="w-4 h-4" />
                <span className="text-sm tracking-[0.2em]" style={display}>
                  GEAR {g.num}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Poster */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`poster-${active.id}`}
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden"
              style={{
                background: `radial-gradient(circle at 30% 80%, ${active.splat}55 0%, transparent 40%), radial-gradient(circle at 80% 20%, ${active.accent}66 0%, transparent 45%), ${BONE}`,
                border: `3px solid ${INK}`,
                boxShadow: `8px 8px 0 ${INK}`,
              }}
            >
              {/* Left vertical LUFFY */}
              <div
                className="absolute left-4 top-4 bottom-4 flex items-start"
                style={{ writingMode: "vertical-rl" }}
              >
                <span
                  className="text-7xl lg:text-9xl leading-none uppercase"
                  style={{ ...display, color: INK }}
                >
                  Luffy ✦ Gear {active.num}
                </span>
              </div>
              {/* Right giant JP */}
              <div
                className="absolute right-6 top-6 text-7xl lg:text-9xl leading-none"
                style={{
                  ...jp,
                  color: active.accent,
                  fontWeight: 900,
                  textShadow: `4px 4px 0 ${INK}`,
                }}
              >
                {active.jp}
              </div>
              {/* Tagline */}
              <div className="absolute bottom-6 right-6 text-right max-w-xs">
                <div className="text-[10px] tracking-[0.3em] mb-1" style={mono}>
                  // FORM
                </div>
                <div
                  className="text-3xl lg:text-4xl uppercase"
                  style={{ ...display, color: INK }}
                >
                  {active.tagline}
                </div>
              </div>
              {/* Placeholder tag */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] tracking-[0.25em]"
                style={{ ...mono, backgroundColor: INK, color: BONE }}
              >
                // BACKGROUND PENDING
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Data panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`data-${active.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 lg:p-5"
                style={{
                  backgroundColor: BONE,
                  border: `2px solid ${INK}`,
                  boxShadow: `5px 5px 0 ${INK}`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-1.5 py-0.5 text-[10px] tracking-[0.2em]"
                    style={{ ...mono, backgroundColor: INK, color: BONE }}
                  >
                    DATA FILE
                  </span>
                  <span className="text-[10px]" style={mono}>
                    FILE_NO.GEAR{active.num}
                  </span>
                </div>
                <h2
                  className="text-4xl lg:text-5xl leading-none uppercase mb-1"
                  style={display}
                >
                  {active.name}
                </h2>
                <div
                  className="text-xl mb-3"
                  style={{ ...jp, color: active.accentDeep, fontWeight: 900 }}
                >
                  {active.jp}
                </div>
                <p className="text-sm lg:text-base mb-4">{active.desc}</p>
                <div
                  className="h-px w-full mb-3"
                  style={{ backgroundColor: INK, opacity: 0.2 }}
                />
                <div
                  className="grid grid-cols-2 gap-y-1.5 text-xs"
                  style={mono}
                >
                  <span className="opacity-60">DEVIL FRUIT</span>
                  <span className="text-right">HITO HITO NO MI</span>
                  <span className="opacity-60">MODEL</span>
                  <span
                    className="text-right"
                    style={{ color: active.accent, fontWeight: 700 }}
                  >
                    {active.model}
                  </span>
                  <span className="opacity-60">UNLOCKED</span>
                  <span className="text-right">{active.unlocked}</span>
                  <span className="opacity-60">STATUS</span>
                  <span className="text-right" style={{ color: active.accent }}>
                    ● AWAKENED
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`quote-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="p-4 lg:p-5 relative"
                style={{
                  backgroundColor: active.accent,
                  color: BONE,
                  border: `2px solid ${INK}`,
                  boxShadow: `5px 5px 0 ${INK}`,
                }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] opacity-80 mb-2"
                  style={mono}
                >
                  // SUN GOD NIKA
                </div>
                <p
                  className="text-xl lg:text-2xl leading-snug uppercase"
                  style={display}
                >
                  "I'm gonna be King of the Pirates!"
                </p>
                <div
                  className="text-[10px] tracking-[0.25em] mt-3 opacity-80"
                  style={mono}
                >
                  — MONKEY D. LUFFY
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
