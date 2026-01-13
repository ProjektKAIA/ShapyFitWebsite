'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

const SCREENSHOTS = [
  { src: '/app-screenshot.webp', alt: 'ShapyFit App - Fitness Tracking Interface' },
  { src: '/app-screenshot-2.webp', alt: 'ShapyFit App - Workout Übersicht' },
  { src: '/app-screenshot-3.webp', alt: 'ShapyFit App - Fortschritt Statistiken' },
];

const AUTO_SLIDE_INTERVAL = 4000;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
  }, [goToNext]);

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      resetInterval();
    }
  };

  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="text-center md:text-left order-2 md:order-1">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          Full Premium • Fully Free
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Alles was du brauchst.
          <br />
          <span className="text-accent">Nichts</span> was du zahlen musst.
        </h1>
        <p className="text-lg text-text-dim mb-10 max-w-lg mx-auto md:mx-0">
          {SITE_CONFIG.description}
        </p>

        <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
          <div className="flex items-center justify-center gap-3 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors">
            <svg className="w-6 sm:w-7 h-6 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Bald erhältlich</div>
              <div className="text-sm sm:text-base font-semibold -mt-0.5">App Store</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors">
            <svg className="w-6 sm:w-7 h-6 sm:h-7" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
              <path fill="#34A853" d="M16.296 15.262L6.5 20.79l9.118-9.118 1.678 1.59z"/>
              <path fill="#FBBC04" d="M20.743 10.907l-2.263 1.283-2.185-2.19 2.185-2.19 2.263 1.283A1.122 1.122 0 0121.5 10.09c0 .38-.19.722-.507.914l-.25-.097z"/>
              <path fill="#EA4335" d="M6.5 3.21l9.796 5.528-1.678 1.59L6.5 3.21z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-400 uppercase tracking-wide">Bald erhältlich</div>
              <div className="text-sm sm:text-base font-semibold -mt-0.5">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[280px] mx-auto md:ml-auto order-1 md:order-2">
        <div className="relative">
          <div
            className="bg-black border-[12px] border-gray-800 rounded-[45px] overflow-hidden shadow-2xl shadow-black/50"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative w-full aspect-[9/19.5]">
              {SCREENSHOTS.map((screenshot, index) => (
                <div
                  key={screenshot.src}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {SCREENSHOTS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  resetInterval();
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Gehe zu Screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
