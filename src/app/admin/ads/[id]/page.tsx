// /workspaces/claude-workspace/shapyfit/src/app/admin/ads/[id]/page.tsx
'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { AdminShell, AdForm } from '@/components/admin';
import type { Ad } from '@/types';

export default function EditAdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [ad, setAd] = useState<Ad | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAd() {
      try {
        const adRef = doc(db, 'ads', id);
        const adSnap = await getDoc(adRef);

        if (adSnap.exists()) {
          setAd({
            id: adSnap.id,
            ...adSnap.data(),
            createdAt: adSnap.data().createdAt?.toDate(),
            updatedAt: adSnap.data().updatedAt?.toDate(),
          } as Ad);
        } else {
          router.push('/admin/ads');
        }
      } catch (error) {
        console.error('[EditAd]: Error fetching ad', error);
        router.push('/admin/ads');
      } finally {
        setIsLoading(false);
      }
    }

    fetchAd();
  }, [id, router]);

  if (isLoading) {
    return (
      <AdminShell>
        <div className="text-center py-12 text-text-dim">Laden...</div>
      </AdminShell>
    );
  }

  if (!ad) {
    return null;
  }

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Anzeige bearbeiten</h1>
          <p className="text-text-dim">Bearbeite &quot;{ad.title}&quot;</p>
        </div>

        <div className="bg-card-bg rounded-2xl p-6 border border-border">
          <AdForm ad={ad} />
        </div>
      </div>
    </AdminShell>
  );
}
