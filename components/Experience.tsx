
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Career Journey</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-blue-500 transition-all duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-400 font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-blue-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
