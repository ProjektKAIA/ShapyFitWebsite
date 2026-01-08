import { FEATURES } from '@/lib/constants';

const FeatureIcon = ({ icon }: { icon: string }) => {
  const iconClass = "w-7 h-7 text-accent mb-4";

  switch (icon) {
    case 'health-sync':
      return (
        <div className="flex items-center gap-2 mb-4">
          {/* Apple Health */}
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3Z" fill="#FF2D55"/>
          </svg>
          {/* Google Fit */}
          <svg className="w-7 h-7" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 2C10.34 2 9 3.34 9 5v6.26l-3.45-3.45c-1.17-1.17-3.07-1.17-4.24 0s-1.17 3.07 0 4.24L12 22.74l10.69-10.69c1.17-1.17 1.17-3.07 0-4.24s-3.07-1.17-4.24 0L15 11.26V5c0-1.66-1.34-3-3-3z"/>
            <path fill="#4285F4" d="M12 2c1.66 0 3 1.34 3 3v6.26l3.45-3.45c1.17-1.17 3.07-1.17 4.24 0"/>
            <path fill="#34A853" d="M12 22.74L1.31 12.05c-1.17-1.17-1.17-3.07 0-4.24"/>
            <path fill="#FBBC04" d="M12 22.74l10.69-10.69"/>
          </svg>
        </div>
      );
    case 'chatgpt':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      );
    case 'pills':
      return (
        <svg className="w-7 h-7 mb-4" viewBox="0 0 576 512">
          <path fill="#10B981" d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM64 368c0 26.5 21.5 48 48 48s48-21.5 48-48V288H64v80zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144z"/>
          <path fill="#F59E0B" d="M554.8 316.8l-99.5-99.5c-44.1-44.1-115.6-44.1-159.7 0s-44.1 115.6 0 159.7l99.5 99.5c44.1 44.1 115.6 44.1 159.7 0s44.1-115.6 0-159.7zm-241 79.5l-45.3-45.3 79.5-79.5 45.3 45.3-79.5 79.5z"/>
        </svg>
      );
    case 'eye-slash':
      return (
        <svg className="w-7 h-7 mb-4" viewBox="0 0 640 512">
          <path fill="#8B5CF6" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-14.1 8-29.5 8-45.5c0-53-43-96-96-96c-11.5 0-22.5 2-32.7 5.7l-64.2-50.2zM373 389.9l-60.6-47.5c-3.8 .5-7.7 .6-11.4 .6c-53 0-96-43-96-96c0-13.2 2.7-25.8 7.5-37.3L129.6 225.4c-16.9 20.4-30.9 42.6-42.4 64.3c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C227 489.2 291.8 526 373 502.5c1.9-.5 3.8-1.1 5.6-1.8l-5.6-110.8z"/>
        </svg>
      );
    case 'medal':
      return (
        <svg className="w-7 h-7 mb-4" viewBox="0 0 512 512">
          <path fill="#FBBF24" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6z"/>
          <path fill="#F59E0B" d="M80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
        </svg>
      );
    case 'multi-sport':
      return (
        <div className="flex items-center gap-1.5 mb-4">
          {/* Dumbbell */}
          <svg className="w-5 h-5" viewBox="0 0 640 512" fill="#EF4444">
            <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224h256V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288H192V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V64z"/>
          </svg>
          {/* Bike */}
          <svg className="w-5 h-5" viewBox="0 0 640 512" fill="#3B82F6">
            <path d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM128 256a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm384-192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
          </svg>
          {/* Yoga */}
          <svg className="w-5 h-5" viewBox="0 0 640 512" fill="#10B981">
            <path d="M352 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0zM175.9 160.9c-13.5-13.5-35.4-13.5-48.9 0s-13.5 35.4 0 48.9l88.5 88.5L175 416H48c-26.5 0-48 21.5-48 48s21.5 48 48 48H208c17.3 0 33.4-9.4 41.8-24.5l35.5-64 72 86.4c11.6 13.9 32.4 15.8 46.3 4.2s15.8-32.4 4.2-46.3l-102.4-122.9 18.5-33.3 62.1 62.1c9 9 21.2 14.1 33.9 14.1H528c26.5 0 48-21.5 48-48s-21.5-48-48-48H441l-80-80z"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export function Features() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
      {/* Privacy Block */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-green-500/5 border border-green-500/20 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 512 512">
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-green-400">Deine Daten bleiben Deine</h3>
            <p className="text-text-dim leading-relaxed text-sm">
              Wir speichern keine personenbezogenen Daten und laden deine Daten auch nicht in die Cloud – außer du aktivierst es ganz bewusst selbst. Wir bevorzugen es, deine Daten lokal auf deinem Gerät zu speichern. Das bedeutet: <strong className="text-foreground">keine Hosting-Kosten, weniger Server, weniger Kosten, weniger Umweltbelastung</strong> – und deine Daten gehören nur dir.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {FEATURES.map((feature) => (
          <article
            key={feature.id}
            className="bg-card-bg p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border backdrop-blur-sm hover:border-accent/50 transition-colors"
          >
            <FeatureIcon icon={feature.icon} />
            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>
            <p className="text-text-dim leading-relaxed">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
