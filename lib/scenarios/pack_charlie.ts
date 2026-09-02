import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packCharlieScenarios: ScenarioType[] = [
  // TECH & HARDWARE
  { id: 'chr-01', title: 'The OS Elitist', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Tech', role: 'Arch Linux User', desc: 'Defend your choice to run Ubuntu 26 LTS on your Dell Latitude 5430 against a Linux elitist.' },
  { id: 'chr-02', title: 'RAM Upgrade Support', originalLanguage: 'German', availableLanguages: ['German', 'English', 'Mandarin'], category: 'Tech', role: 'PC Shop Clerk', desc: 'Ask if they stock a 16GB DDR4 3200MT/s stick so you can run your laptop in dual-channel.' },
  { id: 'chr-03', title: 'NOC Log Review', originalLanguage: 'English', availableLanguages: ['English', 'Russian', 'Pidgin English'], category: 'Work', role: 'UptimeRobot Agent', desc: 'Argue with an automated alert system that your MTTR calculations are perfectly accurate.' },
  { id: 'chr-04', title: 'Phone Accessory Hunt', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English', 'Spanish'], category: 'Shopping', role: 'Kiosk Vendor', desc: 'Try to find a matte screen protector specifically for a Midnight Black Xiaomi Redmi 15 4G.' },
  { id: 'chr-05', title: 'Audio Routing Woes', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Tech', role: 'Audio Engineer', desc: 'Explain your custom bash script for routing PipeWire into a mono configuration.' },
  
  // GAMING & LORE
  { id: 'chr-06', title: 'Blood Strike Loadout', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English', 'Spanish'], category: 'Everyday', role: 'Sweaty Teammate', desc: 'Argue with your squadmate about why your specific SMG loadout is the meta.' },
  { id: 'chr-07', title: 'Murim Cultivation Debate', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English', 'Mandarin'], category: 'Pop Culture', role: 'Demonic Cult Follower', desc: 'Debate the efficiency of demonic Dantian energy versus orthodox martial arts.' },
  { id: 'chr-08', title: 'Chainsaw Man Spoilers', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English', 'French'], category: 'Everyday', role: 'Anime Fan', desc: 'Yell at a stranger who just casually dropped a massive spoiler for Chainsaw Man.' },
  { id: 'chr-09', title: 'Game Engine Limits', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Tech', role: 'Skeptical Developer', desc: 'Explain how your custom C++ engine maximizes CPU cache efficiency on legacy hardware.' },
  { id: 'chr-10', title: 'Combat Master Ping', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'English', 'Pidgin English'], category: 'Everyday', role: 'Opponent', desc: 'Accuse your opponent of lagging and using a VPN during a ranked match.' },

  // MUSIC & AUDIO
  { id: 'chr-11', title: 'Booking a DJ Gig', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English', 'Italian'], category: 'Work', role: 'Club Promoter', desc: 'Try to convince a club owner that your high-speed Juke and Makina beats will pack the dance floor.' },
  { id: 'chr-12', title: 'Studio Rental', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Work', role: 'Studio Manager', desc: 'Haggle for a cheaper hourly rate to mix your electronic tracks in Soundtrap.' },

  // RETAIL & EVERYDAY ABSURDITY
  { id: 'chr-13', title: 'Returning a Dead Plant', originalLanguage: 'Dutch', availableLanguages: ['Dutch', 'English', 'German'], category: 'Shopping', role: 'Garden Center Clerk', desc: 'Demand a refund for a cactus that died even though you "only watered it every day."' },
  { id: 'chr-14', title: 'Stolen Parking Spot', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English', 'Spanish'], category: 'Incidents', role: 'Smug Driver', desc: 'Confront a driver who just slid into the parking spot you had your blinker on for.' },
  { id: 'chr-15', title: 'Broken Hotel AC', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English', 'Hindi'], category: 'Travel', role: 'Front Desk', desc: 'Complain that your hotel room is 35 degrees and the AC unit is just blowing hot sand.' },
  { id: 'chr-16', title: 'Weird Customs Declaration', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'English'], category: 'Incidents', role: 'Customs Officer', desc: 'Explain why you are traveling with 14 sealed jars of homemade hot sauce.' },
  { id: 'chr-17', title: 'The Typo Cup', originalLanguage: 'English', availableLanguages: ALL_LANGUAGES, category: 'Everyday', role: 'Apologetic Barista', desc: 'Complain that your name was spelled so horribly wrong it resembles a curse word.' },
  { id: 'chr-18', title: 'Wrong Pizza Size', originalLanguage: 'Hindi', availableLanguages: ['Hindi', 'English'], category: 'Dining', role: 'Delivery Driver', desc: 'Refuse to pay full price because they brought a medium instead of a family size.' },
  { id: 'chr-19', title: 'Late Checkout Request', originalLanguage: 'French', availableLanguages: ['French', 'English', 'German'], category: 'Travel', role: 'Hotel Manager', desc: 'Beg to keep your room until 4 PM without paying for an extra day.' },
  { id: 'chr-20', title: 'Foul on the Court', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Everyday', role: 'Aggressive Defender', desc: 'Argue over a blatant foul call during a pickup basketball game.' },
  { id: 'chr-21', title: 'Ruined Borrowed Shirt', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'English', 'Portuguese'], category: 'Everyday', role: 'Angry Friend', desc: 'Explain the massive red wine stain on the expensive shirt you borrowed.' },
  { id: 'chr-22', title: 'Stubborn DJ', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Everyday', role: 'Club DJ', desc: 'Try to bribe the DJ into playing your favorite track.' },
  { id: 'chr-23', title: 'Crying Baby on Flight', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English', 'Korean'], category: 'Travel', role: 'Flight Attendant', desc: 'Politely ask if you can be moved to a different row away from a screaming infant.' },
  { id: 'chr-24', title: 'Where are the Dinosaurs?', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English'], category: 'Travel', role: 'Museum Guard', desc: 'Ask for directions to the T-Rex exhibit because you are lost in the modern art wing.' },
  { id: 'chr-25', title: 'Canceling Gym Membership', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Work', role: 'Gym Manager', desc: 'Fight through the endless bureaucratic excuses keeping you from canceling your membership.' }
];