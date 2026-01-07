import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({ href, children, external = false, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
}
