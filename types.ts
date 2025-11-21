export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
}

export interface SidebarItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ContactFormState {
  name: string;
  contact: string;
  message: string;
}

export enum ViewState {
  HOME = 'HOME',
  MENU = 'MENU',
  ABOUT = 'ABOUT',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT',
}