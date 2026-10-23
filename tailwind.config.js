/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F17',
          surface: '#111827',
          card: '#172033',
          cardHover: '#1E293B',
          border: '#1E293B',
          borderMuted: '#334155',
        },
        brand: {
          primary: '#3B82F6',
          secondary: '#38BDF8',
          accent: '#60A5FA',
        },
        text: {
          heading: '#F8FAFC',
          body: '#CBD5E1',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
