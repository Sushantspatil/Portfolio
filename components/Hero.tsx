import React from 'react';
import { PERSONAL_INFO, RESUME_LINK } from '../constants';
// @ts-ignore
import SushantImage from '../images/Sushant.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-28 relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Ambient Engineering Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[360px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 w-[350px] h-[350px] bg-sky-400/5 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] tracking-wide">
                MERN Full Stack Developer • Mumbai, India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight leading-[1.15] mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-500">{PERSONAL_INFO.name}</span>.
              <br />
              <span className="text-slate-800 dark:text-slate-200">
                I build reliable, <span className="text-blue-600 dark:text-blue-400">scalable</span> web applications.
              </span>
            </h1>

            {/* Concise Verified Professional Description */}
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.summary}
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Explore My Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                download="Sushant_Patil_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 dark:bg-[#172033] dark:hover:bg-slate-800 dark:text-slate-200 font-semibold text-sm rounded-xl transition-all border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-500 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/60 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Right Column: Visual with Authentic Photo & Verified Metric Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">

              {/* Outer Glow & Card */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/20 via-slate-200 to-slate-300 dark:from-blue-500/20 dark:via-slate-800/40 dark:to-slate-800/80 shadow-2xl shadow-slate-300/50 dark:shadow-black/80">
                <div className="relative rounded-[22px] overflow-hidden bg-white dark:bg-[#111827]">

                  {/* Real Image of Sushant */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={SushantImage}
                      alt="Sushant Patil - MERN Full Stack Developer"
                      className="w-full h-full object-cover object-top filter contrast-105 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 dark:from-[#0B0F17] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Embedded Info Overlay */}
                  <div className="p-5 bg-white/95 dark:bg-[#172033]/90 border-t border-slate-200 dark:border-slate-700/60 backdrop-blur-md">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h2 className="text-sm font-bold text-slate-900 dark:text-white">Sushant Patil</h2>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">Current: Solverix Technologies</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-[10px] font-bold font-mono">
                        3+ YRS EXP
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Factory Dispatch Automation • 40+ REST APIs • PostgreSQL & Prisma
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Verified Metric Badge 1: 40+ APIs */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white/95 dark:bg-[#172033]/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">40+ APIs</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">At Solverix Tech</div>
                </div>
              </div>

              {/* Floating Verified Metric Badge 2: 6+ Projects */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-white/95 dark:bg-[#172033]/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
                  🚀
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">6+ Projects</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">At Oxstren Tech</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Metric Counters */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#172033]/40 border border-slate-200 dark:border-slate-800/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">3+ Years</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-wider font-mono">Professional Experience</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#172033]/40 border border-slate-200 dark:border-slate-800/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">40+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-wider font-mono">Production APIs at Solverix</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#172033]/40 border border-slate-200 dark:border-slate-800/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">20+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-wider font-mono">React Screens at Oxstren</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#172033]/40 border border-slate-200 dark:border-slate-800/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">6+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-wider font-mono">Full-Stack Projects at Oxstren</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
