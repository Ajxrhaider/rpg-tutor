import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packIndiaScenarios: ScenarioType[] = [
  { id: 'ind-01', title: 'Makina vs Phonk', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'English', 'Spanish'], category: 'Music', role: 'Soundtrap Producer', desc: 'Debate the chaotic tempo fusion of Brazilian Phonk and Makina under the John Hizaki alias.' },
  { id: 'ind-02', title: 'Premiere Pro Crash', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English'], category: 'Tech', role: 'Video Editor', desc: 'Curse at your timeline because Adobe Premiere Pro crashed at 99% render without auto-saving.' },
  { id: 'ind-03', title: 'Otaku Sync Architecture', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Tech', role: 'Open Source Contributor', desc: 'Explain how Next.js and Turborepo handle API rate limits across MyAnimeList and AniList.' },
  { id: 'ind-04', title: 'Copyright Claim', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'YouTube Support', desc: 'Dispute a false DMCA strike on an 8-bit chiptune track you composed yourself.' },
  { id: 'ind-05', title: 'Favicon Rendering Bug', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English'], category: 'Tech', role: 'WordPress Dev', desc: 'Troubleshoot why the new company logo isn\'t rendering as an Elementor favicon on mobile.' },
  { id: 'ind-06', title: 'ChronoMass Simulation', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Tech', role: 'Data Scientist', desc: 'Pitch the Mass Map data structure for a 50-year predictive building lifecycle simulation.' }
];