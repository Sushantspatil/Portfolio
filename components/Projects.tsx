import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header Divider Line (Consistent across About, Experience, Skills, Education, Contact) */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Featured Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        {/* Section Title & GitHub Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight">
              Production Systems & Web Applications
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Authentic engineering work across SaaS platforms, enterprise CRM operations, luxury travel booking, and blockchain prototypes.
            </p>
          </div>

          <a
            href="https://github.com/Sushantspatil?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2.5 px-4 rounded-xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/80 transition-all hover:border-blue-500/50 w-fit shadow-sm shrink-0"
          >
            <span>View GitHub Repositories</span>
            <span>→</span>
          </a>
        </div>

        {/* Projects Grid - Balanced 2x2 Grid Matching Other Portfolio Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="rounded-[12px] bg-white dark:bg-[#172033]/70 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-[#172033]/90 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md dark:shadow-xl dark:shadow-black/30"
            >
              <div>
                {/* Project Header / Technical Visualizer Banner */}
                <div className="p-6 bg-slate-50 dark:bg-[#111827]/90 border-b border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                      {project.type}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                      0{index + 1} / {project.id === 'visiblo-ai' ? 'SAAS' : project.id === 'maldives-experts' ? 'TRAVEL' : project.id === 'koniwala-crm' ? 'ENTERPRISE CRM' : 'BLOCKCHAIN'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F8FAFC] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.category}
                  </p>

                  {/* Visual Accent Decoration */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Architecture Verified</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">● {project.isLive ? 'Live System' : 'Production Ready'}</span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8">
                  {/* Overview Statement */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5 italic bg-slate-100/70 dark:bg-[#0B0F17]/50 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                    "{project.overview}"
                  </p>

                  {/* Verified Contributions */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">
                      Verified Contributions:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Group Highlights (if any) */}
                  {project.features && (
                    <div className="mb-6 space-y-3">
                      {project.features.map((fg, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B0F17]/40 border border-slate-200 dark:border-slate-800/60">
                          <span className="text-[10px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1.5">
                            {fg.title}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {fg.items.map((item, j) => (
                              <span key={j} className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent font-sans">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span>View GitHub Repo</span>
                  </a>
                )}

                {/* For Koniwala CRM (Internal Enterprise platform with no public repo/URL) */}
                {!project.link && !project.github && (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700 transition-all"
                  >
                    <span>Inspect Case Study</span>
                    <span>→</span>
                  </button>
                )}

                {/* Details modal trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View full details for ${project.title}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 transition-colors"
                  title="View Architectural Breakdown"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 id="modal-title" className="text-2xl font-black text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-[#0B0F17]/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    {selectedProject.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">My Verified Contributions</h4>
                  <ul className="space-y-2">
                    {selectedProject.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.features && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Architectural Highlights & Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((f, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B0F17]/60 border border-slate-200 dark:border-slate-800">
                          <h5 className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-2">{f.title}</h5>
                          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                            {f.items.map((item, j) => (
                              <li key={j} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2"
                    >
                      Visit Live Website ↗
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2"
                    >
                      View GitHub Repo ↗
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-300 text-xs font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
