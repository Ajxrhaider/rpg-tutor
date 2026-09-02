import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packFoxtrotScenarios: ScenarioType[] = [
  // ABSURD & TACTICAL CHAOS
  { id: 'fox-01', title: 'Calling in Close Air Support', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Funny', role: 'Confused 911 Operator', desc: 'Try to request an AC-130 gunship strike on a massive spider in your garage.' },
  { id: 'fox-02', title: 'The Flashbang', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English', 'German'], category: 'Funny', role: 'Angry Roommate', desc: 'Explain why you threw a tactical flashbang into the kitchen to secure the last slice of pizza.' },
  { id: 'fox-03', title: 'Weaponized Spoon', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Funny', role: 'TSA Agent', desc: 'Argue that your comically oversized titanium spoon is a cultural artifact, not a weapon.' },
  { id: 'fox-04', title: 'Loot Drop', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English', 'Portuguese'], category: 'Funny', role: 'Delivery Driver', desc: 'Demand to know why the delivery driver didn\'t drop your package from a C-17 with a parachute.' },
  { id: 'fox-05', title: 'Breaching the Bathroom', originalLanguage: 'French', availableLanguages: ['French', 'English', 'Italian'], category: 'Funny', role: 'Startled Sibling', desc: 'Explain why you kicked the bathroom door off its hinges shouting "FBI OPEN UP" instead of knocking.' },
  
  // LOGISTICS & SHOPPING
  { id: 'fox-06', title: 'Returning a Parachute', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Shopping', role: 'Sporting Goods Clerk', desc: 'Try to return a parachute that you clearly used and tangled in a tree.' },
  { id: 'fox-07', title: 'Buying an Obscure Cable', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English', 'Mandarin'], category: 'Shopping', role: 'Electronics Clerk', desc: 'Ask for a 15-year-old proprietary charging cable for a forgotten MP3 player.' },
  { id: 'fox-08', title: 'Haggling for a Tank', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English', 'Russian'], category: 'Shopping', role: 'Surplus Dealer', desc: 'Try to negotiate the price of a decommissioned T-72 tank down by 20%.' },
  { id: 'fox-09', title: 'The Wrong Engine Oil', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English'], category: 'Shopping', role: 'Auto Parts Clerk', desc: 'Argue that putting cooking oil in your engine is an acceptable budget alternative.' },
  { id: 'fox-10', title: 'Too Many Energy Drinks', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English'], category: 'Shopping', role: 'Concerned Cashier', desc: 'Defend your purchase of 48 energy drinks at 3 AM.' },

  // WORK & PROFESSIONAL
  { id: 'fox-11', title: 'Expense Report Denial', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English'], category: 'Work', role: 'Finance Manager', desc: 'Argue why a night vision goggle set is a necessary business expense for a web developer.' },
  { id: 'fox-12', title: 'Sleeping Under the Desk', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English'], category: 'Work', role: 'Office Cleaner', desc: 'Explain why you have constructed a highly tactical blanket fort under your workstation.' },
  { id: 'fox-13', title: 'The Code Comment', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Work', role: 'Lead Engineer', desc: 'Defend a comment in your code that just says "Here be dragons. Do not touch or the server dies."' },
  { id: 'fox-14', title: 'Zoom Call Filter', originalLanguage: 'Dutch', availableLanguages: ['Dutch', 'English'], category: 'Work', role: 'CEO', desc: 'Apologize for being stuck as a talking potato for the entire quarterly earnings call.' },
  { id: 'fox-15', title: 'Overclocking the Microwave', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English'], category: 'Work', role: 'Breakroom Manager', desc: 'Explain why you tried to undervolt and overclock the office microwave to heat food faster.' },

  // DINING & HOSPITALITY
  { id: 'fox-16', title: 'MRE Taste Test', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Dining', role: 'Restaurant Critic', desc: 'Argue that a military MRE heated with a rock is better than the Michelin star food you just ate.' },
  { id: 'fox-17', title: 'Eating with Chopsticks', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'English'], category: 'Dining', role: 'Sushi Chef', desc: 'Politely refuse a fork and insist on struggling with chopsticks for another 10 minutes.' },
  { id: 'fox-18', title: 'The Never-ending Refill', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English'], category: 'Dining', role: 'Exasperated Waiter', desc: 'Ask for your 14th refill of Diet Coke during a very long dinner.' },
  { id: 'fox-19', title: 'Seagull Attack', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Incidents', role: 'Patio Waiter', desc: 'Demand a new crepe after a massive seagull swooped down and stole yours off the table.' },
  { id: 'fox-20', title: 'Too Much Garlic', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English'], category: 'Dining', role: 'Vampire', desc: 'Try to casually explain why you need every speck of garlic removed from the kitchen before you enter.' },

  // MISC EVERYDAY
  { id: 'fox-21', title: 'Escalator Standoff', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Everyday', role: 'Stubborn Tourist', desc: 'Argue with someone standing on the left side of the escalator, blocking the walking path.' },
  { id: 'fox-22', title: 'The Broken Vending Machine', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'English'], category: 'Everyday', role: 'Maintenance Worker', desc: 'Explain why you are currently shaking a vending machine violently to free your chips.' },
  { id: 'fox-23', title: 'Forgetting a Name', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Everyday', role: 'Acquaintance', desc: 'Try to carry a 5-minute conversation with someone without admitting you forgot their name.' },
  { id: 'fox-24', title: 'Parallel Parking Disaster', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English'], category: 'Everyday', role: 'Impatient Driver Behind You', desc: 'Apologize for taking 6 attempts to parallel park and completely blocking traffic.' },
  { id: 'fox-25', title: 'The Haunted Airbnb', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English'], category: 'Travel', role: 'Host', desc: 'Complain that your rental is definitely haunted because the lights keep flickering in Morse code.' }
];