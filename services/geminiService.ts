
import { GoogleGenAI } from "@google/genai";
import { EXPERIENCES, PROJECTS, SKILLS, CERTIFICATIONS, EDUCATION } from '../constants';

const API_KEY = process.env.API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI career assistant for Sushant Patil. 
Sushant is a Software Developer with experience in Full Stack and Front-end development.

Sushant's Profile Details:
- Total Experience: ~1.5 years (including Software Developer at Videowaves and Front-end at Cuvette).
- Key Skills: ${SKILLS.join(', ')}.
- Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.year})`).join('; ')}.
- Experience: ${JSON.stringify(EXPERIENCES)}
- Notable Projects: ${PROJECTS.map(p => p.title).join(', ')}.
- Certifications: ${CERTIFICATIONS.map(c => c.name).join(', ')}.

Your goal is to represent Sushant professionally. When asked about his work, be confident, concise, and helpful. 
If asked about contact details, mention his email sushantspatil15@gmail.com or his LinkedIn https://www.linkedin.com/in/sushantspatil/.
Mention that he is passionate about building scalable web applications and optimizing user experiences.
Always stay in character as Sushant's smart assistant.
`;

export const chatWithSushantAI = async (message: string) => {
  if (!API_KEY) {
    return "API Key is missing. If you're running locally, add VITE_GEMINI_API_KEY to your .env file.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Feel free to ask another question about Sushant's career!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a bit of a glitch. Please try asking again in a moment!";
  }
};
