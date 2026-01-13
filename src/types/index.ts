export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Discipline {
  id: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export type AdPosition = 'hero' | 'features' | 'footer';

export interface Ad {
  id: string;
  title: string;
  imageUrl: string;
  targetUrl: string;
  position: AdPosition;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
