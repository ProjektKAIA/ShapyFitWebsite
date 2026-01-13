// /workspaces/claude-workspace/shapyfit/src/app/admin/ads/new/page.tsx
'use client';

import { AdminShell, AdForm } from '@/components/admin';

export default function NewAdPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Neue Anzeige erstellen</h1>
          <p className="text-text-dim">Füge eine neue Werbeanzeige hinzu</p>
        </div>

        <div className="bg-card-bg rounded-2xl p-6 border border-border">
          <AdForm />
        </div>
      </div>
    </AdminShell>
  );
}
