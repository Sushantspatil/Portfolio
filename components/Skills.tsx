import React from 'react';
import { SKILL_GROUPS } from '../constants';

const categoryIcons: Record<string, string> = {
  "Frameworks & Libraries": "⚡",
  "Programming & Web Languages": "💻",
  "Databases & ORMs": "🗄️",
  "Developer Tools": "🛠️"
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#111827]/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">Technical Expertise</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
        </div>

        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Tools, Frameworks & Core Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Grouped strictly by practical engineering discipline without arbitrary percentages.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-[#172033]/70 border border-slate-800/90 hover:border-blue-500/40 hover:bg-[#172033]/90 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{categoryIcons[group.category] || "🔹"}</span>
                    <h3 className="text-sm font-bold text-[#F8FAFC]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-600 font-mono">0{idx + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded-xl bg-[#0B0F17]/80 border border-slate-800 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-2 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/item:bg-sky-300 transition-colors" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{group.skills.length} Technologies</span>
                <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
