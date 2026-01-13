// /workspaces/claude-workspace/shapyfit/src/components/admin/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/ads', label: 'Werbeanzeigen', icon: '📢' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <aside className="w-64 min-h-screen bg-card-bg border-r border-border p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-foreground">ShapyFit</h1>
        <p className="text-sm text-text-dim">Admin Panel</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/admin' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:bg-background'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-border">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-background transition-colors w-full"
        >
          <span>🚪</span>
          <span>Abmelden</span>
        </button>
      </div>
    </aside>
  );
}
