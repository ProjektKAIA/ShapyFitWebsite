// /workspaces/claude-workspace/shapyfit/src/app/admin/ads/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, doc, updateDoc, deleteDoc, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { AdminShell } from '@/components/admin';
import type { Ad } from '@/types';

export default function AdsListPage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAds = async () => {
    try {
      const adsRef = collection(db, 'ads');
      const q = query(adsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const adsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as Ad[];
      setAds(adsData);
    } catch (error) {
      console.error('[AdsList]: Error fetching ads', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleToggleActive = async (ad: Ad) => {
    try {
      const adRef = doc(db, 'ads', ad.id);
      await updateDoc(adRef, {
        isActive: !ad.isActive,
        updatedAt: new Date(),
      });
      await fetchAds();
    } catch (error) {
      console.error('[AdsList]: Error toggling ad', error);
    }
  };

  const handleDelete = async (ad: Ad) => {
    if (!confirm(`Anzeige "${ad.title}" wirklich löschen?`)) return;

    try {
      const adRef = doc(db, 'ads', ad.id);
      await deleteDoc(adRef);
      await fetchAds();
    } catch (error) {
      console.error('[AdsList]: Error deleting ad', error);
    }
  };

  const getPositionLabel = (position: string) => {
    const labels: Record<string, string> = {
      hero: 'Hero-Bereich',
      features: 'Features-Bereich',
      footer: 'Footer-Bereich',
    };
    return labels[position] || position;
  };

  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Werbeanzeigen</h1>
            <p className="text-text-dim">Verwalte deine Werbeanzeigen</p>
          </div>
          <Link
            href="/admin/ads/new"
            className="px-4 py-2 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            + Neue Anzeige
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-text-dim">Laden...</div>
        ) : ads.length === 0 ? (
          <div className="bg-card-bg rounded-2xl p-12 border border-border text-center">
            <p className="text-text-dim mb-4">Noch keine Werbeanzeigen vorhanden</p>
            <Link
              href="/admin/ads/new"
              className="text-accent underline hover:no-underline"
            >
              Erste Anzeige erstellen
            </Link>
          </div>
        ) : (
          <div className="bg-card-bg rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-text-dim">Vorschau</th>
                  <th className="text-left p-4 text-sm font-medium text-text-dim">Titel</th>
                  <th className="text-left p-4 text-sm font-medium text-text-dim">Position</th>
                  <th className="text-left p-4 text-sm font-medium text-text-dim">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-text-dim">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad.id} className="border-b border-border last:border-b-0">
                    <td className="p-4">
                      {ad.imageUrl ? (
                        <img
                          src={ad.imageUrl}
                          alt={ad.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center text-text-dim">
                          —
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">{ad.title}</p>
                      <p className="text-sm text-text-dim truncate max-w-xs">{ad.targetUrl}</p>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-background rounded-lg text-sm text-foreground">
                        {getPositionLabel(ad.position)}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleActive(ad)}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          ad.isActive
                            ? 'bg-green-500/20 text-green-600'
                            : 'bg-red-500/20 text-red-600'
                        }`}
                      >
                        {ad.isActive ? 'Aktiv' : 'Inaktiv'}
                      </button>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/ads/${ad.id}`}
                          className="px-3 py-1 bg-background border border-border rounded-lg text-sm text-foreground hover:bg-card-bg transition-colors"
                        >
                          Bearbeiten
                        </Link>
                        <button
                          onClick={() => handleDelete(ad)}
                          className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-600 hover:bg-red-500/20 transition-colors"
                        >
                          Löschen
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
