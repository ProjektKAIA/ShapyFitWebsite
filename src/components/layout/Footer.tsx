import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'instagram':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDC80" />
              <stop offset="25%" stopColor="#F77737" />
              <stop offset="50%" stopColor="#E1306C" />
              <stop offset="75%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#833AB4" />
            </linearGradient>
          </defs>
          <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="#25F4EE" d="M9.37 9.4v3.5a2.93 2.93 0 0 0-.88-.13 2.89 2.89 0 1 0 2.89 2.9V2h3.45v.44a4.83 4.83 0 0 0 3.77 4.25v3.4a8.16 8.16 0 0 1-4.77-1.52v7a6.34 6.34 0 1 1-6.34-6.34 6.84 6.84 0 0 1 1.88.17z"/>
          <path fill="#FE2C55" d="M10.55 8.23v4.67a2.93 2.93 0 0 0-.88-.13 2.89 2.89 0 1 0 2.89 2.9V.83h3.45v.44a4.83 4.83 0 0 0 3.77 4.25v3.4a8.16 8.16 0 0 1-4.77-1.52v7a6.34 6.34 0 1 1-6.34-6.34 6.84 6.84 0 0 1 1.88.17z"/>
        </svg>
      );
    default:
      return null;
  }
};

export function Footer() {
  return (
    <footer className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-t border-border mt-12 sm:mt-16 text-center">
      <div className="flex justify-center gap-8 mb-8">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <SocialIcon icon={link.icon} />
          </a>
        ))}
      </div>

      <nav className="flex flex-wrap justify-center gap-5 mb-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text-dim text-sm hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${SITE_CONFIG.adsEmail}`}
          className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Werbeanfragen
        </a>
      </nav>

      <p className="text-text-dim text-sm opacity-60 mb-6">
        &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. Alle Rechte vorbehalten.
      </p>

      <p className="text-text-dim text-sm">
        Designed by{' '}
        <a
          href={SITE_CONFIG.brandUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline"
        >
          {SITE_CONFIG.brand} Web und App Agentur
        </a>
      </p>
    </footer>
  );
}
