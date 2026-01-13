// /workspaces/claude-workspace/shapyfit/src/app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { AdminShell } from '@/components/admin';

interface Stats {
  totalAds: number;
  activeAds: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({ totalAds: 0, activeAds: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const adsRef = collection(db, 'ads');
        const allAdsSnapshot = await getDocs(adsRef);
        const activeAdsQuery = query(adsRef, where('isActive', '==', true));
        const activeAdsSnapshot = await getDocs(activeAdsQuery);

        setStats({
          totalAds: allAdsSnapshot.size,
          activeAds: activeAdsSnapshot.size,
        });
      } catch (error) {
        console.error('[AdminDashboard]: Error fetching stats', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <AdminShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-text-dim">Übersicht über deine Werbeanzeigen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            label="Gesamt Anzeigen"
            value={isLoading ? '-' : stats.totalAds}
          />
          <StatCard
            label="Aktive Anzeigen"
            value={isLoading ? '-' : stats.activeAds}
          />
          <StatCard
            label="Inaktive Anzeigen"
            value={isLoading ? '-' : stats.totalAds - stats.activeAds}
          />
        </div>

        <div className="bg-card-bg rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Schnellaktionen
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/ads/new"
              className="px-4 py-2 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              + Neue Anzeige erstellen
            </Link>
            <Link
              href="/admin/ads"
              className="px-4 py-2 bg-background border border-border text-foreground rounded-xl font-medium hover:bg-card-bg transition-colors"
            >
              Alle Anzeigen anzeigen
            </Link>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-card-bg rounded-2xl p-6 border border-border">
      <p className="text-sm text-text-dim mb-1">{label}</p>
      <p className="text-3xl font-bold text-foreground">{value}</p>
    </div>
  );
}
