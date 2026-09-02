import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packHotelScenarios: ScenarioType[] = [
  { id: 'htl-01', title: 'Ubuntu 26 LTS Flex', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Tech', role: 'Windows User', desc: 'Defend your Dell Latitude 5430 vPro running Ubuntu 26 LTS against a Windows loyalist.' },
  { id: 'htl-02', title: 'Voix ERP Deployment', originalLanguage: 'English', availableLanguages: ['English', 'Pidgin English'], category: 'Work', role: 'Company Director', desc: 'Explain the Node.js, Vite, and SQLite backend architecture of the new Voix ERP system.' },
  { id: 'htl-03', title: 'UptimeRobot Alert', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English'], category: 'Tech', role: 'NOC Manager', desc: 'Cross-reference a WhatsApp team chat with an UptimeRobot email to verify network downtime.' },
  { id: 'htl-04', title: 'Domain Transfer', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English'], category: 'Tech', role: 'Hosting Support', desc: 'Argue with Affeez Host support about unlocking your domain for an urgent transfer to Smartweb.' },
  { id: 'htl-05', title: 'CAC Registration Bounce', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Work', role: 'CAC Support Agent', desc: 'Argue with the Corporate Affairs Commission portal support about why your business name was flagged.' },
  { id: 'htl-06', title: 'Leave of Absence', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Work', role: 'Director of Admin', desc: 'Formally request a two-day leave of absence from your NYSC primary assignment.' },
  { id: 'htl-07', title: 'Dual-Channel Upgrade', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Tech', role: 'Hardware Vendor', desc: 'Ensure the 16GB DDR4 stick you are buying perfectly matches your Kioxia Gen 4 NVMe SSD setup.' }
];