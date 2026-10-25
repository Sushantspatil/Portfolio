import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth progress tracking (0.0 to 1.0)
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const isAnimating = useRef(false);
  const rafId = useRef<number | null>(null);

  const activeStepRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Frame tick animation loop (buttery smooth spring glide without stepwise notches)
  const animate = useCallback(() => {
    const diff = targetProgress.current - currentProgress.current;

    if (Math.abs(diff) > 0.001) {
      currentProgress.current += diff * 0.22;
    } else {
      currentProgress.current = targetProgress.current;
      isAnimating.current = false;
    }

    const p = currentProgress.current;

    // Update illuminated beam height directly
    if (beamRef.current) {
      beamRef.current.style.height = `${p * 100}%`;
    }

    // Update moveable indicator bead handle position directly
    if (handleRef.current) {
      handleRef.current.style.top = `${p * 100}%`;
    }

    // Determine illuminated milestone step based on progress thresholds
    let active = 0;
    if (p >= 0.72) {
      active = 2;
    } else if (p >= 0.32) {
      active = 1;
    }

    if (active !== activeStepRef.current) {
      activeStepRef.current = active;
      setActiveStep(active);
    }

    if (isAnimating.current) {
      rafId.current = requestAnimationFrame(animate);
    }
  }, []);

  // Scroll handler: maps viewport scroll position to timeline travel
  const updateScrollProgress = useCallback(() => {
    if (!trackContainerRef.current) return;
    const rect = trackContainerRef.current.getBoundingClientRect();
    const trackHeight = rect.height;
    if (trackHeight <= 0) return;

    // Natural reading line: 45% from top of viewport
    const focusY = window.innerHeight * 0.45;
    const relativeY = focusY - rect.top;

    // Clamp progress between 0.0 (top milestone) and 1.0 (bottom milestone)
    const p = Math.max(0, Math.min(1, relativeY / trackHeight));
    targetProgress.current = p;

    if (!isAnimating.current) {
      isAnimating.current = true;
      rafId.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  useEffect(() => {
    updateScrollProgress();

    // Trigger on initial layout settle
    const t1 = setTimeout(updateScrollProgress, 100);
    const t2 = setTimeout(updateScrollProgress, 500);

    const onScroll = () => {
      if (!isDragging) {
        updateScrollProgress();
      }
    };

    const onResize = () => {
      updateScrollProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateScrollProgress, isDragging]);

  // Smooth scroll to card when node is clicked
  const scrollToItem = (index: number) => {
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Interactive timeline dragging & scrubbing
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackContainerRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = trackContainerRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const p = Math.max(0, Math.min(1, clickY / rect.height));

    targetProgress.current = p;
    currentProgress.current = p;
    if (beamRef.current) beamRef.current.style.height = `${p * 100}%`;
    if (handleRef.current) handleRef.current.style.top = `${p * 100}%`;

    let active = 0;
    if (p >= 0.72) active = 2;
    else if (p >= 0.32) active = 1;

    if (active !== activeStepRef.current) {
      activeStepRef.current = active;
      setActiveStep(active);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackContainerRef.current) return;
    const rect = trackContainerRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const p = Math.max(0, Math.min(1, clickY / rect.height));

    targetProgress.current = p;
    currentProgress.current = p;
    if (beamRef.current) beamRef.current.style.height = `${p * 100}%`;
    if (handleRef.current) handleRef.current.style.top = `${p * 100}%`;

    let active = 0;
    if (p >= 0.72) active = 2;
    else if (p >= 0.32) active = 1;

    if (active !== activeStepRef.current) {
      activeStepRef.current = active;
      setActiveStep(active);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const p = currentProgress.current;
    let active = 0;
    if (p >= 0.72) active = 2;
    else if (p >= 0.32) active = 1;
    scrollToItem(active);
  };

  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-slate-100/60 dark:bg-[#111827]/40 border-y border-slate-200 dark:border-slate-800/60 relative transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Work Experience</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div ref={containerRef} className="relative pl-6 sm:pl-8 space-y-10 sm:space-y-12">
            
            {/* Timeline Rail Column - Strictly aligned along x-axis with nodes */}
            <div
              ref={trackContainerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="absolute left-6 sm:left-8 top-7 bottom-7 w-8 -translate-x-1/2 z-20 cursor-pointer group/rail select-none touch-none"
              title="Interactive Timeline Track - Drag handle or click to navigate"
            >
              {/* 1. Static Inactive Base Rail (Always visible) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-slate-300 dark:bg-slate-700/80 rounded-full group-hover/rail:w-[4px] transition-[width]" />

              {/* 2. Dynamic Illuminated Glowing Beam */}
              <div
                ref={beamRef}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-blue-600 via-sky-400 to-cyan-300 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)] pointer-events-none group-hover/rail:w-[4px] transition-[width]"
                style={{ height: '0%' }}
              />

              {/* 3. Moveable Interactive Energy Bead Handle (Draggable & Scroll-driven) */}
              <div
                ref={handleRef}
                className={`absolute left-1/2 -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-600 shadow-[0_0_14px_2px_rgba(56,189,248,0.9)] border-2 border-white dark:border-[#0B0F17] flex items-center justify-center transition-transform z-30 ${
                  isDragging ? 'cursor-grabbing scale-125 ring-4 ring-blue-500/30' : 'cursor-grab hover:scale-125'
                }`}
                style={{ top: '0%' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                <span className="absolute -inset-1 rounded-full bg-sky-400/25 animate-ping pointer-events-none" />
              </div>
            </div>

            {/* Experience Cards & Interactive Nodes List */}
            {EXPERIENCES.map((exp, index) => {
              const isReached = activeStep >= index;
              const isCardHovered = hoveredIndex === index;
              const isCurrentLeading = activeStep === index;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative pl-8 sm:pl-10 group"
                >
                  
                  {/* Timeline Node Icon Button - Centered on Rail, Highly Responsive */}
                  <button
                    type="button"
                    onClick={() => scrollToItem(index)}
                    aria-label={`Jump to ${exp.role} at ${exp.company}`}
                    title={`Click to view ${exp.company}`}
                    className={`absolute left-0 top-6 sm:top-7 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                      isReached
                        ? 'bg-blue-600 dark:bg-blue-500 border-blue-200 dark:border-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.6)] scale-110'
                        : 'bg-white dark:bg-[#0B0F17] border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:scale-110'
                    }`}
                  >
                    {/* Inner Node Center Dot */}
                    <span
                      className={`rounded-full transition-all duration-300 ${
                        isReached
                          ? 'w-1.5 h-1.5 bg-white dark:bg-sky-100'
                          : 'w-1 h-1 bg-slate-400 dark:bg-slate-600'
                      }`}
                    />

                    {/* Ambient Radar Pulse for current leading milestone */}
                    {isCurrentLeading && (
                      <span className="absolute -inset-1.5 rounded-full bg-blue-500/25 dark:bg-blue-400/25 animate-pulse pointer-events-none" />
                    )}
                  </button>

                  {/* Experience Card */}
                  <div
                    className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                      exp.isCurrent
                        ? 'bg-white dark:bg-[#172033] border-blue-500/40 shadow-lg dark:shadow-xl dark:shadow-black/40 ring-1 ring-blue-500/20'
                        : isCardHovered
                        ? 'bg-white dark:bg-[#172033]/90 border-blue-500/40 shadow-md dark:shadow-lg dark:shadow-black/30'
                        : 'bg-white dark:bg-[#172033]/60 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#172033]/90 shadow-sm'
                    }`}
                  >
                    
                    {/* Card Header: Role, Company, Period, Location */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0B0F17]/80 border border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300">
                          {exp.period}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Responsibilities & Achievements */}
                    <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-600 dark:text-blue-400 mt-1 font-bold text-base leading-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Badges */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-2">Technologies:</span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-[#0B0F17]/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;


