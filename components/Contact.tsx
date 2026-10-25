import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Hello Sushant,\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Get in Touch</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Let's Connect Heading & Contact Channels */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              I'm open to discussing software engineering opportunities, full-stack development roles, and interesting technical projects.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Direct Card */}
              <div className="p-4 rounded-[12px] bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/15 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-[12px] bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-[#172033]/90 shadow-sm transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/15 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">LinkedIn</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/sushantspatil
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-blue-500 transition-colors">↗</span>
              </a>

              {/* GitHub Link Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-[12px] bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#172033]/90 shadow-sm transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">GitHub</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      github.com/Sushantspatil
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-blue-500 transition-colors">↗</span>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-[12px] bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Location</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Launcher Form (Real delivery, no fake API) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[12px] bg-white dark:bg-[#172033]/80 border border-slate-200 dark:border-slate-800/90 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/40">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">Direct Email Dispatch</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Compose your note below to send directly via your preferred email client.
                </p>
              </div>

              <form onSubmit={handleEmailLaunch} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 block mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#0B0F17] border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 block mb-1.5 uppercase">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. MERN Full Stack Role / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#0B0F17] border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 block mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Brief outline of your team, role, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-[#0B0F17] border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-[12px] bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95 transition-all"
                  >
                    <span>Send Message via Email Client</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="py-3.5 px-5 rounded-[12px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 transition-all text-center"
                  >
                    Open Mail Directly
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
