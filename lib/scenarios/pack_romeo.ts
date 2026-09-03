import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packRomeoScenarios: ScenarioType[] = [
  { id: 'rom-01', title: 'The TEFConnect Pitch', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'Venture Capitalist', desc: 'Defend your pre-launch ICT business idea focusing on web design, robotics, and digital media.' },
  { id: 'rom-06', title: 'Next.js vs SvelteKit', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Tech', role: 'Svelte Fanatic', desc: 'Defend your decision to rebuild Hizaki Labs using React and Vite instead of SvelteKit.' },
  { id: 'rom-07', title: 'Tailwind CSS Clutter', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Tech', role: 'CSS Purist', desc: 'Explain why utility-first Tailwind classes are actually highly maintainable in a massive codebase.' },
  { id: 'rom-08', title: 'SQLite in Production', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Tech', role: 'PostgreSQL Elitist', desc: 'Argue that SQLite is perfectly fine for the initial Voix ERP backend.' },
  { id: 'rom-09', title: 'NYSC Clearance', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Work', role: 'LGI (Local Govt Inspector)', desc: 'Explain why you missed your monthly biometric clearance at your primary assignment.' },
  { id: 'rom-10', title: 'Git Commit Formats', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'Lead Developer', desc: 'Defend your decision to name all your Git commits after military hardware and special forces units.' },
  { id: 'rom-11', title: 'VS Code Tab Panic', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English'], category: 'Tech', role: 'Pair Programmer', desc: 'Apologize for accidentally closing 40 active file tabs in Cursor AI.' }
];