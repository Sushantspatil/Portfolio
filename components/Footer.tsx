
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's build something <br /> amazing together.</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <a href="mailto:sushantspatil15@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span>sushantspatil15@gmail.com</span>
              </a>
              <a href="tel:+918451874380" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span>+91 8451874380</span>
              </a>
              <a href="https://www.linkedin.com/in/sushantspatil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span>linkedin.com/in/sushantspatil</span>
              </a>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none" />
              </div>
              <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-gray-900">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sushant Patil.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Sushantspatil" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sushantspatil/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
