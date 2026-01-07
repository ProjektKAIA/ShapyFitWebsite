import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: `Datenschutzerklärung von ${SITE_CONFIG.name} - Informationen zum Umgang mit Ihren Daten`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-8 py-16">
      <Link
        href="/"
        className="text-text-dim hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Zurück zur Startseite
      </Link>

      <h1 className="text-4xl font-extrabold mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
          <p className="text-text-dim">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
          <p className="text-text-dim">
            Diese Website wird bei Vercel Inc. gehostet. Vercel kann beim Besuch dieser Website automatisch
            Informationen in Server-Logfiles speichern, die Ihr Browser automatisch übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-text-dim mt-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. ShapyFit App - Privacy First</h2>
          <p className="text-text-dim">
            Die ShapyFit App wurde nach dem Prinzip &quot;Privacy First&quot; entwickelt:
          </p>
          <ul className="list-disc list-inside text-text-dim mt-2 space-y-1">
            <li>Alle Ihre Trainingsdaten werden ausschließlich lokal auf Ihrem Gerät gespeichert</li>
            <li>Es werden keine Benutzerkonten benötigt</li>
            <li>Es findet kein Tracking durch Drittanbieter statt</li>
            <li>Ihre Daten werden nicht an Server übertragen</li>
            <li>Sie haben volle Kontrolle über Ihre Daten</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Ihre Rechte</h2>
          <p className="text-text-dim">
            Sie haben jederzeit das Recht:
          </p>
          <ul className="list-disc list-inside text-text-dim mt-2 space-y-1">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Löschung Ihrer Daten zu verlangen</li>
            <li>Einschränkung der Verarbeitung zu verlangen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
            <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Kontakt</h2>
          <p className="text-text-dim">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
            Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
          </p>
          <p className="text-text-dim mt-4">
            {/* TODO: Mit echten Kontaktdaten ersetzen */}
            KAIAShapes<br />
            E-Mail: [email@shapyfit.de]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
          <p className="text-text-dim">
            Diese Website verwendet ausschließlich technisch notwendige Cookies für die Theme-Einstellung
            (Hell-/Dunkelmodus). Es werden keine Tracking-Cookies oder Cookies von Drittanbietern verwendet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Externe Links</h2>
          <p className="text-text-dim">
            Diese Website enthält Links zu externen Websites (z.B. TikTok). Beim Klicken auf diese Links verlassen
            Sie unsere Website und es gelten die Datenschutzbestimmungen der jeweiligen externen Anbieter.
          </p>
        </section>

        <p className="text-text-dim text-sm mt-8">
          Stand: {SITE_CONFIG.year}
        </p>
      </div>
    </div>
  );
}
