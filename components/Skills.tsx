
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
          <p className="text-gray-400">Tools and technologies I use to bring ideas to life</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SKILLS.map((skill) => (
            <div 
              key={skill}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-center group cursor-default"
            >
              <div className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
