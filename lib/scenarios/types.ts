export const ALL_LANGUAGES = [
  'English', 'French', 'Spanish', 'Japanese', 'German', 'Mandarin', 
  'Korean', 'Italian', 'Russian', 'Arabic', 'Portuguese', 'Pidgin English', 
  'Dutch', 'Turkish', 'Hindi'
];

export type ScenarioType = {
  id: string;
  title: string;
  originalLanguage: string;
  availableLanguages: string[];
  category: string;
  role: string;
  desc: string;
};