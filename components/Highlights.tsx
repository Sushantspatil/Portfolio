import React from 'react';
import { HIGHLIGHTS } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-sky-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">Professional Highlights</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#172033]/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-[#172033]/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-600 font-mono">0{index + 1}</span>
                </div>

                <div className="text-3xl font-black text-[#F8FAFC] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-300 transition-all mb-2">
                  {item.metric}
                </div>

                <h3 className="text-sm font-bold text-slate-200 mb-2">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mt-2 pt-3 border-t border-slate-800/80">
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
