import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_GROUPS, 
  EDUCATION, 
  HIGHLIGHTS 
} from '../constants';

export interface AssistantAnswer {
  text: string;
  suggestedQuestions?: string[];
}

export const QUICK_PROMPTS = [
  "What is Sushant's current role & company?",
  "What projects has Sushant built?",
  "What is his backend & database tech stack?",
  "What are his key career achievements?",
  "How can I contact or hire Sushant?"
];

/**
 * Robust, client-safe Career Knowledge Engine for Sushant Patil.
 * Operates with zero secret leakage in browser bundles and delivers instant, 
 * accurate answers derived strictly from Sushant's verified resume.
 */
export const answerCareerQuery = async (query: string): Promise<string> => {
  const normalized = query.toLowerCase().trim();

  // 1. Current Role & Solverix
  if (
    normalized.includes('current') || 
    normalized.includes('solverix') || 
    normalized.includes('present') || 
    normalized.includes('now') ||
    normalized.includes('dispatch') ||
    normalized.includes('factory')
  ) {
    const currentExp = EXPERIENCES.find(e => e.isCurrent) || EXPERIENCES[0];
    return `Sushant is currently working as a ${currentExp.role} at ${currentExp.company} (${currentExp.period}) in ${currentExp.location}.\n\nKey responsibilities include:\n• Built a production-grade Factory Dispatch Automation System using React.js, Node.js, Express.js, and PostgreSQL.\n• Engineered 40+ production REST API endpoints for authentication, business management, reporting, validation, authorization, and error handling.\n• Designed REST APIs and PostgreSQL schemas using Prisma ORM.\n• Integrated Docker deployment and IoT devices to support automated factory operations.`;
  }

  // 2. Experience / Work History
  if (
    normalized.includes('experience') || 
    normalized.includes('years') || 
    normalized.includes('history') || 
    normalized.includes('career') ||
    normalized.includes('oxstren') ||
    normalized.includes('innovins')
  ) {
    return `Sushant has over 3+ years of professional software engineering experience across 3 roles:\n\n1. **${EXPERIENCES[0].company}** (${EXPERIENCES[0].period}) — ${EXPERIENCES[0].role}: Factory Dispatch Automation, 40+ REST APIs, Prisma ORM, Docker.\n2. **${EXPERIENCES[1].company}** (${EXPERIENCES[1].period}) — ${EXPERIENCES[1].role}: Contributed to 6+ full-stack projects, engineered 40+ REST APIs with JWT & RBAC, built 20+ responsive React screens.\n3. **${EXPERIENCES[2].company}** (${EXPERIENCES[2].period}) — ${EXPERIENCES[2].role}: Frontend React development, reduced page load time by 30%, assisted in Node.js backend integration.`;
  }

  // 3. Projects
  if (
    normalized.includes('project') || 
    normalized.includes('visiblo') || 
    normalized.includes('maldives') ||
    normalized.includes('koniwala') || 
    normalized.includes('voting') || 
    normalized.includes('aadhaar')
  ) {
    return `Sushant has built and contributed to 4 key engineering projects:\n\n1. **Visiblo AI** (AI-Powered Local SEO SaaS Platform):\n• Contributed to local SEO management, review monitoring, and business automation.\n• Developed reusable UI dashboards and integrated REST APIs.\n• Live at: https://www.visibloai.com/\n\n2. **Koniwala Matrimonials CRM** (Enterprise Operations Platform):\n• Built 8 dashboard sections and 3 specialized modules (AI matchmaking, WhatsApp profile capture, employee attendance) using NestJS, React, PostgreSQL, Prisma ORM, and Redis.\n\n3. **Maldives Experts** (Luxury Travel & Resort Booking Platform):\n• Curated Maldives holiday packages, resort directories, and custom villa itinerary planning.\n• Built responsive UI and inquiry booking workflows with React.js and Vite.\n• Live at: https://maldivesexperts.co.za/\n\n4. **Aadhaar Voting System** (Blockchain Voting Application):\n• Implemented Aadhaar-linked OTP verification, eligibility checks, candidate management, and one-vote-per-user validation on a blockchain ledger.`;
  }

  // 4. Skills / Tech Stack
  if (
    normalized.includes('skill') || 
    normalized.includes('tech') || 
    normalized.includes('stack') || 
    normalized.includes('node') || 
    normalized.includes('react') || 
    normalized.includes('database') ||
    normalized.includes('nest')
  ) {
    const summary = SKILL_GROUPS.map(g => `• **${g.category}**: ${g.skills.join(', ')}`).join('\n');
    return `Sushant's technical expertise is focused on full-stack web and backend engineering:\n\n${summary}\n\nHe has deep practical experience designing REST APIs, modeling data in PostgreSQL & MongoDB, and architecting responsive React.js interfaces.`;
  }

  // 5. Contact / Hire / Email
  if (
    normalized.includes('contact') || 
    normalized.includes('email') || 
    normalized.includes('hire') || 
    normalized.includes('reach') || 
    normalized.includes('connect') ||
    normalized.includes('linkedin')
  ) {
    return `You can connect with Sushant directly:\n• **Email**: ${PERSONAL_INFO.email}\n• **LinkedIn**: ${PERSONAL_INFO.linkedin}\n• **GitHub**: ${PERSONAL_INFO.github}\n• **Location**: ${PERSONAL_INFO.location}\n• **Status**: ${PERSONAL_INFO.availability}`;
  }

  // 6. Education
  if (
    normalized.includes('education') || 
    normalized.includes('college') || 
    normalized.includes('degree') || 
    normalized.includes('university')
  ) {
    return `Sushant holds a **${EDUCATION.degree}** from **${EDUCATION.college}**, **${EDUCATION.university}** (${EDUCATION.period}) in ${EDUCATION.location}.`;
  }

  // 7. Highlights / Metrics
  if (
    normalized.includes('metric') || 
    normalized.includes('highlight') || 
    normalized.includes('achievement')
  ) {
    const highlightsList = HIGHLIGHTS.map(h => `• **${h.metric}**: ${h.label} — ${h.description}`).join('\n');
    return `Verified professional metrics from Sushant's career:\n\n${highlightsList}`;
  }

  // Default intelligent fallback response
  return `Hi! I'm Sushant's Career Assistant. Sushant is a **MERN Full Stack Developer** with **3+ years of professional experience** currently engineering production software at **Solverix Technologies Pvt. Ltd.** in Mumbai.\n\nYou can ask me about his:\n• Current work on the Factory Dispatch Automation System at Solverix\n• Past contributions at Oxstren (6+ projects, 40+ APIs) & Innovins (30% load reduction)\n• Featured projects (Visiblo AI, Koniwala CRM, Aadhaar Voting)\n• Technical skill set (React, Node, Express, NestJS, PostgreSQL, Prisma, Docker)\n• Or how to contact him for new opportunities!`;
};

// Export backward-compatible function name
export const chatWithSushantAI = answerCareerQuery;
