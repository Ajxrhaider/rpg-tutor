import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packJulietScenarios: ScenarioType[] = [
  { id: 'jul-01', title: 'Akihabara eSIM', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English', 'Mandarin'], category: 'Travel', role: 'Mobile Clerk', desc: 'Try to activate a digital eSIM profile for your Black Xiaomi Redmi 15 4G.' },
  { id: 'jul-02', title: 'Nmap Scan Flagged', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English'], category: 'Tech', role: 'Network Admin', desc: 'Explain why you were running Recon-ng and Nmap on the local network infrastructure.' },
  { id: 'jul-03', title: 'BlueString Webtoon Lore', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English'], category: 'Pop Culture', role: 'Lore Master', desc: 'Explain the timeline overlaps between Hanlim Gym, Study Group, and Reawakened Man.' },
  { id: 'jul-04', title: 'Rclone Sync Error', originalLanguage: 'Dutch', availableLanguages: ['Dutch', 'English'], category: 'Tech', role: 'Cloud Support', desc: 'Troubleshoot an rclone bisync script that is failing to push a local directory to OneDrive.' },
  { id: 'jul-05', title: 'Chainsaw Man Theory', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Pop Culture', role: 'Manga Reader', desc: 'Argue aggressively about the true identity of a newly introduced devil in the manga.' },
  { id: 'jul-06', title: 'Ado FCT Traffic', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Travel', role: 'Keke Driver', desc: 'Negotiate the fare for a rough ride through heavy traffic in Ado, FCT.' }
];