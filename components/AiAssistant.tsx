import React, { useState, useRef, useEffect } from 'react';
import { answerCareerQuery, QUICK_PROMPTS } from '../services/geminiService';
import { ChatMessage } from '../types';

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content: "Hi! I'm Sushant's Career Assistant. I can answer questions about his 3+ years of full-stack engineering experience, his current role at Solverix Technologies, his featured projects (Visiblo AI, Koniwala CRM, Aadhaar Voting), and his technical skills.",
};

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const text = (queryText || input).trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      // Simulate natural typing delay for realistic interaction
      await new Promise((resolve) => setTimeout(resolve, 400));
      const response = await answerCareerQuery(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm temporarily unable to retrieve that information. Please email Sushant directly at sushantspatil15@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <section id="ai-assistant" className="scroll-mt-24 py-24 bg-slate-100/70 dark:bg-[#111827]/40 border-y border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">Interactive Assistant</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
        </div>

        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC] tracking-tight">
            Ask Sushant's Career Assistant
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Instant, verified information about Sushant's experience, architecture work, and skills.
          </p>
        </div>

        {/* Chat Window Container */}
        <div className="bg-white dark:bg-[#172033] border border-slate-200 dark:border-slate-700/80 rounded-[12px] shadow-xl dark:shadow-2xl overflow-hidden flex flex-col h-[580px]">

          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0B0F17]/70 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-blue-600/30">
                AI
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Career Knowledge Engine</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">100% Resume-Verified Data</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMessages([INITIAL_MESSAGE])}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors text-xs flex items-center gap-1.5 font-mono"
              title="Reset Conversation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-4 py-2.5 bg-slate-50/60 dark:bg-[#0B0F17]/40 border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-mono text-slate-500 uppercase flex-shrink-0">Quick Ask:</span>
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 text-[11px] whitespace-nowrap transition-colors flex-shrink-0 disabled:opacity-50 shadow-xs"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 rounded-tr-none'
                    : 'bg-slate-100 dark:bg-[#0B0F17]/90 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-800'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-[#0B0F17]/90 text-slate-600 dark:text-slate-400 rounded-2xl rounded-tl-none px-4 py-2.5 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs font-mono">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px]">Searching career knowledge...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-50 dark:bg-[#0B0F17]/80 border-t border-slate-200 dark:border-slate-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Sushant's roles, projects, tech stack, APIs..."
                className="w-full bg-white dark:bg-[#172033] border border-slate-300 dark:border-slate-700/80 rounded-2xl pl-4 pr-12 py-3 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send query"
                className="absolute right-2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:hover:bg-blue-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AiAssistant;
