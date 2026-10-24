import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-slate-100/60 dark:bg-[#111827]/40 border-y border-slate-200 dark:border-slate-800/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Work Experience</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l border-slate-300 dark:border-slate-800 space-y-12">
            
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Node Icon */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent 
                    ? 'bg-blue-600 dark:bg-blue-500 border-blue-200 dark:border-blue-300 shadow-md shadow-blue-500/40' 
                    : 'bg-white dark:bg-[#0B0F17] border-slate-400 dark:border-slate-600 group-hover:border-blue-500'
                }`} />

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                  exp.isCurrent
                    ? 'bg-white dark:bg-[#172033] border-blue-500/40 shadow-lg dark:shadow-xl dark:shadow-black/40 ring-1 ring-blue-500/20'
                    : 'bg-white dark:bg-[#172033]/60 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#172033]/90 shadow-sm'
                }`}>
                  
                  {/* Card Header: Role, Company, Period, Location */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0B0F17]/80 border border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300">
                        {exp.period}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities & Achievements */}
                  <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold text-base leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-2">Technologies:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-[#0B0F17]/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
