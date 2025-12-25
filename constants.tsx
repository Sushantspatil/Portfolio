
import { Experience, Project, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Videowaves",
    role: "Software Developer",
    period: "Dec 2024 – Dec 2025",
    description: [
      "Developed and maintained web application features using HTML, CSS, JavaScript, React, Node.js etc.",
      "Optimized website performance, improving load time and overall user experience.",
      "Participated in code reviews and contributed to improving coding standards and best practices."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    company: "Cuvette",
    role: "Front-end Developer",
    period: "July 2024 – Nov 2024",
    description: [
      "Enhanced website performance by reducing load times and optimizing front-end assets.",
      "Built fully responsive UIs ensuring seamless experience across all devices.",
      "Integrated RESTful APIs for dynamic, data-driven web interfaces.",
      "Utilized n8n for workflow automation and API integration."
    ],
    skills: ["REST API", "n8n", "CSS", "HTML", "React"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Aadhar-based Voting System",
    description: "A decentralized voting application (DApp) proof-of-concept using Node.js and smart contracts, leveraging Aadhar for identity and MetaMask for blockchain interaction.",
    tags: ["Node.js", "JavaScript", "MetaMask", "Blockchain"],
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Sushantspatil"
  },
  {
    title: "Simon Says Game",
    description: "Interactive web-based game engineering core JavaScript logic for sequence generation, state management and event-driven DOM manipulation.",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop",
    link: "https://sushantspatil.github.io/Simon-Says-Game/"
  },
  {
    title: "Class Cad (Android App)",
    description: "Android application developed to display college timetables, results, and notices, reducing paperwork and improving communication efficiency.",
    tags: ["Java", "Firebase", "Android Studio"],
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Sushantspatil"
  }
];

export const SKILLS = [
  "JavaScript", "React", "Node.js", "Express", "REST API", "SQL", "MongoDB", "HTML", "CSS", "Bootstrap", "Git", "GitHub"
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Full Stack Web Development", 
    issuer: "Certificate",
    link: "https://sushantspatil.github.io/Resume/Full%20Stack%20Web%20Developement.pdf"
  },
  { 
    name: "Front End Development", 
    issuer: "Cuvette",
    link: "https://sushantspatil.github.io/Resume/frontend_developer.pdf"
  },
  { 
    name: "DSA with Java", 
    issuer: "Certificate",
    link: "https://sushantspatil.github.io/Resume/certificate_1.pdf"
  }
];

export const EDUCATION = [
  {
    degree: "BE Computer Engineering",
    institution: "Atma Malik Institute of Technology and Research",
    year: "2024"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "VPM’s Polytechnic, Thane",
    year: "2021"
  }
];

export const RESUME_LINK = "https://sushantspatil.github.io/Resume/Resume.pdf";
