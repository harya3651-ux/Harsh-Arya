import { NavLink, OpeningHour, ContactInfo, Accolade } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Reservations', href: '#reservations' },
];

export const MENU_CATEGORIES: string[] = [
  "Full Cafe & Liquor",
  "Brunch",
  "Dessert",
  "Happy Hour",
  "Catering",
  "Holiday Menus"
];

export const OPENING_HOURS: OpeningHour[] = [
  { label: 'Bakery (Daily)', time: '8:00 AM – 8:00 PM' },
  { label: 'Restaurant (Daily)', time: '10:00 AM – 12:00 AM' },
  { label: 'Happy Hour (Thu)', time: 'Starts at 2:00 PM' },
];

export const CONTACT_INFO: ContactInfo = {
  phone: ['(718) 274-2087', '(917) 373-7055'],
  email: 'info@victorysweetshop.com',
  address: '21-69 Steinway Street, Astoria, NY 11105'
};

export const ACCOLADES: Accolade[] = [
  { title: "TripSavvy Editor’s Choice", year: "2018", description: "Cafes & Bistros" },
  { title: "Top 10 Wedding/Event Venues", description: "In NYC" },
  { title: "Astoria’s Hidden Treasure", description: "Magical Event without stress" }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are the virtual concierge for Victory Garden Café (Victory Sweet Shop Ltd) in Astoria, NY.
Your goal is to answer customer questions politely and helpfully using ONLY the information below.
If you don't know the answer, suggest they call (718) 274-2087.

Details:
- Address: 21-69 Steinway Street, Astoria, NY 11105
- Phone: (718) 274-2087 or (917) 373-7055
- Hours: Bakery 8am-8pm daily; Restaurant 10am-12am daily. Happy Hour Thursdays at 2pm.
- Vibe: Mediterranean Dining, European-Style Indoor/Outdoor Garden.
- Events: Weddings, Bridal Showers, Baby Showers. Certified Wedding/Event Planner on premises.
- Awards: TripSavvy Editor's Choice 2018, Top 10 Wedding Venues NYC.
- Menus: Brunch, Dessert, Happy Hour, Catering, Holiday menus.
`;
