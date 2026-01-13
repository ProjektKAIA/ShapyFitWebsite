// /workspaces/claude-workspace/shapyfit/src/components/admin/AdForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ImageUpload } from './ImageUpload';
import type { Ad, AdPosition } from '@/types';

interface AdFormProps {
  ad?: Ad;
}

const POSITIONS: { value: AdPosition; label: string }[] = [
  { value: 'hero', label: 'Hero-Bereich' },
  { value: 'features', label: 'Features-Bereich' },
  { value: 'footer', label: 'Footer-Bereich' },
];

export function AdForm({ ad }: AdFormProps) {
  const router = useRouter();
  const isEditing = !!ad;

  const [title, setTitle] = useState(ad?.title || '');
  const [imageUrl, setImageUrl] = useState(ad?.imageUrl || '');
  const [targetUrl, setTargetUrl] = useState(ad?.targetUrl || '');
  const [position, setPosition] = useState<AdPosition>(ad?.position || 'hero');
  const [isActive, setIsActive] = useState(ad?.isActive ?? true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Titel ist erforderlich');
      return;
    }

    if (!imageUrl) {
      setError('Bild ist erforderlich');
      return;
    }

    if (!targetUrl.trim()) {
      setError('Ziel-URL ist erforderlich');
      return;
    }

    setIsSubmitting(true);

    try {
      const adData = {
        title: title.trim(),
        imageUrl,
        targetUrl: targetUrl.trim(),
        position,
        isActive,
        updatedAt: new Date(),
      };

      if (isEditing && ad) {
        const adRef = doc(db, 'ads', ad.id);
        await updateDoc(adRef, adData);
      } else {
        await addDoc(collection(db, 'ads'), {
          ...adData,
          createdAt: new Date(),
        });
      }

      router.push('/admin/ads');
    } catch (err) {
      console.error('[AdForm]: Error saving ad', err);
      setError('Fehler beim Speichern');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-text-dim mb-2">
          Titel (intern)
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="z.B. Protein-Shake Kampagne Q1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-dim mb-2">
          Werbebild
        </label>
        <ImageUpload value={imageUrl} onChange={setImageUrl} />
      </div>

      <div>
        <label htmlFor="targetUrl" className="block text-sm font-medium text-text-dim mb-2">
          Ziel-URL (bei Klick)
        </label>
        <input
          id="targetUrl"
          type="url"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="https://example.com/landing-page"
        />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-medium text-text-dim mb-2">
          Position auf der Website
        </label>
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value as AdPosition)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {POSITIONS.map((pos) => (
            <option key={pos.value} value={pos.value}>
              {pos.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="isActive"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="w-5 h-5 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="isActive" className="text-sm text-foreground">
          Anzeige ist aktiv
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex items-center gap-3 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? 'Speichern...' : isEditing ? 'Änderungen speichern' : 'Anzeige erstellen'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 bg-background border border-border text-foreground font-medium rounded-xl hover:bg-card-bg transition-colors"
        >
          Abbrechen
        </button>
      </div>
    </form>
  );
}
