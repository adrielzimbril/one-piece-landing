import { motion } from "motion/react";
import { ArrowLeft, Quote } from "lucide-react";
import type { Member } from "../members";

const display = { fontFamily: "Anton, sans-serif" };
const jp = { fontFamily: '"Noto Sans JP", sans-serif' };
const mono = { fontFamily: '"JetBrains Mono", monospace' };

const BONE = "#F2F2F2";
const INK = "#0B0B0B";

type Props = { member: Member; onBack: () => void };

export function MemberPage({ member, onBack }: Props) {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${member.color}33 0%, transparent 60%), linear-gradient(180deg, ${BONE} 0%, ${member.color}1F 100%)`,
        color: INK,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Side label */}
      <div
        className="fixed left-3 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] z-10"
        style={{ ...mono, color: INK, writingMode: "vertical-rl" }}
      >
        STRAW HAT // {member.role.toUpperCase()} // ONE PIECE
      </div>
      <div
        className="fixed right-3 top-1/2 -translate-y-1/2 text-3xl z-10"
        style={{
          ...jp,
          color: member.color,
          fontWeight: 900,
          writingMode: "vertical-rl",
          textShadow: `2px 2px 0 ${INK}`,
        }}
      >
        {member.jp} // 麦わら
      </div>

      <header className="px-6 lg:px-12 py-4 lg:py-5 flex items-center justify-between">
        <motion.button
          whileHover={{ x: -4 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            backgroundColor: INK,
            color: BONE,
            border: `2px solid ${INK}`,
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-[0.15em]" style={display}>
            BACK TO CREW
          </span>
        </motion.button>
        <div className="flex items-center gap-2">
          <span
            className="px-2 py-1 text-[10px] tracking-[0.2em]"
            style={{ ...mono, backgroundColor: INK, color: BONE }}
          >
            FILE_NO.{member.id.toUpperCase()}
          </span>
          <span
            className="px-2 py-1 text-[10px] tracking-[0.2em]"
            style={{ ...mono, backgroundColor: member.color, color: BONE }}
          >
            ● ACTIVE
          </span>
        </div>
      </header>

      <main className="px-6 lg:px-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT: Big poster area (placeholder bg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${member.color} 0%, ${member.colorDeep} 100%)`,
              border: `3px solid ${INK}`,
              boxShadow: `8px 8px 0 ${INK}`,
            }}
          >
            {/* paint splatter feel */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at 70% 80%, ${INK} 0%, transparent 35%), radial-gradient(circle at 20% 30%, ${BONE}55 0%, transparent 40%)`,
              }}
            />
            {/* Vertical name */}
            <div
              className="absolute left-4 top-4 bottom-4 flex items-start"
              style={{ writingMode: "vertical-rl" }}
            >
              <span
                className="text-7xl lg:text-9xl leading-none uppercase"
                style={{
                  ...display,
                  color: BONE,
                  textShadow: `4px 4px 0 ${INK}`,
                }}
              >
                {member.alias}
              </span>
            </div>
            {/* Big JP */}
            <div
              className="absolute right-6 top-6 text-7xl lg:text-9xl leading-none"
              style={{ ...jp, color: BONE, opacity: 0.85, fontWeight: 900 }}
            >
              {member.jp}
            </div>
            {/* Placeholder figure tag */}
            <div
              className="absolute bottom-4 right-4 px-2 py-1 text-[10px] tracking-[0.25em]"
              style={{ ...mono, backgroundColor: BONE, color: INK }}
            >
              // BACKGROUND PENDING
            </div>
          </motion.div>

          {/* RIGHT: Info panels */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="text-[11px] tracking-[0.3em] mb-1" style={mono}>
                {member.role.toUpperCase()} // STRAW HAT
              </div>
              <h1
                className="text-5xl lg:text-7xl leading-[0.85] uppercase"
                style={{ ...display, color: INK }}
              >
                {member.name.split(" ").map((w, i) => (
                  <span
                    key={i}
                    className="block"
                    style={
                      i === 1
                        ? {
                            color: member.color,
                            textShadow: `3px 3px 0 ${INK}`,
                          }
                        : undefined
                    }
                  >
                    {w}
                  </span>
                ))}
              </h1>
              <div
                className="mt-2 text-2xl lg:text-3xl"
                style={{ ...jp, fontWeight: 900, color: member.colorDeep }}
              >
                {member.jp}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 lg:p-5"
              style={{
                backgroundColor: BONE,
                border: `2px solid ${INK}`,
                boxShadow: `5px 5px 0 ${INK}`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-1.5 py-0.5 text-[10px] tracking-[0.2em]"
                  style={{ ...mono, backgroundColor: INK, color: BONE }}
                >
                  DATA FILE
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] opacity-70"
                  style={mono}
                >
                  BIO // STATS
                </span>
              </div>
              <p className="text-sm lg:text-base mb-4">{member.bio}</p>
              <div className="grid grid-cols-2 gap-y-2 text-xs" style={mono}>
                <span className="opacity-60">ALIAS</span>
                <span className="text-right">{member.alias}</span>
                <span className="opacity-60">ROLE</span>
                <span className="text-right">{member.role}</span>
                <span className="opacity-60">FRUIT</span>
                <span className="text-right">{member.fruit}</span>
                <span className="opacity-60">BOUNTY</span>
                <span
                  className="text-right"
                  style={{ color: member.color, fontWeight: 700 }}
                >
                  ฿ {member.bounty}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 lg:p-5 relative"
              style={{
                backgroundColor: member.color,
                color: BONE,
                border: `2px solid ${INK}`,
                boxShadow: `5px 5px 0 ${INK}`,
              }}
            >
              <Quote className="w-5 h-5 mb-2 opacity-80" />
              <p className="text-lg lg:text-xl leading-snug" style={display}>
                "{member.quote}"
              </p>
              <div
                className="text-[10px] tracking-[0.25em] mt-2 opacity-80"
                style={mono}
              >
                — {member.alias.toUpperCase()}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
