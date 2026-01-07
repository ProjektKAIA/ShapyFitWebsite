import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SITE_CONFIG } from '@/lib/constants';

export function Header() {
  return (
    <header className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-6 sm:py-8 flex justify-between items-center border-b border-gray-200/20 dark:border-gray-700/30">
      <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity">
        {SITE_CONFIG.name.toUpperCase()}
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold px-4 py-2 border border-border rounded-full uppercase tracking-wider hidden sm:inline-block">
          {SITE_CONFIG.brand}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
