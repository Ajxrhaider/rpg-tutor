import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packKiloScenarios: ScenarioType[] = [
  { id: 'klo-01', title: 'The VIP Walk-in', originalLanguage: 'French', availableLanguages: ['French', 'English', 'Italian'], category: 'Dining', role: 'Maitre D', desc: 'Try to bribe the Maitre D into giving you a table at a fully booked Michelin-star restaurant.' },
  { id: 'klo-02', title: 'Ruined Wedding Cake', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Incidents', role: 'Panicked Baker', desc: 'Demand a solution after the bakery accidentally dropped your three-tier wedding cake.' },
  { id: 'klo-03', title: 'Fake Sommelier', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English', 'Spanish'], category: 'Funny', role: 'Suspicious Sommelier', desc: 'Pretend you know everything about wine while ordering the cheapest bottle on the menu.' },
  { id: 'klo-04', title: 'The Endless Tapas', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English'], category: 'Dining', role: 'Overzealous Waiter', desc: 'Politely beg the waiter to stop bringing food because you are completely full.' },
  { id: 'klo-05', title: 'Ramen Shop Protocol', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Dining', role: 'Strict Ramen Chef', desc: 'Apologize for asking for a fork in a highly traditional Tokyo ramen shop.' },
  { id: 'klo-06', title: 'Bukka Joint Brawl', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Incidents', role: 'Bukka Owner', desc: 'Argue that the last piece of assorted meat in the pot was promised to you.' }
];