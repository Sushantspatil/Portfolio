
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen 
          ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-gray-900 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group relative z-[110]" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
              SP
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">Sushant Patil</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
            >
              Ask AI
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden relative z-[110] p-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div className={`md:hidden fixed inset-0 z-[90] bg-[#030712] transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col h-full pt-32 pb-10 px-8 items-center justify-between">
          <div className="flex flex-col gap-8 items-center w-full">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-4xl font-bold transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${idx % 2 === 0 ? 'text-white' : 'text-gray-500'} hover:text-blue-500`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`w-full max-w-sm transition-all duration-500 delay-500 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="#contact" 
              className="flex items-center justify-center py-5 bg-blue-600 text-white text-lg font-black rounded-2xl w-full shadow-2xl shadow-blue-900/40 active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Ask AI
            </a>
            <p className="text-gray-600 text-sm text-center mt-6 font-medium">Available for new projects</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
