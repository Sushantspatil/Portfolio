import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, RESUME_LINK } from '../constants';
import { useTheme } from './ThemeContext';

const navItems = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const progressBarRef = useRef<HTMLDivElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  const isClickNavigating = useRef(false);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isClickNavigating.current = true;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      isClickNavigating.current = false;
    }, 850);
  };

  // Scroll detection, active section tracking, and ultra-smooth reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate target scroll progress (0.0 to 1.0)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetProgress.current = Math.min(1, Math.max(0, scrollY / docHeight));
      } else {
        targetProgress.current = 0;
      }

      // If user recently clicked a nav link, let smooth scroll land without intermediate tab flickering
      if (isClickNavigating.current) {
        return;
      }

      // 1. If at top of page
      if (scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      // 2. If at or very close to page bottom, activate contact
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // 3. Dominant visible height algorithm:
      // Evaluates the exact pixel area of each section currently visible in the viewport
      const trackedSections = [
        { id: 'hero', navId: 'hero' },
        { id: 'about', navId: 'about' },
        { id: 'highlights', navId: 'about' },
        { id: 'experience', navId: 'experience' },
        { id: 'projects', navId: 'projects' },
        { id: 'skills', navId: 'skills' },
        { id: 'education', navId: 'education' },
        { id: 'certifications', navId: 'education' },
        { id: 'ai-assistant', navId: 'contact' },
        { id: 'contact', navId: 'contact' },
      ];

      const vpHeight = window.innerHeight;
      let maxVisibleHeight = 0;
      let matchedNav = 'hero';

      for (const sec of trackedSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(vpHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            matchedNav = sec.navId;
          }
        }
      }

      setActiveSection(matchedNav);
    };

    const onManualScroll = () => {
      isClickNavigating.current = false;
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };

    // Smooth linear interpolation loop (60fps/120fps fluid glide without stepwise notches)
    const animate = () => {
      const diff = targetProgress.current - currentProgress.current;
      if (Math.abs(diff) > 0.0002) {
        currentProgress.current += diff * 0.12;
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${currentProgress.current})`;
        }
      } else if (currentProgress.current !== targetProgress.current) {
        currentProgress.current = targetProgress.current;
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${currentProgress.current})`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', onManualScroll, { passive: true });
    window.addEventListener('touchmove', onManualScroll, { passive: true });
    rafId.current = requestAnimationFrame(animate);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', onManualScroll);
      window.removeEventListener('touchmove', onManualScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle keyboard Escape to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${isScrolled
            ? 'bg-white/90 dark:bg-[#0B0F17]/95 backdrop-blur-xl border-slate-200/90 dark:border-slate-800/80 py-3 shadow-sm dark:shadow-md dark:shadow-black/40'
            : 'bg-white/70 dark:bg-[#0B0F17]/80 backdrop-blur-md border-slate-200/50 dark:border-slate-800/40 py-3.5'
          }`}
      >
        {/* Full-width container that captures all space without huge empty gutters */}
        <div className="w-full px-5 sm:px-8 lg:px-12 flex items-center justify-evenly">

          {/* Left: Brand / Monogram & Name */}
          <a
            href="#hero"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded-md py-1 transition-all"
            aria-label="Sushant Patil Portfolio Home"
          >
            <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/70 group-hover:border-blue-500/60 transition-colors flex items-center justify-center text-xs font-mono font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 shadow-sm">
              &lt;/&gt;
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight font-sans">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span>Available</span>
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-normal hidden md:block">
                Full Stack Developer • Mumbai
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links (Clean, direct text links without any surrounding box) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-medium tracking-wide transition-colors relative py-1.5 group ${isActive
                      ? 'text-slate-950 dark:text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100'
                    }`}
                >
                  <span>{item.name}</span>
                  {/* Clean hairline indicator on active/hover, no surrounding box */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-200 ${isActive
                        ? 'bg-blue-600 dark:bg-blue-400 opacity-100'
                        : 'bg-slate-400 dark:bg-slate-500 opacity-0 group-hover:opacity-60'
                      }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Stack: Theme Toggle, Socials, AI Query, Resume */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                /* Sun Icon */
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* GitHub Quick Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Ask AI Text Link */}
            <a
              href="#ai-assistant"
              className="text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/40"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              <span>Ask AI</span>
            </a>

            {/* Resume Button */}
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              download="resume_2026_final.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-xs font-mono font-semibold transition-all active:scale-95 shadow-sm"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="p-2 rounded text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Scroll Reading Progress Hairline - GPU-accelerated smooth continuous glide */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-200/50 dark:bg-slate-800/50 overflow-hidden" aria-hidden="true">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 dark:from-blue-500 dark:via-sky-400 dark:to-blue-400 origin-left will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6 border-b border-slate-200 dark:border-slate-800 ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            <span>Navigation Index</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">● Open for Opportunities</span>
          </div>

          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  handleNavClick(item.id);
                  setIsMenuOpen(false);
                }}
                className={`py-3 px-2 text-base font-medium flex items-center justify-between transition-colors border-b border-slate-100 dark:border-slate-800/40 ${isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
              >
                <span>{item.name}</span>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">0{index + 1}</span>
              </a>
            );
          })}

          <a
            href="#ai-assistant"
            onClick={() => setIsMenuOpen(false)}
            className="py-3 px-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-between border-b border-slate-100 dark:border-slate-800/40"
          >
            <span>Ask Career AI Assistant</span>
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400">Interactive</span>
          </a>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            download="resume_2026_final.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume (PDF)
          </a>

          <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 px-1">
            <span>{PERSONAL_INFO.email}</span>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-slate-300">GitHub ↗</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 dark:hover:text-slate-300">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
