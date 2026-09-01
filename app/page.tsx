'use client';

import { useState, useEffect, useMemo } from 'react';
import ChatInterface from '@/components/ChatInterface';
import FeedbackReport from '@/components/FeedbackReport';

const SCENARIOS = [
  // --- THE ORIGINALS & TECH ---
  { id: 'paris-coffee', title: 'Ordering Coffee in Paris', originalLanguage: 'French', availableLanguages: ['French', 'Spanish', 'Japanese', 'German'], category: 'Dining', role: 'Parisian Barista', desc: 'You are a customer trying to order a coffee and a pastry at a busy local cafe in Paris.' },
  { id: 'tokyo-hotel', title: 'Checking into a Tokyo Hotel', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'Mandarin'], category: 'Travel', role: 'Hotel Receptionist', desc: 'You are a tourist checking into your hotel in Shinjuku, but you arrived earlier than the check-in time.' },
  { id: 'mexico-market', title: 'Haggling in Mexico City', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Portuguese', 'Italian'], category: 'Shopping', role: 'Market Vendor', desc: 'You are at a lively market in Mexico City trying to negotiate the price of a beautiful handmade blanket.' },
  { id: 'noc-outage', title: 'Navigating a Network Outage', originalLanguage: 'English', availableLanguages: ['English', 'Russian', 'German'], category: 'Tech', role: 'Lead NOC Engineer', desc: 'You are coordinating with your Lead NOC Engineer to analyze downtime logs and calculate MTTR to restore enterprise network services.' },
  { id: 'game-engine-pitch', title: 'Game Engine Architecture Pitch', originalLanguage: 'English', availableLanguages: ['English', 'Japanese', 'Korean', 'French'], category: 'Tech', role: 'Senior C++ Developer', desc: 'You are defending your choice to use Data-Oriented Design and CPU cache efficiency for a new game engine targeting legacy hardware.' },
  { id: 'murim-cultivation', title: 'Demonic Clan Cultivation', originalLanguage: 'English', availableLanguages: ['English', 'Mandarin', 'Korean'], category: 'Pop Culture', role: 'Demonic Path Patriarch', desc: 'You are a rogue martial artist explaining your unconventional Dantian energy cultivation techniques to the Patriarch of a demonic sect.' },

  // --- REAL LIFE: TRAVEL & TRANSIT ---
  { id: 'berlin-train', title: 'Missed Train in Berlin', originalLanguage: 'German', availableLanguages: ['German', 'Dutch', 'Polish', 'English'], category: 'Travel', role: 'Ticket Inspector', desc: 'You boarded the wrong ICE train and need to explain your situation to the conductor.' },
  { id: 'seoul-taxi', title: 'Lost in Seoul', originalLanguage: 'Korean', availableLanguages: ['Korean', 'Japanese', 'Mandarin'], category: 'Travel', role: 'Taxi Driver', desc: 'You are trying to give a taxi driver directions to your Airbnb without knowing the exact address.' },
  { id: 'rome-bus', title: 'Buying a Bus Ticket', originalLanguage: 'Italian', availableLanguages: ['Italian', 'Spanish', 'French'], category: 'Travel', role: 'Tabaccheria Owner', desc: 'Purchasing a 24-hour transit pass and asking for directions to the Colosseum.' },
  { id: 'beijing-airport', title: 'Lost Luggage Claim', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'Cantonese', 'English', 'Korean'], category: 'Incidents', role: 'Airport Staff', desc: 'Filing a missing baggage report after your flight to Beijing Capital International Airport.' },
  { id: 'paris-metro', title: 'Metro Turnstile Error', originalLanguage: 'French', availableLanguages: ['French', 'Italian', 'Arabic'], category: 'Incidents', role: 'Station Attendant', desc: 'Your ticket was eaten by the machine and you are stuck behind the turnstile.' },
  { id: 'tokyo-shinkansen', title: 'Reserving Shinkansen Seats', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Mandarin', 'English'], category: 'Travel', role: 'Ticket Agent', desc: 'Booking two window seats on the bullet train to Kyoto for tomorrow morning.' },
  { id: 'madrid-rental', title: 'Renting a Car', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Portuguese', 'Italian', 'German'], category: 'Travel', role: 'Rental Agent', desc: 'Declining extra insurance while picking up your rental car at the Madrid airport.' },
  { id: 'london-tube', title: 'Oyster Card Issues', originalLanguage: 'English', availableLanguages: ['English', 'French', 'Hindi'], category: 'Incidents', role: 'TfL Worker', desc: 'Explaining that the gate charged you maximum fare because you forgot to tap out.' },
  { id: 'moscow-subway', title: 'Navigating the Metro', originalLanguage: 'Russian', availableLanguages: ['Russian', 'Ukrainian', 'Turkish'], category: 'Travel', role: 'Local Commuter', desc: 'Asking a local which train line goes to the Red Square.' },
  { id: 'dubai-layover', title: 'Flight Delay Compensation', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English', 'Hindi', 'Urdu'], category: 'Travel', role: 'Airline Rep', desc: 'Requesting a hotel voucher after your connecting flight was delayed by 12 hours.' },
  { id: 'amsterdam-bike', title: 'Renting a Bicycle', originalLanguage: 'English', availableLanguages: ['English', 'Dutch', 'German'], category: 'Travel', role: 'Bike Shop Owner', desc: 'Asking for a daily rental rate and a heavy-duty lock.' },
  { id: 'venice-gondola', title: 'Negotiating a Ride', originalLanguage: 'Italian', availableLanguages: ['Italian', 'French', 'Spanish', 'German'], category: 'Travel', role: 'Gondolier', desc: 'Asking for a 30-minute tour route and confirming the fixed price before boarding.' },

  // --- REAL LIFE: DINING & HOSPITALITY ---
  { id: 'naples-pizza', title: 'Customizing a Pizza', originalLanguage: 'Italian', availableLanguages: ['Italian', 'Spanish', 'Portuguese'], category: 'Dining', role: 'Pizzaiolo', desc: 'Ordering a Margherita pizza but asking for half of it to have spicy salami.' },
  { id: 'osaka-izakaya', title: 'Ordering Drinks & Skewers', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'Mandarin'], category: 'Dining', role: 'Izakaya Waiter', desc: 'Ordering a round of beers and asking for the chefs recommended yakitori.' },
  { id: 'paris-allergy', title: 'Explaining a Peanut Allergy', originalLanguage: 'French', availableLanguages: ['French', 'English', 'German'], category: 'Dining', role: 'Maitre D', desc: 'Ensuring the kitchen knows about your severe peanut allergy before ordering.' },
  { id: 'munich-beer', title: 'Oktoberfest Table', originalLanguage: 'German', availableLanguages: ['German', 'Italian', 'Dutch'], category: 'Dining', role: 'Waitress', desc: 'Trying to order a pretzel and a liter of beer at a loud, crowded table.' },
  { id: 'buenos-aires-steak', title: 'Sending Food Back', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Portuguese', 'English'], category: 'Dining', role: 'Waiter', desc: 'Politely explaining that your steak is well-done instead of medium-rare.' },
  { id: 'shanghai-dimsum', title: 'Vegetarian Options', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'Cantonese', 'Japanese'], category: 'Dining', role: 'Restaurant Manager', desc: 'Asking which dim sum dishes are strictly vegetarian with no pork stock.' },
  { id: 'lisbon-seafood', title: 'Catch of the Day', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'Spanish', 'French'], category: 'Dining', role: 'Fisherman/Chef', desc: 'Asking about the freshest fish available and how it is prepared.' },
  { id: 'istanbul-kebab', title: 'Spicy Level Request', originalLanguage: 'Turkish', availableLanguages: ['Turkish', 'Arabic', 'Russian'], category: 'Dining', role: 'Street Vendor', desc: 'Ordering a doner kebab and asking for it to be extra, extra spicy.' },
  { id: 'ny-deli', title: 'The Complicated Order', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'Hebrew'], category: 'Dining', role: 'Deli Worker', desc: 'Ordering a highly specific, customized bagel sandwich during the morning rush.' },
  { id: 'seoul-bbq', title: 'Grill Change Request', originalLanguage: 'Korean', availableLanguages: ['Korean', 'Japanese', 'English'], category: 'Dining', role: 'Server', desc: 'Asking the server to change the burnt grill pan and ordering more soju.' },
  { id: 'vienna-cafe', title: 'Coffee and Cake', originalLanguage: 'German', availableLanguages: ['German', 'Hungarian', 'Italian'], category: 'Dining', role: 'Barista', desc: 'Ordering a slice of Sachertorte and an Einspänner coffee.' },

  // --- REAL LIFE: SHOPPING & COMMERCE ---
  { id: 'milan-fashion', title: 'Trying on Clothes', originalLanguage: 'Italian', availableLanguages: ['Italian', 'French', 'Russian'], category: 'Shopping', role: 'Boutique Clerk', desc: 'Asking for a different size and color for a jacket you want to try on.' },
  { id: 'tokyo-electronics', title: 'Buying a Camera', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Mandarin', 'English', 'Korean'], category: 'Shopping', role: 'Electronics Store Staff', desc: 'Asking if the warranty on a mirrorless camera is valid internationally.' },
  { id: 'paris-pharmacy', title: 'Buying Cold Medicine', originalLanguage: 'French', availableLanguages: ['French', 'Spanish', 'Arabic'], category: 'Shopping', role: 'Pharmacist', desc: 'Describing your sore throat and fever to get over-the-counter medication.' },
  { id: 'bogota-market', title: 'Buying Fresh Fruit', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Portuguese', 'English'], category: 'Shopping', role: 'Fruit Vendor', desc: 'Asking to sample some exotic fruits and buying a kilo of mangoes.' },
  { id: 'berlin-flea', title: 'Haggling for Antiques', originalLanguage: 'German', availableLanguages: ['German', 'Polish', 'Turkish'], category: 'Shopping', role: 'Antique Dealer', desc: 'Negotiating the price of a vintage typewriter at the Mauerpark flea market.' },
  { id: 'dubai-gold', title: 'Gold Souk Negotiation', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'Hindi', 'Urdu', 'English'], category: 'Shopping', role: 'Jeweler', desc: 'Asking about the karat purity and negotiating the making charge of a necklace.' },
  { id: 'seoul-skincare', title: 'Skincare Routine', originalLanguage: 'Korean', availableLanguages: ['Korean', 'Mandarin', 'Japanese'], category: 'Shopping', role: 'Beauty Consultant', desc: 'Asking for recommendations for dry, sensitive skin products.' },
  { id: 'london-tailor', title: 'Suit Alterations', originalLanguage: 'English', availableLanguages: ['English', 'Italian', 'French'], category: 'Shopping', role: 'Tailor', desc: 'Requesting the trousers be hemmed and the jacket sleeves shortened.' },
  { id: 'taipei-nightmarket', title: 'Finding a specific stall', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'Hakka', 'Japanese'], category: 'Everyday', role: 'Street Sweeper', desc: 'Asking for directions to the famous stinky tofu stall you read about online.' },
  { id: 'rio-surfshop', title: 'Renting a Surfboard', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'Spanish', 'English'], category: 'Shopping', role: 'Shop Owner', desc: 'Renting a longboard for the day and asking about the current tide conditions.' },
  { id: 'hardware-store', title: 'DIY Project Supplies', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'German'], category: 'Shopping', role: 'Store Clerk', desc: 'Trying to find the right sealant and primer for a bathroom renovation project.' },

  // --- WORK & PROFESSIONAL ---
  { id: 'job-interview', title: 'The Difficult Interview', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Japanese', 'Mandarin'], category: 'Work', role: 'Hiring Manager', desc: 'Explaining a two-year gap in your resume during a high-stakes job interview.' },
  { id: 'salary-negotiation', title: 'Asking for a Raise', originalLanguage: 'English', availableLanguages: ['English', 'French', 'Spanish'], category: 'Work', role: 'Your Boss', desc: 'Presenting your accomplishments over the last year to justify a 15% salary increase.' },
  { id: 'tokyo-business', title: 'Exchanging Meishi (Cards)', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'Mandarin'], category: 'Work', role: 'Potential Client', desc: 'Formally introducing yourself and exchanging business cards at a corporate mixer.' },
  { id: 'paris-client', title: 'Pushing a Deadline', originalLanguage: 'French', availableLanguages: ['French', 'English', 'Italian'], category: 'Work', role: 'Frustrated Client', desc: 'Explaining why the project deliverable will be delayed by three days.' },
  { id: 'berlin-startup', title: 'Pitching an App Idea', originalLanguage: 'German', availableLanguages: ['German', 'English', 'Swedish'], category: 'Work', role: 'Angel Investor', desc: 'Giving a 60-second elevator pitch for your new tech startup.' },
  { id: 'madrid-colleague', title: 'Covering a Shift', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Portuguese', 'Catalan', 'English'], category: 'Work', role: 'Coworker', desc: 'Asking a colleague to cover your Friday afternoon shift because of a family emergency.' },
  { id: 'hr-complaint', title: 'Filing a Complaint', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'French'], category: 'Work', role: 'HR Representative', desc: 'Reporting a coworker who keeps stealing your labeled lunch from the breakroom fridge.' },
  { id: 'beijing-factory', title: 'Quality Control Issue', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'Cantonese', 'English'], category: 'Work', role: 'Factory Floor Manager', desc: 'Discussing a defect found in the latest batch of manufactured components.' },
  { id: 'milan-design', title: 'Creative Differences', originalLanguage: 'Italian', availableLanguages: ['Italian', 'French', 'English'], category: 'Work', role: 'Art Director', desc: 'Defending your bold design choices against an art director who wants something "safer."' },
  { id: 'seoul-meeting', title: 'Leading a Standup', originalLanguage: 'Korean', availableLanguages: ['Korean', 'Japanese', 'English'], category: 'Work', role: 'Junior Developer', desc: 'Asking your team for status updates and identifying blockers for the week.' },
  { id: 'remote-onboarding', title: 'IT Setup Issue', originalLanguage: 'English', availableLanguages: ['English', 'Hindi', 'German'], category: 'Tech', role: 'Helpdesk Admin', desc: 'Explaining that your corporate VPN credentials are not working on your first day.' },

  // --- INCIDENTS & TROUBLESHOOTING ---
  { id: 'lost-wallet', title: 'Reporting a Stolen Wallet', originalLanguage: 'Spanish', availableLanguages: ['Spanish', 'Italian', 'French'], category: 'Incidents', role: 'Police Officer', desc: 'Filing a police report after your wallet was pickpocketed on the subway.' },
  { id: 'broken-pipe', title: 'Plumbing Emergency', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Incidents', role: 'Plumber', desc: 'Frantically explaining over the phone that a pipe burst and your kitchen is flooding.' },
  { id: 'car-accident', title: 'Fender Bender', originalLanguage: 'French', availableLanguages: ['French', 'Spanish', 'Arabic'], category: 'Incidents', role: 'Other Driver', desc: 'Exchanging insurance info and staying calm after a minor traffic collision.' },
  { id: 'hotel-lockout', title: 'Locked Out Naked', originalLanguage: 'German', availableLanguages: ['German', 'English', 'Dutch'], category: 'Incidents', role: 'Night Manager', desc: 'Explaining you stepped into the hall for ice in a towel and your door locked behind you.' },
  { id: 'tech-support', title: 'The Blue Screen of Death', originalLanguage: 'English', availableLanguages: ['English', 'Hindi', 'Mandarin'], category: 'Tech', role: 'IT Support Agent', desc: 'Trying to explain to IT that your computer crashed during a BIOS update.' },
  { id: 'wrong-food', title: 'Severe Allergy Mix-up', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'English'], category: 'Incidents', role: 'Restaurant Manager', desc: 'Urgently explaining that you were served shellfish despite your explicit allergy warning.' },
  { id: 'lost-child', title: 'Lost at the Mall', originalLanguage: 'Italian', availableLanguages: ['Italian', 'Spanish', 'French'], category: 'Incidents', role: 'Security Guard', desc: 'Providing a physical description of your little brother who wandered off.' },
  { id: 'customs-flag', title: 'Customs Interrogation', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'Russian', 'English'], category: 'Incidents', role: 'Border Agent', desc: 'Explaining why you have six identical laptops in your checked luggage.' },
  { id: 'vet-emergency', title: 'Dog Ate Chocolate', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'Spanish', 'English'], category: 'Incidents', role: 'Veterinarian', desc: 'Rushing into the clinic explaining your dog just ate a large chocolate bar.' },
  { id: 'noise-complaint', title: 'The Loud Neighbor', originalLanguage: 'Russian', availableLanguages: ['Russian', 'Turkish', 'English'], category: 'Incidents', role: 'Upstairs Neighbor', desc: 'Knocking on the ceiling and then going upstairs to ask them to turn the music down at 3 AM.' },

  // --- FUNNY & ABSURD (No Magic/Fantasy) ---
  { id: 'pigeon-fight', title: 'Arguing with a Pigeon', originalLanguage: 'English', availableLanguages: ['English', 'French', 'Italian'], category: 'Funny', role: 'A Very Smart Pigeon', desc: 'Negotiating a peace treaty over the remaining half of your sandwich.' },
  { id: 'gordon-ramsay', title: 'The Raw Risotto', originalLanguage: 'English', availableLanguages: ['English', 'Italian', 'French'], category: 'Funny', role: 'Angry Celebrity Chef', desc: 'Defending your terrible, mushy risotto on a high-stakes cooking reality show.' },
  { id: 'sentient-printer', title: 'The Printer Demands Ink', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Japanese'], category: 'Funny', role: 'Office Printer', desc: 'Pleading with the printer to print your document even though cyan is at 5%.' },
  { id: 'cat-boss', title: 'Performance Review with a Cat', originalLanguage: 'English', availableLanguages: ['English', 'Korean', 'Russian'], category: 'Funny', role: 'Mr. Whiskers (CEO)', desc: 'Explaining your quarterly KPIs to your boss, who happens to be a cat.' },
  { id: 'flat-earther', title: 'The Flat Earther Uber', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'Portuguese'], category: 'Funny', role: 'Uber Driver', desc: 'Trying to politely change the subject while your driver explains the ice wall.' },
  { id: 'gym-bro', title: 'Hovering at the Squat Rack', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Everyday', role: 'Impatient Gym Bro', desc: 'Telling someone you still have 4 sets left and no, they cannot work in.' },
  { id: 'coffee-snob', title: 'The Over-Extraction', originalLanguage: 'English', availableLanguages: ['English', 'Italian', 'French'], category: 'Funny', role: 'Pretentious Barista', desc: 'Complaining that your pour-over tastes sour, leading to a lecture on grind size.' },
  { id: 'mechanic-scam', title: 'Blinker Fluid', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'Arabic'], category: 'Funny', role: 'Shady Mechanic', desc: 'Confronting a mechanic who tried to charge you $200 for "blinker fluid."' },
  { id: 'board-game', title: 'The Rules Lawyer', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Mandarin'], category: 'Everyday', role: 'Competitive Friend', desc: 'Arguing over a highly specific edge-case rule in Settlers of Catan.' },
  { id: 'escape-room', title: 'Stuck on the First Clue', originalLanguage: 'English', availableLanguages: ['English', 'Japanese', 'French'], category: 'Funny', role: 'Game Master (via radio)', desc: 'Asking for a hint because your team has been staring at a padlock for 20 minutes.' },

  // --- POP CULTURE / EASTER EGGS ---
  { id: 'parks-and-rec', title: 'Hardware Store Confidence', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Pop Culture', role: 'Gruff Store Manager', desc: 'Trying to ask for help finding a screw, only to be told "I know more than you."' },
  { id: 'office-space', title: 'The TPS Report', originalLanguage: 'English', availableLanguages: ['English', 'Japanese', 'French'], category: 'Pop Culture', role: 'Micromanaging Boss', desc: 'Explaining that you did, in fact, get the memo about the new cover sheets.' },
  { id: 'matrix-pill', title: 'The Purple Pill', originalLanguage: 'English', availableLanguages: ['English', 'Mandarin', 'Spanish'], category: 'Pop Culture', role: 'Morpheus', desc: 'Refusing both the red and blue pills and asking if he has a grape-flavored one.' },
  { id: 'terminator-clothes', title: 'I Need Your Clothes', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Pop Culture', role: 'Cyborg Assassin', desc: 'Refusing to give up your boots and motorcycle to a naked Austrian bodybuilder.' },
  { id: 'portal-glados', title: 'The Cake is a Lie', originalLanguage: 'English', availableLanguages: ['English', 'Korean', 'Italian'], category: 'Pop Culture', role: 'Passive Aggressive AI', desc: 'Demanding the cake you were promised after finishing a dangerous test chamber.' },

  // --- MISCELLANEOUS REALITY ---
  { id: 'wedding-toast', title: 'The Ruined Toast', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'Hindi'], category: 'Incidents', role: 'Angry Bride', desc: 'Apologizing for bringing up the grooms ex during your best man speech.' },
  { id: 'tattoo-regret', title: 'Cover-up Consultation', originalLanguage: 'English', availableLanguages: ['English', 'Portuguese', 'Japanese'], category: 'Everyday', role: 'Tattoo Artist', desc: 'Asking an artist to cover up a terrible tattoo you got on a dare.' },
  { id: 'karaoke-hog', title: 'Give up the Mic', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'Korean', 'Mandarin', 'English'], category: 'Everyday', role: 'Drunk Salaryman', desc: 'Politely asking a stranger to stop singing and pass the karaoke tablet.' },
  { id: 'spa-mixup', title: 'Wrong Massage', originalLanguage: 'Thai', availableLanguages: ['Thai', 'English', 'Mandarin'], category: 'Incidents', role: 'Masseuse', desc: 'Trying to explain you wanted the relaxing massage, not the deep tissue bone-crusher.' },
  { id: 'vintage-thrifting', title: 'Thrift Store Find', originalLanguage: 'English', availableLanguages: ['English', 'French', 'Italian'], category: 'Shopping', role: 'Cashier', desc: 'Trying to buy a jacket that has no price tag without them marking it up.' },
  { id: 'movie-talker', title: 'The Cinema Chatter', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'German'], category: 'Everyday', role: 'Noisy Moviegoer', desc: 'Politely but firmly asking the person behind you to stop explaining the plot to their friend.' },
  { id: 'parking-ticket', title: 'Arguing a Ticket', originalLanguage: 'English', availableLanguages: ['English', 'French', 'Italian'], category: 'Incidents', role: 'Meter Maid', desc: 'Begging them not to print the ticket because you were only 2 minutes late.' },
  { id: 'bad-haircut', title: 'The Horrible Fade', originalLanguage: 'English', availableLanguages: ['English', 'Turkish', 'Arabic'], category: 'Everyday', role: 'Barber', desc: 'Trying to explain that they cut way too much off the top without hurting their feelings.' },
  { id: 'return-policy', title: 'Returning Used Shoes', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Mandarin'], category: 'Shopping', role: 'Retail Manager', desc: 'Trying to return shoes you clearly wore outside because they "hurt your feet."' },
  { id: 'dietary-restrictions', title: 'The Picky Eater', originalLanguage: 'English', availableLanguages: ['English', 'Italian', 'French'], category: 'Dining', role: 'Exasperated Waiter', desc: 'Ordering a salad but substituting almost every single ingredient.' }
];

type GameState = 'select' | 'chat' | 'review';
type Message = { role: 'user' | 'assistant'; content: string };
type ActiveScenario = { id: string; title: string; language: string; role: string; desc: string };

const shuffleArray = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function Home() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [activeScenario, setActiveScenario] = useState<ActiveScenario | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayScenarios, setDisplayScenarios] = useState(SCENARIOS);
  
  // Track dynamically selected language per scenario card
  const [cardLanguages, setCardLanguages] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Dynamic filter options
  const LANGUAGES = useMemo(() => {
    const allLangs = new Set<string>();
    SCENARIOS.forEach(s => s.availableLanguages.forEach(l => allLangs.add(l)));
    return ['All', ...Array.from(allLangs).sort()];
  }, []);
  
  const CATEGORIES = useMemo(() => ['All', ...Array.from(new Set(SCENARIOS.map(s => s.category))).sort()], []);

  useEffect(() => {
    setDisplayScenarios(shuffleArray(SCENARIOS));
    setIsMounted(true);
  }, []);

  const handleStart = (scenario: typeof SCENARIOS[0]) => {
    const chosenLanguage = cardLanguages[scenario.id] || scenario.originalLanguage;
    setActiveScenario({
      id: scenario.id,
      title: scenario.title,
      language: chosenLanguage,
      role: scenario.role,
      desc: scenario.desc
    });
    setGameState('chat');
  };

  const handleEnd = (messages: Message[]) => {
    setChatHistory(messages);
    setGameState('review');
  };

  const handleReset = () => {
    setChatHistory([]);
    setGameState('select');
  };

  const handleShuffle = () => {
    setDisplayScenarios(shuffleArray(displayScenarios));
  };

  const handleCardLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>, scenarioId: string) => {
    e.stopPropagation(); // Prevent the click from launching the scenario
    setCardLanguages(prev => ({
      ...prev,
      [scenarioId]: e.target.value
    }));
  };

  // Apply filters
  const filteredScenarios = displayScenarios.filter(scenario => {
    const matchesSearch = 
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if the filtered language is in the array of available languages for this scenario
    const matchesLang = selectedLanguageFilter === 'All' || scenario.availableLanguages.includes(selectedLanguageFilter);
    const matchesCat = selectedCategory === 'All' || scenario.category === selectedCategory;
    
    return matchesSearch && matchesLang && matchesCat;
  });

  if (!isMounted) return null;

  return (
    <main className="min-h-screen font-inter bg-gray-50 text-slate-800">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 text-center rounded-b-lg shadow-lg mb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 mb-4 animate-fade-in-up">
            <img src="/images/icon.png" alt="Hizaki Labs Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-indigo-300 object-cover" />
            <h1 className="text-4xl md:text-5xl font-extrabold font-space-grotesk tracking-tight">
              Hizaki Labs: RPG Tutor 🌍
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            Practice real-world language scenarios with AI.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {gameState === 'select' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-space-grotesk relative pb-4">
              Select a Scenario
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded"></span>
            </h2>
            
            {/* Filter Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <input 
                    type="text" 
                    placeholder="Search titles or keywords..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                  <select 
                    value={selectedLanguageFilter}
                    onChange={(e) => setSelectedLanguageFilter(e.target.value)}
                    className="flex-1 md:w-40 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-medium"
                  >
                    {LANGUAGES.map(lang => (
                      <option key={lang} value={lang}>{lang === 'All' ? 'All Languages' : lang}</option>
                    ))}
                  </select>

                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex-1 md:w-40 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-medium"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                    ))}
                  </select>

                  <button 
                    onClick={handleShuffle}
                    className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm whitespace-nowrap"
                  >
                    🔀 Shuffle
                  </button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScenarios.length > 0 ? (
                filteredScenarios.map((scenario) => {
                  const currentLang = cardLanguages[scenario.id] || scenario.originalLanguage;
                  
                  return (
                    <div 
                      key={scenario.id} 
                      onClick={() => handleStart(scenario)}
                      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 cursor-pointer flex flex-col items-center text-center group border border-gray-100 h-full relative"
                    >
                      <div className="flex gap-2 mb-6 w-full justify-center items-center">
                        {/* Dynamic Language Selector */}
                        <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={currentLang}
                            onChange={(e) => handleCardLanguageChange(e, scenario.id)}
                            className={`px-3 py-1 pr-6 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none transition-colors border ${
                              currentLang === 'English' 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100' 
                                : 'bg-indigo-50 border-indigo-200 text-primary hover:bg-indigo-100'
                            }`}
                          >
                            {scenario.availableLanguages.map(lang => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className={`fill-current h-3 w-3 ${currentLang === 'English' ? 'text-emerald-700' : 'text-primary'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                          {scenario.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4 font-space-grotesk group-hover:text-primary transition-colors">
                        {scenario.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow leading-relaxed">{scenario.desc}</p>
                      <div className="mt-8 bg-primary text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md text-sm font-semibold">
                        Start Scenario
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center text-gray-500 py-12 text-lg">
                  No scenarios found matching your filters.
                </div>
              )}
            </div>
          </div>
        )}

        {gameState === 'chat' && activeScenario && (
          <ChatInterface 
            scenario={activeScenario} 
            onEndScenario={handleEnd} 
          />
        )}

        {gameState === 'review' && activeScenario && (
          <FeedbackReport 
            messages={chatHistory} 
            scenario={activeScenario} 
            onReset={handleReset} 
          />
        )}
      </div>
    </main>
  );
}