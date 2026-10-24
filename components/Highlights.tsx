import React from 'react';
import { HIGHLIGHTS } from '../constants';

const tagStyles = [
  // 0: Overall (Blue)
  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30",
  // 1: Solverix (Indigo)
  "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
  // 2: Oxstren (Cyan)
  "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30",
  // 3: Oxstren (Sky)
  "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-500/30",
  // 4: Innovins (Emerald)
  "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
];

const hoverGlows = [
  "via-blue-500/60",
  "via-indigo-500/60",
  "via-cyan-500/60",
  "via-sky-500/60",
  "via-emerald-500/60",
];

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-sky-500 dark:bg-sky-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
            Professional Highlights
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        {/* 5-Card Row Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700/80 hover:bg-slate-50/70 dark:hover:bg-[#141d30] shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle Top Hairline Color Accent on Hover */}
              <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${hoverGlows[index] || "via-blue-500/60"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Top Row: Tag & Number Index */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${tagStyles[index] || tagStyles[0]}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Big Metric */}
                <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {item.metric}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2 leading-snug">
                  {item.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 group-hover:dark:border-slate-700/70 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;
