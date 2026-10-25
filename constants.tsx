import { 
  PersonalInfo, 
  MetricHighlight, 
  Experience, 
  Project, 
  SkillGroup, 
  Education, 
  Certification 
} from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Sushant Patil",
  designation: "MERN Full Stack Developer",
  location: "Mumbai, Maharashtra, India",
  experienceYears: "3+",
  email: "sushantspatil15@gmail.com",
  github: "https://github.com/Sushantspatil",
  linkedin: "https://www.linkedin.com/in/sushantspatil/",
  portfolio: "https://sushants-portfolio.web.app/",
  resumePath: "/resume/Sushant_Patil_Resume.pdf",
  availability: "Open to Full Stack Development Opportunities",
  headline: "Hi, I'm Sushant Patil. I build reliable, scalable web applications.",
  summary: "I'm a MERN Full Stack Developer with 3+ years of professional experience building responsive React applications, REST APIs, business dashboards, and backend systems using Node.js, Express.js, NestJS, PostgreSQL, and MongoDB."
};

export const RESUME_LINK = "/resume/Sushant_Patil_Resume.pdf";

export const ABOUT_COPY = {
  lead: "I'm a MERN Full Stack Developer based in Mumbai, India, with over three years of professional experience building and maintaining modern web applications.",
  body: "My experience includes developing responsive React.js interfaces, designing REST APIs using Node.js and Express.js, working with NestJS, and managing application data using PostgreSQL, MongoDB, and Prisma ORM. I've contributed to production systems involving factory dispatch automation, SaaS platforms, matrimonial CRM workflows, authentication and authorization, database management, and business dashboards.",
  closing: "I focus on building maintainable applications, solving practical engineering problems, and developing features that support real business operations."
};

export const WORK_AREAS = [
  {
    title: "Frontend Engineering",
    description: "Responsive React.js single-page applications, component architectures, state management with Redux Toolkit, and performance-tuned UI interfaces.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"]
  },
  {
    title: "Backend & REST APIs",
    description: "Robust RESTful microservices and monoliths with Node.js, Express.js, and NestJS, featuring JWT authentication, RBAC authorization, and validation.",
    tech: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "RBAC"]
  },
  {
    title: "Databases & ORM Integration",
    description: "Relational data modeling in PostgreSQL, NoSQL document stores with MongoDB, high-speed caching via Redis, and type-safe schema mapping with Prisma & Mongoose.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose", "SQL"]
  },
  {
    title: "Business Systems & Dashboards",
    description: "End-to-end business software including factory dispatch automation, multi-role CRM suites, reporting dashboards, and containerized Docker deployments.",
    tech: ["Docker", "IoT Integrations", "Automation", "CRM Workflows", "Reporting"]
  }
];

export const HIGHLIGHTS: MetricHighlight[] = [
  {
    metric: "3+ Years",
    label: "Professional Experience",
    description: "Hands-on software development experience across the entire MERN stack, delivering production features for enterprise and SaaS platforms.",
    tag: "Overall",
    status: "MERN Stack Specialist",
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB"]
  },
  {
    metric: "40+",
    label: "Production REST APIs",
    description: "Endpoints engineered at Solverix Technologies for authentication, reporting, authorization, validation, and database transactions.",
    tag: "Solverix",
    status: "Factory Automation System",
    skills: ["REST Architecture", "Prisma ORM", "PostgreSQL", "JWT & RBAC", "Validation"]
  },
  {
    metric: "20+",
    label: "React Dashboards & Screens",
    description: "Engineered at Oxstren Wearable Technologies using modular, reusable components with dynamic API-driven functionality.",
    tag: "Oxstren",
    status: "Production UI Components",
    skills: ["React.js", "Redux Toolkit", "Dynamic APIs", "Modular Architecture"]
  },
  {
    metric: "6+",
    label: "Full-Stack Projects",
    description: "Client and internal web applications contributed to at Oxstren spanning React, Node, Express, MongoDB, and PostgreSQL.",
    tag: "Oxstren",
    status: "End-to-End Delivery",
    skills: ["Full Stack", "MongoDB", "Node.js", "Express.js", "PostgreSQL"]
  },
  {
    metric: "30%",
    label: "Load-Time Reduction",
    description: "Page load speed improvement achieved at Innovins Technologies through frontend asset optimization and code efficiency.",
    tag: "Innovins",
    status: "Performance Optimization ⚡",
    skills: ["Core Web Vitals", "Asset Optimization", "Code Splitting", "Speedup"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Solverix Technologies Pvt. Ltd.",
    role: "MERN Full Stack Developer",
    period: "Oct 2025 – Present",
    location: "Andheri, Mumbai",
    isCurrent: true,
    description: [
      "Built a production-grade Factory Dispatch Automation System using React.js, Node.js, Express.js, and PostgreSQL.",
      "Engineered 40+ production REST API endpoints for authentication, business management, reporting, validation, authorization, database transactions, and error handling.",
      "Designed REST APIs and PostgreSQL schemas using Prisma ORM.",
      "Integrated Docker deployment and IoT devices to support automated factory operations."
    ],
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Docker", "REST APIs"]
  },
  {
    company: "Oxstren Wearable Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Sep 2024 – Oct 2025",
    location: "Mumbai, India",
    isCurrent: false,
    description: [
      "Contributed to 6+ full-stack projects using React.js, Node.js, Express.js, MongoDB, and PostgreSQL, developing responsive interfaces and backend services.",
      "Engineered and integrated 40+ REST API endpoints with JWT authentication, RBAC, request validation, and database operations for business workflows.",
      "Developed 20+ responsive React.js screens and dashboards using reusable components and dynamic API-driven functionality."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC"]
  },
  {
    company: "Innovins Technologies",
    role: "Associate Software Engineer",
    period: "June 2023 – Sep 2024",
    location: "Mumbai, India",
    isCurrent: false,
    description: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.",
      "Optimized frontend components and assets, improving application performance and reducing page load time by 30%.",
      "Assisted in backend development using Node.js and Express.js, including API integration and troubleshooting.",
      "Collaborated with development teams to debug, test, and maintain web applications using Git and GitHub for version control."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Git", "GitHub"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "visiblo-ai",
    title: "Visiblo AI",
    category: "AI-Powered Local SEO SaaS Platform",
    type: "Live Project",
    overview: "Visiblo AI is an AI-powered SaaS platform supporting local SEO management, customer review monitoring, and business automation.",
    contributions: [
      "Contributed to an AI-powered SaaS platform supporting 3 core business functions: local SEO management, customer review monitoring, and business automation.",
      "Developed reusable UI components and dashboards focused on responsiveness, maintainability, and consistent user experience.",
      "Integrated RESTful APIs for front-end/back-end communication, business workflows, and application data management."
    ],
    features: [
      {
        title: "Platform Capabilities & Automation",
        items: [
          "Local SEO & Review Automation",
          "Customer Feedback Tracking",
          "Business Workflow Pipelines",
          "Responsive Dashboard Architecture"
        ]
      }
    ],
    tags: ["React.js", "REST APIs", "SaaS Platform", "UI Architecture", "Business Automation"],
    link: "https://www.visibloai.com/",
    isLive: true,
    accentColor: "#3B82F6"
  },
  {
    id: "koniwala-crm",
    title: "Koniwala Matrimonials CRM",
    category: "Matrimonial CRM and Business Operations Platform",
    type: "Production Platform",
    overview: "A matrimonial CRM platform supporting member onboarding, profile management, administrative operations, and business workflows.",
    contributions: [
      "Developed a matrimonial CRM supporting member onboarding, profile management, and administrative operations.",
      "Built 8 dashboard sections covering profile shortlisting, critical alerts, follow-up management, team activity, agency performance, employee monitoring, and AI suggestions.",
      "Developed 3 CRM modules for AI-assisted matchmaking, WhatsApp profile capture, and employee attendance, integrating NestJS REST APIs, PostgreSQL, and Prisma ORM."
    ],
    features: [
      {
        title: "8 Operational Dashboard Sections",
        items: [
          "Profile Shortlisting",
          "Critical Alerts",
          "Follow-up Management",
          "Team Activity",
          "Agency Performance",
          "Employee Monitoring",
          "AI Suggestions"
        ]
      },
      {
        title: "3 Specialized CRM Modules",
        items: [
          "AI-assisted Matchmaking",
          "WhatsApp Profile Capture",
          "Employee Attendance System"
        ]
      }
    ],
    tags: ["NestJS", "React.js", "PostgreSQL", "Prisma ORM", "Redis", "REST APIs"],
    isLive: false,
    accentColor: "#38BDF8"
  },
  {
    id: "maldives-experts",
    title: "Maldives Experts",
    category: "Luxury Travel & Resort Booking Platform",
    type: "Live Project",
    overview: "A specialized luxury travel and holiday booking platform offering curated Maldives vacation packages, resort directories, and custom villa itinerary planning.",
    contributions: [
      "Architected and developed a responsive, high-performance web platform for luxury Maldives holiday planning, resort exploration, and booking inquiries.",
      "Engineered dynamic resort and atoll showcase directories with modern typography, optimized asset loading, and interactive filter controls.",
      "Built custom quote inquiry and package booking workflows designed to provide smooth lead generation and responsive user experiences across all devices."
    ],
    features: [
      {
        title: "Platform Capabilities & Workflows",
        items: [
          "Curated Maldives Holiday Packages (Honeymoons, all-inclusive luxury, family getaways)",
          "Handpicked Resort & Island Directory with amenity breakdowns",
          "Direct Travel Inquiry & Custom Itinerary Planning Workflows",
          "High-performance responsive UI built with modern React.js architecture"
        ]
      }
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "REST APIs", "Responsive UI", "Web Performance"],
    link: "https://maldivesexperts.co.za/",
    isLive: true,
    accentColor: "#0EA5E9"
  },
  {
    id: "aadhaar-voting",
    title: "Aadhaar Voting System",
    category: "Blockchain-Based Voting Application",
    type: "Technical / Academic Project",
    overview: "A blockchain-based voting application prototype designed to record votes while supporting voter eligibility validation and one-vote-per-user checks.",
    contributions: [
      "Developed a blockchain-based voting application for recording votes and enforcing one-vote-per-user validation.",
      "Implemented Aadhaar-linked OTP verification and voter eligibility checks as part of the authentication workflow.",
      "Built responsive voting interfaces supporting candidate management and vote submission."
    ],
    features: [
      {
        title: "Architecture & Verification Workflow",
        items: [
          "Blockchain-based vote recording & immutable ledger",
          "Aadhaar-linked OTP verification workflow",
          "Voter eligibility and one-vote-per-user validation",
          "Candidate management & responsive voting interface"
        ]
      }
    ],
    tags: ["Blockchain", "React.js", "Node.js", "OTP Authentication", "Smart Contracts"],
    github: "https://github.com/Sushantspatil/major_project_voting",
    isLive: false,
    accentColor: "#60A5FA"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "NestJS", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    category: "Programming & Web Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "Databases & ORMs",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Swagger", "VS Code", "Antigravity"]
  }
];

export const EDUCATION: Education = {
  university: "University of Mumbai",
  college: "AMITR College of Engineering",
  degree: "Bachelor of Engineering in Computer Engineering",
  period: "2021 – 2024",
  location: "Mumbai, India"
};

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Full Stack Web Development", 
    issuer: "Certified Program",
    link: "https://sushantspatil.github.io/Resume/Full%20Stack%20Web%20Developement.pdf"
  },
  { 
    name: "Front End Development", 
    issuer: "Cuvette Tech",
    link: "https://sushantspatil.github.io/Resume/frontend_developer.pdf"
  },
  { 
    name: "DSA with Java", 
    issuer: "Certified Program",
    link: "https://sushantspatil.github.io/Resume/certificate_1.pdf"
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
