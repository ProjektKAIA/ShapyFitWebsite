import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
};

export default function NotFound() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-8 py-32 text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl text-text-dim mb-8">
        Diese Seite wurde nicht gefunden.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold transition-transform hover:scale-105"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
