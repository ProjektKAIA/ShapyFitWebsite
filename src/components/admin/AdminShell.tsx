// /workspaces/claude-workspace/shapyfit/src/components/admin/AdminShell.tsx
'use client';

import { AuthGuard } from './AuthGuard';
import { Sidebar } from './Sidebar';

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </AuthGuard>
  );
}
