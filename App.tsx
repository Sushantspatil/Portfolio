
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import { EDUCATION } from './constants';
// @ts-ignore
import SushantImage from './images/Sushant.jpeg';

// Then use it in your component or code:



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading portfolio...</div>}>
          <Hero />

          <div id="about" className="py-24 border-y border-gray-900 bg-gray-900/20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
               // <img src={SushantImage} alt="Sushant" 
                  className="relative rounded-[2rem] w-full aspect-square object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Software Developer <br /><span className="text-blue-500">with a vision.</span></h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I’m a Computer Engineering graduate with a year of experience as a Software Developer, focused on creating efficient, scalable, and user-friendly web applications. I enjoy working across the full stack and solving problems through clean, maintainable code that makes a real impact. I’m passionate about learning new technologies and taking on challenging projects, always aiming to turn ideas into practical solutions that deliver value.                </p>
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                      <h4 className="font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-black-600 text-xs">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <AiAssistant />
        </Suspense>
      </main>

      <Footer />

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>
    </div>
  );
};

export default App;
