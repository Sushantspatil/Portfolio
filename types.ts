export interface PersonalInfo {
  name: string;
  designation: string;
  location: string;
  experienceYears: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resumePath: string;
  availability: string;
  headline: string;
  summary: string;
}

export interface MetricHighlight {
  metric: string;
  label: string;
  description: string;
  tag?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
}

export interface ProjectFeatureGroup {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  overview: string;
  contributions: string[];
  features?: ProjectFeatureGroup[];
  modules?: string[];
  tags: string[];
  link?: string;
  github?: string;
  isLive?: boolean;
  accentColor: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  college: string;
  university: string;
  period: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}
