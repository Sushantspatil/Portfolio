import React from 'react';
import { ABOUT_COPY, WORK_AREAS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-slate-100/60 dark:bg-[#111827]/40 border-y border-slate-200 dark:border-slate-800/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">About Me</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight mb-6 leading-snug">
                Practical engineering for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400">
                  real-world business operations.
                </span>
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
                {ABOUT_COPY.lead}
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {ABOUT_COPY.body}
              </p>

              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed p-4 rounded-xl bg-white dark:bg-[#172033]/60 border-l-2 border-blue-500 border-y border-r border-slate-200 dark:border-slate-800/80 shadow-sm">
                {ABOUT_COPY.closing}
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#172033]/50 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block mb-1">Primary Role</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-200">MERN Full Stack Developer</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-[#172033]/50 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block mb-1">Base Location</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-200">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: "What I Work With" Panel */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800/90 shadow-md dark:shadow-xl dark:shadow-black/40">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">What I Work With</h3>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">Core Engineering Pillars</span>
              </div>

              <div className="space-y-6">
                {WORK_AREAS.map((area, idx) => (
                  <div key={idx} className="group p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0F17]/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {area.title}
                      </h4>
                      <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
                    </div>
                    
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {area.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-[#172033] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
