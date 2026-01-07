export const SITE_CONFIG = {
  name: 'ShapyFit',
  title: 'ShapyFit | Full Premium Free',
  description: 'Importiere deine GPT-Trainingspläne mit einem Klick oder erstelle Profi-Workouts direkt in der App. Komplett kostenlos.',
  url: 'https://shapyfit.de',
  locale: 'de_DE',
  brand: 'KAIASHAPES',
  brandUrl: 'https://kaiashapes.de',
  tiktok: 'https://tiktok.com/@shapyfit.app',
  instagram: 'https://instagram.com/shapyfit.app',
  youtube: 'https://youtube.com/@shapyfit',
  supportEmail: 'info@shapyfit.de',
  adsEmail: 'info@shapyfit.de',
  year: new Date().getFullYear(),
} as const;

export const FEATURES = [
  {
    id: 'health-sync',
    icon: 'health-sync',
    title: 'Health Sync',
    description: 'Nahtlose Verbindung mit Apple Health oder Google Fit. Deine Daten, ein Ort.',
  },
  {
    id: 'free',
    icon: 'medal',
    title: '100% Free',
    description: 'Alle Premium-Features sind dauerhaft kostenlos. Keine versteckten Abos oder lästige In-App-Käufe.',
  },
  {
    id: 'gpt-import',
    icon: 'chatgpt',
    title: 'GPT-Import',
    description: 'Kopiere deinen Plan von ChatGPT einfach in die App. Unser System erkennt Übungen und Sätze sofort.',
  },
  {
    id: 'supp-guide',
    icon: 'pills',
    title: 'Supp-Guide',
    description: 'Umfangreiche Datenbank mit Erklärungen zu Supplements, deren Wirkung und wissenschaftlicher Anwendung.',
  },
  {
    id: 'dezente-ads',
    icon: 'eye-slash',
    title: 'Dezente Ads',
    description: 'Nur Sport-Content. Keine Pop-ups. Native Integration in dein Dashboard ohne jegliche Störung.',
  },
  {
    id: 'multi-sport',
    icon: 'multi-sport',
    title: 'Deine Sportart',
    description: 'Gym, Yoga, Radfahren, Laufen oder Calisthenics – eine App für alle deine Trainingsformen.',
  },
] as const;

export const NAV_LINKS = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
] as const;

export const SOCIAL_LINKS = [
  { id: 'instagram', icon: 'instagram', href: 'https://instagram.com/shapyfit.app' },
  { id: 'tiktok', icon: 'tiktok', href: 'https://tiktok.com/@shapyfit.app' },
] as const;
