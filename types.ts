export interface NavLink {
  label: string;
  href: string;
}

export interface OpeningHour {
  label: string;
  time: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
}

export interface Accolade {
  title: string;
  year?: string;
  description?: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
}