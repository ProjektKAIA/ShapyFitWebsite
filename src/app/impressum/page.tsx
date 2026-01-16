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
          <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 DDG</h2>
          <p className="text-text-dim">
            KAIA by Kantarevic &amp; Bastong GbR<br />
            Effertzfeld 10<br />
            41564 Kaarst<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Vertreten durch</h2>
          <p className="text-text-dim">
            Amel Kantarevic<br />
            Marie Julie Bastong
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p className="text-text-dim">
            Telefon: +49 176 66816778<br />
            E-Mail: info@kaiashapes.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
          <p className="text-text-dim">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: beantragt
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
          <p className="text-text-dim">
            Zuständiges Registergericht: Amtsgericht Neuss
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
          <p className="text-text-dim">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
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
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-text-dim mt-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
          <p className="text-text-dim">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p className="text-text-dim mt-4">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
          <p className="text-text-dim">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="text-text-dim mt-4">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
}
