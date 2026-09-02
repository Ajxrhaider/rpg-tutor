import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packEchoScenarios: ScenarioType[] = [
  // HIGH-TECH & SYSTEM ADMIN
  { id: 'ech-01', title: 'PipeWire Routing', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Tech', role: 'Skeptical Linux User', desc: 'Defend your decision to write custom bash scripts to force PipeWire into system-wide mono on Ubuntu 26 LTS.' },
  { id: 'ech-02', title: 'The Browser Wars', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English', 'Mandarin'], category: 'Tech', role: 'Chrome Loyalist', desc: 'Aggressively debate why running Brave Browser and Opera GX on Linux is superior to Chrome.' },
  { id: 'ech-03', title: 'Refurbished Hardware Flex', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Tech', role: 'Apple Fanboy', desc: 'Explain how your Dell Latitude 5430 with an i7 and 32GB dual-channel RAM outperforms their overpriced MacBook.' },
  { id: 'ech-04', title: 'Uptime Log Merging', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English'], category: 'Work', role: 'Junior Dev', desc: 'Argue about the proper way to merge UptimeRobot emails and WhatsApp team chats into a single master MTTR spreadsheet.' },
  { id: 'ech-05', title: 'Business Name Registration', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Work', role: 'CAC Support Agent', desc: 'Argue with the Corporate Affairs Commission portal support about why "Hizaki Tech" was flagged for a name similarity score.' },

  // LORE & ENTERTAINMENT
  { id: 'ech-06', title: 'Demonic Path Diagnosis', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English', 'Korean'], category: 'Pop Culture', role: 'Confused Doctor', desc: 'Try to explain that your chest pain is just your Dantian reacting to a new Murim cultivation technique.' },
  { id: 'ech-07', title: 'Tournament of the Gods', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Pop Culture', role: 'Anime Theorist', desc: 'Debate the final roster picks for the Ragnarok tournament and who actually deserved to fight.' },
  { id: 'ech-08', title: 'Indie Game Pitch', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English', 'French'], category: 'Work', role: 'Harsh Investor', desc: 'Pitch a Brick Breaker video game that you built with your friends, claiming it will revolutionize the genre.' },
  { id: 'ech-09', title: 'The Underground DJ Mix', originalLanguage: 'French', availableLanguages: ['French', 'English', 'Italian'], category: 'Everyday', role: 'Music Producer', desc: 'Argue that blending 8-bit chiptune, Makina, Juke, and Brazilian Phonk in Soundtrap is a stroke of genius.' },
  { id: 'ech-10', title: 'eSIM Adapter Hunt', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Shopping', role: 'Akihabara Clerk', desc: 'Search desperately for a physical eSIM adapter for your phone so you can get cellular data.' },

  // FITNESS & PHYSICALITY
  { id: 'ech-11', title: 'Unconventional Gym Routine', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English', 'German'], category: 'Everyday', role: 'Confused Trainer', desc: 'Explain why your workout solely consists of 100 double-arm long pole swings and 120 jumps.' },
  { id: 'ech-12', title: 'Claiming the Heavy Bag', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English'], category: 'Everyday', role: 'MMA Fighter', desc: 'Refuse to give up the heavy bag because you still have 60 single-arm short pole swings to complete.' },

  // TRAVEL & INCIDENTS
  { id: 'ech-13', title: 'Lost Drone', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English', 'Portuguese'], category: 'Incidents', role: 'Park Ranger', desc: 'Explain that your drone is stuck in a highly protected historical tree.' },
  { id: 'ech-14', title: 'The Overbooked Flight', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English', 'Hindi'], category: 'Travel', role: 'Gate Agent', desc: 'Negotiate the cash voucher amount they are offering to give up your seat.' },
  { id: 'ech-15', title: 'Train Quiet Zone', originalLanguage: 'Dutch', availableLanguages: ['Dutch', 'English', 'German'], category: 'Travel', role: 'Angry Passenger', desc: 'Defend yourself after your headphones disconnected and blasted Makina music in the quiet car.' },
  { id: 'ech-16', title: 'Counterfeit Currency', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English'], category: 'Incidents', role: 'Market Vendor', desc: 'Argue that the banknote the ATM just gave you is definitely not fake.' },
  { id: 'ech-17', title: 'Accidental Dine & Dash', originalLanguage: 'French', availableLanguages: ALL_LANGUAGES, category: 'Incidents', role: 'Out of Breath Waiter', desc: 'Explain you were just running to the ATM across the street and didn\'t mean to flee without paying.' },

  // EVERYDAY CHAOS
  { id: 'ech-18', title: 'Stealing the Armrest', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Travel', role: 'Aisle Seat Passenger', desc: 'Engage in a passive-aggressive battle over the middle seat armrest.' },
  { id: 'ech-19', title: 'The Unsolicited Tech Support', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English', 'Pidgin English'], category: 'Everyday', role: 'Stubborn Uncle', desc: 'Try to convince your relative to stop installing sketchy PC optimizers.' },
  { id: 'ech-20', title: 'Towing My Car', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English'], category: 'Incidents', role: 'Tow Truck Driver', desc: 'Sprint up to the truck and beg them to drop your car since you are literally standing right there.' },
  { id: 'ech-21', title: 'Hostel Fridge Theft', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'Spanish', 'English'], category: 'Travel', role: 'Backpacker', desc: 'Accuse a fellow traveler of eating the clearly labeled leftovers you put in the communal fridge.' },
  { id: 'ech-22', title: 'The Squeaky Cart', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Everyday', role: 'Supermarket Manager', desc: 'Demand a different shopping cart because the wheel squeaks at an unbearable frequency.' },
  { id: 'ech-23', title: 'Sneaking Snacks', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English', 'Korean'], category: 'Everyday', role: 'Cinema Usher', desc: 'Deny that the massive bulge under your jacket is a 2-liter soda and a bag of chips.' },
  { id: 'ech-24', title: 'Haircut Refund', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English'], category: 'Everyday', role: 'Barber Shop Owner', desc: 'Demand your money back because the fade is completely uneven.' },
  { id: 'ech-25', title: 'Dodging the Survey', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Everyday', role: 'Relentless Canvasser', desc: 'Try to escape a person with a clipboard asking for "just two minutes of your time."' }
];