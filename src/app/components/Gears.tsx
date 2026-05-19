import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Flame, Sun, Wind, Zap } from "lucide-react";
import gear1 from "../../imports/gear-1.jpeg";
import gear2 from "../../imports/gear-2.jpeg";
import gear3 from "../../imports/gear-3.jpeg";
import gear4 from "../../imports/gear-4.jpeg";
import gear5 from "../../imports/gear5.jpeg";

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
  Icon: typeof Zap;
  model: string;
  unlocked: string;
  status: string;
  image: string;
};

const gears: Gear[] = [
  {
    id: "g1",
    num: "01",
    name: "Base Form",
    jp: "ゴム人間",
    tagline: "Rubber Body",
    desc: "The original Gum-Gum fighting style. Elastic strikes, reckless momentum, and the grin that starts every impossible fight.",
    accent: "#0EA5E9",
    accentDeep: "#075985",
    Icon: Zap,
    model: "GUM-GUM // ORIGIN",
    unlocked: "EAST BLUE",
    status: "ACTIVE",
    image: gear1,
  },
  {
    id: "g2",
    num: "02",
    name: "Gear Second",
    jp: "ギア・セカンド",
    tagline: "Steam Engine",
    desc: "Pumping blood at engine speed. Luffy moves faster than the eye can follow, trading stamina for blinding velocity.",
    accent: "#E11D48",
    accentDeep: "#7A0F2A",
    Icon: Wind,
    model: "GUM-GUM // ACCEL",
    unlocked: "ENIES LOBBY",
    status: "OVERDRIVE",
    image: gear2,
  },
  {
    id: "g3",
    num: "03",
    name: "Gear Third",
    jp: "ギア・サード",
    tagline: "Bone Balloon",
    desc: "Inflating his skeleton to giant proportions. Huge reach, devastating impact, and a cartoon-heavy punch line.",
    accent: "#B8861A",
    accentDeep: "#6E4D08",
    Icon: Activity,
    model: "GUM-GUM // GIANT",
    unlocked: "WATER 7",
    status: "IMPACT",
    image: gear3,
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
    Icon: Flame,
    model: "GUM-GUM // HAKI",
    unlocked: "DRESSROSA",
    status: "HAKI",
    image: gear4,
  },
  {
    id: "g5",
    num: "05",
    name: "Gear Fifth",
    jp: "ニカ",
    tagline: "Sun God Nika",
    desc: "The awakening of the Hito Hito no Mi, Model: Nika. Freedom made flesh, cartoon physics, infinite imagination.",
    accent: "#D4A017",
    accentDeep: "#8A5F08",
    Icon: Sun,
    model: "HITO HITO // NIKA",
    unlocked: "EGGHEAD",
    status: "AWAKENED",
    image: gear5,
  },
];

export function Gears() {
  const [index, setIndex] = useState(4);
  const active = gears[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % gears.length);
    }, 8000);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative h-[calc(100vh-74px)] min-h-[680px] overflow-hidden"
      style={{
        backgroundColor: CREAM,
        color: INK,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={active.id}
          src={active.image}
          alt=""
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            opacity: { duration: 0.9, ease: "easeInOut" },
            scale: { duration: 8, ease: "easeOut" },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${CREAM}F2 0%, ${CREAM}CC 29%, ${CREAM}55 58%, transparent 100%), linear-gradient(0deg, ${INK}B8 0%, transparent 36%), radial-gradient(circle at 68% 30%, ${active.accent}66 0%, transparent 42%)`,
        }}
      />

      <div
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 text-[10px] tracking-[0.4em] md:block"
        style={{ ...mono, color: INK, writingMode: "vertical-rl" }}
      >
        STRAW HAT PIRATES // CAPTAIN // FILE_NO.LUFFY
      </div>

      <div
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-[10px] tracking-[0.4em] md:block"
        style={{ ...mono, color: BONE, writingMode: "vertical-rl" }}
      >
        GEAR {active.num} // {active.status}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 lg:px-12 lg:py-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className="px-2 py-0.5 text-[10px] tracking-[0.2em]"
                style={{ ...mono, backgroundColor: INK, color: BONE }}
              >
                ARSENAL // 05
              </span>
              <span className="text-[11px] tracking-[0.2em]" style={mono}>
                LUFFY // GEAR TRANSFORMATIONS
              </span>
            </div>
            <h1
              className="text-6xl uppercase leading-[0.82] sm:text-7xl lg:text-8xl xl:text-[10rem]"
              style={{ ...display, color: INK }}
            >
              Luffy
              <span
                style={{
                  color: active.accent,
                  textShadow: `4px 4px 0 ${INK}`,
                }}
              >
                's
              </span>{" "}
              Gears
            </h1>
          </div>
          <div className="hidden text-right sm:block">
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

        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${active.id}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="text-7xl leading-none lg:text-8xl"
                  style={{
                    ...display,
                    color: active.accent,
                    textShadow: `4px 4px 0 ${INK}`,
                  }}
                >
                  {active.num}
                </span>
                <div>
                  <div className="text-[10px] tracking-[0.3em]" style={mono}>
                    // FORM
                  </div>
                  <div
                    className="text-3xl uppercase leading-none lg:text-5xl"
                    style={{ ...display, color: INK }}
                  >
                    {active.tagline}
                  </div>
                </div>
              </div>
              <h2
                className="mb-2 text-5xl uppercase leading-[0.9] lg:text-7xl"
                style={display}
              >
                {active.name}
              </h2>
              <div
                className="mb-4 text-2xl lg:text-4xl"
                style={{
                  ...jp,
                  color: active.accentDeep,
                  fontWeight: 900,
                }}
              >
                {active.jp}
              </div>
              <p className="max-w-xl text-base leading-relaxed lg:text-lg">
                {active.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.aside
              key={`data-${active.id}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:justify-self-end"
            >
              <div
                className="w-full max-w-md p-4 lg:p-5"
                style={{
                  backgroundColor: BONE,
                  border: `2px solid ${INK}`,
                  boxShadow: `6px 6px 0 ${INK}`,
                }}
              >
                <div className="mb-3 flex items-center justify-between">
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
                <div className="grid grid-cols-2 gap-y-2 text-xs" style={mono}>
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
                  <span
                    className="text-right"
                    style={{ color: active.accent, fontWeight: 700 }}
                  >
                    {active.status}
                  </span>
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {gears.map((gear, gearIndex) => {
              const isActive = gear.id === active.id;
              return (
                <motion.button
                  key={gear.id}
                  type="button"
                  onClick={() => setIndex(gearIndex)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 lg:px-4"
                  style={{
                    backgroundColor: isActive ? gear.accent : BONE,
                    color: isActive ? BONE : INK,
                    border: `2px solid ${INK}`,
                    boxShadow: isActive
                      ? `4px 4px 0 ${INK}`
                      : `2px 2px 0 ${INK}`,
                  }}
                  aria-label={`Show ${gear.name}`}
                >
                  <gear.Icon className="h-4 w-4" />
                  <span className="text-sm tracking-[0.18em]" style={display}>
                    GEAR {gear.num}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em]" style={mono}>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(gears.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              {gears.map((gear, gearIndex) => (
                <motion.button
                  key={`dot-${gear.id}`}
                  type="button"
                  onClick={() => setIndex(gearIndex)}
                  animate={{ width: gearIndex === index ? 56 : 22 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="h-2"
                  style={{
                    backgroundColor: gearIndex === index ? active.accent : INK,
                    opacity: gearIndex === index ? 1 : 0.45,
                  }}
                  aria-label={`Slide ${gearIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
