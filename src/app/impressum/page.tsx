import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum und rechtliche Informationen zu ${SITE_CONFIG.name}`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-8 py-16">
      <Link
        href="/"
        className="text-text-dim hover:text-foreground transition-colors mb-8 inline-block"
      >
        &larr; Zurück zur Startseite
      </Link>

      <h1 className="text-4xl font-extrabold mb-8">Impressum</h1>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-text-dim">
            {/* TODO: Bitte mit echten Daten ersetzen */}
            KAIAShapes<br />
            [Straße und Hausnummer]<br />
            [PLZ] [Stadt]<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="text-text-dim">
            E-Mail: [email@shapyfit.de]<br />
            {/* Telefon: [Telefonnummer] */}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-text-dim">
            [Name des Verantwortlichen]<br />
            [Adresse]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
          <p className="text-text-dim">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr/
          </p>
          <p className="text-text-dim mt-2">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p className="text-text-dim">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
          <p className="text-text-dim">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            unter Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
          <p className="text-text-dim">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
          <p className="text-text-dim">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
