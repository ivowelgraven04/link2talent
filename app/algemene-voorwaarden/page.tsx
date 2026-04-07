import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Link2Talent. Versie 2.0 — 11 november 2025.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#f7f8fa] pt-36 pb-24 min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">
                Juridisch
              </span>
            </div>
            <h1 className="text-[2.4rem] md:text-[3rem] font-bold tracking-tighter leading-[1.06] text-[#09090b] mb-3">
              Algemene voorwaarden
            </h1>
            <p className="text-[#4f4f4f] text-sm">Versie: 2.0 — 11 november 2025</p>
          </div>

          {/* Header info */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#4f4f4f] mb-5">
              {[
                ["Bedrijf", "Link2Talent"],
                ["Adres", "Frederik Hendrikstraat 59H, Amsterdam"],
                ["E-mail", "info@link2talent.nl"],
                ["Telefoon", "+31 85 080 5381"],
                ["KVK", "42025671"],
                ["BTW", "NL003697236B23"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="font-semibold text-[#09090b]">{label}:</span>{" "}
                  {label === "E-mail" ? (
                    <a href="mailto:info@link2talent.nl" className="text-[#007BFF] hover:underline">{value}</a>
                  ) : value}
                </div>
              ))}
            </div>
            <p className="text-[#09090b] font-semibold text-sm">
              Door gebruik te maken van het platform ga je akkoord met deze voorwaarden.
            </p>
          </div>

          {/* Article 1 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">1. Definities</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              {[
                "Link2Talent: het platform dat bedrijven en remote salesprofessionals met elkaar verbindt",
                "Platform: de website en app van Link2Talent",
                "Opdrachtgever: bedrijf dat via het platform salescapaciteit zoekt",
                "Kandidaat: salesprofessional die via het platform werkt",
                "Match: koppeling tussen opdrachtgever en kandidaat",
                "Plaatsing: moment dat kandidaat start met werkzaamheden",
                "Vergoeding: fee, abonnement of marge zoals afgesproken",
                "Overeenkomst: elke samenwerking via het platform",
              ].map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Article 2 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">2. Toepasselijkheid</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p>Deze voorwaarden gelden voor alles wat via Link2Talent loopt.</p>
              <p>Andere voorwaarden van gebruikers zijn niet van toepassing, tenzij dit schriftelijk is afgesproken.</p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">3. Wat wij doen</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Link2Talent is een platform dat bedrijven en salesprofessionals samenbrengt.</p>
              <p className="font-semibold text-[#09090b]">Wij zijn geen werkgever en geen partij in de samenwerking zelf.</p>
              <p>Wij faciliteren:</p>
              <ul className="list-disc pl-5 space-y-1">
                {["Matching","Screening","Communicatie","Contractbeheer","Facturatie"].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p>Aanvullend kunnen we extra diensten aanbieden zoals coaching of analyses.</p>
            </div>
          </div>

          {/* Article 4 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">4. Vergoeding en betaling</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Bij elke plaatsing hoort een vergoeding. Dit kan een abonnement, fee of marge zijn.</p>
              <p className="font-semibold text-[#09090b]">De opdrachtgever betaalt zodra een kandidaat start, ook als dit indirect gebeurt via het platform.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold text-[#09090b]">Betalingstermijn: 14 dagen</span></li>
                <li><span className="font-semibold text-[#09090b]">Te laat betalen betekent rente verschuldigd</span></li>
                <li><span className="font-semibold text-[#09090b]">Alle bedragen zijn exclusief btw</span></li>
              </ul>
            </div>
          </div>

          {/* Article 5 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">5. Samenwerking buiten het platform</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-4">
              <p className="font-semibold text-[#09090b]">Samenwerken buiten Link2Talent om is niet toegestaan als de match via ons is ontstaan.</p>
              <p className="font-semibold text-[#09090b]">Dit geldt voor zowel opdrachtgever als kandidaat. Ook via andere constructies of partijen.</p>
              <div>
                <p className="font-semibold text-[#09090b] mb-2">Relatiebescherming</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="font-semibold text-[#09090b]">Kandidaten mogen niet direct voor klanten van opdrachtgever werken zonder toestemming</li>
                  <li className="font-semibold text-[#09090b]">Opdrachtgevers mogen kandidaten niet buiten het platform inzetten</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#09090b] mb-2">Boete</p>
                <p>Bij overtreding:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-semibold text-[#09090b]">€5.000 per overtreding</span></li>
                  <li><span className="font-semibold text-[#09090b]">€250 per dag zolang dit doorgaat</span></li>
                </ul>
              </div>
              <p className="font-semibold text-[#09090b]">Als de schade hoger is, kan deze extra worden verhaald.</p>
              <p className="font-semibold text-[#09090b]">Deze regels blijven gelden tijdens de samenwerking en tot 12 maanden daarna.</p>
            </div>
          </div>

          {/* Article 6 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">6. Gedrag en reputatie</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Gebruik het platform normaal en professioneel.</p>
              <p>Niet toegestaan:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="font-semibold text-[#09090b]">Negatief spreken over Link2Talent richting anderen</li>
                <li className="font-semibold text-[#09090b]">Andere gebruikers benadelen</li>
                <li className="font-semibold text-[#09090b]">Relaties verstoren</li>
              </ul>
              <p className="font-semibold text-[#09090b]">Overtreding leidt tot een boete van €5.000 per geval.</p>
            </div>
          </div>

          {/* Article 7 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">7. Gebruik van het platform</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <ul className="list-disc pl-5 space-y-1">
                <li className="font-semibold text-[#09090b]">Gegevens moeten kloppen en up-to-date zijn</li>
                <li className="font-semibold text-[#09090b]">Accounts zijn persoonlijk</li>
                <li className="font-semibold text-[#09090b]">Misbruik of fraude leidt tot directe blokkering</li>
              </ul>
              <p className="font-semibold text-[#09090b]">Wij mogen accounts verwijderen bij overtreding.</p>
            </div>
          </div>

          {/* Article 8 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">8. Aansprakelijkheid</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Wij zijn niet verantwoordelijk voor afspraken tussen opdrachtgever en kandidaat.</p>
              <p className="font-semibold text-[#09090b]">Alleen bij grove fouten van onze kant kan er sprake zijn van aansprakelijkheid.</p>
              <p className="font-semibold text-[#09090b]">Maximaal tot het bedrag van de factuur van die maand.</p>
              <p>Wij zijn niet verantwoordelijk voor:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="font-semibold text-[#09090b]">Kwaliteit van werk</li>
                <li className="font-semibold text-[#09090b]">Resultaten</li>
                <li className="font-semibold text-[#09090b]">Continuïteit</li>
              </ul>
            </div>
          </div>

          {/* Article 9 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">9. Intellectueel eigendom</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Alles op het platform blijft eigendom van Link2Talent.</p>
              <p className="font-semibold text-[#09090b]">Je mag niets kopiëren of gebruiken zonder toestemming.</p>
            </div>
          </div>

          {/* Article 10 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">10. Privacy</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Wij verwerken gegevens volgens de wet.</p>
              <p className="font-semibold text-[#09090b]">
                Zie het{" "}
                <a href="/privacy" className="text-[#007BFF] hover:underline">
                  privacybeleid
                </a>{" "}
                voor details.
              </p>
              <p className="font-semibold text-[#09090b]">Door gebruik te maken van het platform ga je hiermee akkoord.</p>
            </div>
          </div>

          {/* Article 11 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">11. Duur en beëindiging</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">De samenwerking loopt door totdat deze wordt opgezegd.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="font-semibold text-[#09090b]">Opzegtermijn: 30 dagen</li>
                <li className="font-semibold text-[#09090b]">Bij misbruik of wanbetaling kunnen we direct stoppen</li>
              </ul>
            </div>
          </div>

          {/* Article 12 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">12. Recht en geschillen</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Nederlands recht is van toepassing.</p>
              <p className="font-semibold text-[#09090b]">Geschillen lopen via de rechter in Amsterdam.</p>
            </div>
          </div>

          {/* Article 13 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">13. Tot slot</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-3">
              <p className="font-semibold text-[#09090b]">Als een onderdeel ongeldig blijkt, blijft de rest geldig.</p>
              <p className="font-semibold text-[#09090b]">We mogen deze voorwaarden aanpassen. De laatste versie staat altijd op de website.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
