import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packNovemberScenarios: ScenarioType[] = [
  { id: 'nov-01', title: 'Black Market GPU', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English', 'Mandarin'], category: 'Shopping', role: 'Shady Importer', desc: 'Haggle for a smuggled high-end graphics card in a dimly lit alley.' },
  { id: 'nov-02', title: 'Cursed Antique', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English', 'Arabic'], category: 'Funny', role: 'Bazaar Vendor', desc: 'Try to return a beautiful lamp because it is "definitely haunted" and speaks to you at night.' },
  { id: 'nov-03', title: 'VIP Sneaker Drop', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English', 'Japanese'], category: 'Shopping', role: 'Store Security', desc: 'Try to bribe your way to the front of the line for an exclusive sneaker release.' },
  { id: 'nov-04', title: 'Buying an Island', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'Real Estate Agent', desc: 'Inquire about purchasing a private island with extremely suspicious demands for "absolute isolation."' },
  { id: 'nov-05', title: 'Secret Menu Item', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English'], category: 'Dining', role: 'Suspicious Waiter', desc: 'Try to order a legendary mobster-themed secret menu item you heard about on Reddit.' }
];