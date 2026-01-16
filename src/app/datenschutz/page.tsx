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
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-4">Datenerfassung auf dieser Website</h3>
          <p className="text-text-dim">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Abschnitt &quot;Verantwortliche Stelle&quot; in dieser Datenschutzerklärung entnehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Verantwortliche Stelle</h2>
          <p className="text-text-dim">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="text-text-dim mt-4">
            KAIA by Kantarevic &amp; Bastong GbR<br />
            Amel Kantarevic, Marie Julie Bastong<br />
            Effertzfeld 10<br />
            41564 Kaarst
          </p>
          <p className="text-text-dim mt-4">
            Telefon: +49 176 66816778<br />
            E-Mail: info@kaiashapes.de
          </p>
          <p className="text-text-dim mt-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Hosting</h2>
          <p className="text-text-dim">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-4">Vercel Inc.</h3>
          <p className="text-text-dim">
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            USA
          </p>
          <p className="text-text-dim mt-4">
            Vercel ist ein Dienst, mit dem Websites gehostet werden können. Wenn Sie unsere Website besuchen,
            erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der
            Datenschutzerklärung von Vercel:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
          <p className="text-text-dim mt-4">
            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
            berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. ShapyFit App - Privacy First</h2>
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
          <h2 className="text-2xl font-bold mb-4">5. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-semibold mb-2">Cookies</h3>
          <p className="text-text-dim">
            Diese Website verwendet ausschließlich technisch notwendige Cookies für die Theme-Einstellung
            (Hell-/Dunkelmodus). Es werden keine Tracking-Cookies oder Cookies von Drittanbietern verwendet.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-4">Server-Log-Dateien</h3>
          <p className="text-text-dim">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien:
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
          <h2 className="text-2xl font-bold mb-4">6. Ihre Rechte</h2>
          <p className="text-text-dim">
            Sie haben jederzeit das Recht:
          </p>
          <ul className="list-disc list-inside text-text-dim mt-2 space-y-1">
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
            <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>Einschränkung der Datenverarbeitung zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
            <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
          <p className="text-text-dim">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
            SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
            des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Externe Links</h2>
          <p className="text-text-dim">
            Diese Website enthält Links zu externen Websites (z.B. App Stores, Social Media). Beim Klicken auf diese Links verlassen
            Sie unsere Website und es gelten die Datenschutzbestimmungen der jeweiligen externen Anbieter.
          </p>
        </section>

        <p className="text-text-dim text-sm mt-8">
          Stand: Januar {SITE_CONFIG.year}
        </p>
      </div>
    </div>
  );
}
