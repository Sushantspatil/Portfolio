
import React from 'react';
import { RESUME_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          OPEN TO OPPORTUNITIES
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
         Transforming Ideas  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
           into Interactive Designs
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          Hi, I'm Sushant Patil. A Full Stack/MERN Stack Developer with a strong foundation in Full Stack technologies and a focus on building efficient, user-centric web solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20"
          >
            View Projects
          </a>
          <a 
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Download Resume
          </a>
        </div>

        <div className="mt-20 flex gap-12 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">1+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</span>
          </div>
          <div className="h-8 w-px bg-gray-800" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">5+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Certifications</span>
          </div>
          <div className="h-8 w-px bg-gray-800" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">5</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Core Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
