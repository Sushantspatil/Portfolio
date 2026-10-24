import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Education</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800/90 shadow-md dark:shadow-xl dark:shadow-black/30 relative overflow-hidden">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-600/15 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-xl shadow-inner">
                  🎓
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                      {EDUCATION.degree}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {EDUCATION.college}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {EDUCATION.university} • {EDUCATION.location}
                  </p>
                </div>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <span className="inline-block px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0B0F17]/80 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  {EDUCATION.period}
                </span>
                <span className="block text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-1.5 font-medium">
                  Graduated
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
