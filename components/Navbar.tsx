
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-gray-900 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-3 group">
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
            href="#ai-assistant" 
            className="px-4 py-2 bg-blue-600 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all border border-white/10"
          >
            Ask AI
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[73px] bg-[#030712] z-[-1] transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-6 h-full justify-center items-center text-center">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-bold text-gray-400 hover:text-white transition-all transform hover:scale-110"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-6 px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl w-full max-w-xs"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
