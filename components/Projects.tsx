
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400">A selection of my recent developments</p>
          </div>
          <a href="https://github.com/Sushantspatil?tab=repositories" className="text-blue-500 font-semibold hover:underline">View All Projects &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group rounded-3xl bg-gray-900 overflow-hidden border border-gray-800 hover:border-gray-700 transition-all flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter bg-blue-400/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} className="text-sm font-bold text-white flex items-center gap-1 hover:text-blue-400 transition-colors">
                      Live Preview
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-sm font-bold text-gray-400 flex items-center gap-1 hover:text-white transition-colors">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
