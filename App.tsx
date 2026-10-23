import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#CBD5E1] selection:bg-blue-600/30 selection:text-white relative">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center bg-[#0B0F17] text-blue-400 font-mono text-sm">
            Loading Sushant Patil's Portfolio...
          </div>
        }>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: About Me */}
          <About />

          {/* Section 3: Professional Highlights */}
          <Highlights />

          {/* Section 4: Work Experience */}
          <Experience />

          {/* Section 5: Featured Projects & Case Studies */}
          <Projects />

          {/* Section 6: Technical Expertise */}
          <Skills />

          {/* Section 7: Education */}
          <Education />

          {/* Section 8: Compact Certifications */}
          <Certifications />

          {/* Section 9: Career AI Assistant */}
          <AiAssistant />

          {/* Section 10: Contact */}
          <Contact />
        </Suspense>
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Subtle Ambient Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-[60%] right-[5%] w-[600px] h-[600px] bg-sky-500/[0.025] rounded-full blur-[160px]" />
      </div>
    </div>
  );
};

export default App;
