import React from 'react';
import { PERSONAL_INFO, RESUME_LINK } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#0B0F17] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center font-black text-blue-600 dark:text-blue-400 text-xs">
              SP
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC]">Sushant Patil</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">MERN Full Stack Developer</span>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume (PDF)</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 transition-colors flex items-center gap-2 text-xs font-mono shadow-xs"
          >
            <span>Top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Sushant Patil. Built with React.js, TypeScript & Tailwind CSS.</p>
          <p>Mumbai, Maharashtra, India</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
