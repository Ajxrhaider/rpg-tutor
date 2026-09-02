import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packMikeScenarios: ScenarioType[] = [
  { id: 'mik-01', title: 'Grade Appeal', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'Strict Professor', desc: 'Argue why your final essay deserves an A instead of a B minus.' },
  { id: 'mik-02', title: 'Library Noise', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English', 'Korean'], category: 'Everyday', role: 'Angry Student', desc: 'Defend yourself against accusations that you are typing too loudly on your mechanical keyboard.' },
  { id: 'mik-03', title: 'Dorm Room Disaster', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Incidents', role: 'RA (Resident Advisor)', desc: 'Explain why there is a massive burn mark on the ceiling of your dorm room.' },
  { id: 'mik-04', title: 'Visa Extension', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Work', role: 'Immigration Officer', desc: 'Plead your case for a 30-day tourist visa extension due to "unforeseen cultural research."' },
  { id: 'mik-05', title: 'Plagiarism Accusation', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English'], category: 'Work', role: 'Academic Dean', desc: 'Prove that you did not use an AI tool to write your final thesis on theoretical physics.' }
];