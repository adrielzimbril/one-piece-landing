import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { members } from "../members";

const display = { fontFamily: 'Anton, sans-serif' };
const jp = { fontFamily: '"Noto Sans JP", sans-serif' };
const mono = { fontFamily: '"JetBrains Mono", monospace' };

const C = { cream: '#EFE7D2', ink: '#0B0B0B', bone: '#F8F2E2', red: '#E2231A' };

type Props = { onSelect: (id: string) => void };

export function Crew({ onSelect }: Props) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-6 lg:py-8" style={{ backgroundColor: C.cream, color: C.ink, fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-end justify-between mb-6 lg:mb-8 gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-[10px] tracking-[0.2em]" style={{ ...mono, backgroundColor: C.red, color: C.bone }}>ROSTER // 10</span>
            <span className="text-[11px] tracking-[0.2em]" style={mono}>STRAW HAT PIRATES // 麦わらの一味</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[0.85] uppercase" style={display}>
            <span className="block">Straw Hat</span>
            <span className="block" style={{ color: C.red, textShadow: `4px 4px 0 ${C.ink}` }}>Pirates</span>
          </h1>
          <div className="text-xl lg:text-2xl mt-1" style={{ ...jp, fontWeight: 900 }}>麦わらの一味</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.25em]" style={mono}>CREW BOUNTY</div>
          <div className="text-3xl lg:text-4xl" style={{ ...display, color: C.red }}>฿ 8,816,001,000</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
        {members.map((m, i) => (
          <motion.button
            key={m.id}
            onClick={() => onSelect(m.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            className="text-left relative overflow-hidden group"
            style={{ backgroundColor: C.bone, border: `2px solid ${C.ink}`, boxShadow: `5px 5px 0 ${C.ink}` }}
          >
            <div
              className="h-40 lg:h-48 w-full relative"
              style={{
                background: `linear-gradient(135deg, ${m.color} 0%, ${m.colorDeep} 100%)`,
              }}
            >
              <div
                className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] tracking-[0.2em]"
                style={{ ...mono, backgroundColor: C.ink, color: C.bone }}
              >
                NO.{String(i + 1).padStart(3, '0')}
              </div>
              <div
                className="absolute bottom-2 right-2 text-3xl lg:text-4xl leading-none opacity-70"
                style={{ ...jp, color: C.bone, fontWeight: 900 }}
              >
                {m.jp}
              </div>
            </div>
            <div className="p-3 lg:p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] tracking-[0.2em]" style={mono}>{m.role.toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
              </div>
              <div className="text-xl lg:text-2xl leading-none uppercase" style={display}>{m.alias}</div>
              <div className="text-xs mt-1 opacity-70">{m.name}</div>
              <div className="h-px w-full my-2" style={{ backgroundColor: C.ink, opacity: 0.2 }} />
              <div className="flex items-center justify-between text-[10px]" style={mono}>
                <span className="opacity-60">BOUNTY</span>
                <span style={{ color: m.color, fontWeight: 700 }}>฿ {m.bounty}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
