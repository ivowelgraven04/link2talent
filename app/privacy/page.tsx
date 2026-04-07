import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Link2Talent. Wij gaan zorgvuldig om met jouw gegevens.",
};

const sections = [
  {
    title: "1. Wie wij zijn",
    body: "Link2Talent\nFrederik Hendrikstraat 59H, Amsterdam\ninfo@link2talent.nl\n\nWij verbinden bedrijven en salesprofessionals via ons platform.",
  },
];

export default function PrivacyPage() {
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
              Privacybeleid
            </h1>
            <p className="text-[#4f4f4f] text-sm">
              Laatst bijgewerkt: 11 november 2025
            </p>
          </div>

          <div
            className="rounded-2xl p-8 mb-4"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed font-medium">
              Wij gaan zorgvuldig om met jouw gegevens. Hier zie je wat we
              verzamelen en waarom.
            </p>
          </div>

          {/* Section 1 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">1. Wie wij zijn</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-2">
              <p>Link2Talent</p>
              <p>Frederik Hendrikstraat 59H, Amsterdam</p>
              <p><a href="mailto:info@link2talent.nl" className="text-[#007BFF] hover:underline">info@link2talent.nl</a></p>
              <p className="pt-2">Wij verbinden bedrijven en salesprofessionals via ons platform.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">2. Welke gegevens we verzamelen</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-4">
              <div>
                <p className="font-semibold text-[#09090b] mb-2">Kandidaten</p>
                <ul className="list-disc pl-5 space-y-1">
                  {["Naam, e-mail, telefoon","Werkervaring en skills","Beschikbaarheid en voorkeuren","Tarieven of commissies","Inloggegevens en IP-adres","Eventuele documenten"].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#09090b] mb-2">Opdrachtgevers</p>
                <ul className="list-disc pl-5 space-y-1">
                  {["Bedrijfsgegevens en contactpersoon","Factuurgegevens","Voorkeuren","Aankoopgeschiedenis","Geüploade bestanden"].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#09090b] mb-2">Gebruik van het platform</p>
                <ul className="list-disc pl-5 space-y-1">
                  {["Activiteit in de app","Bezoekgedrag","Matchdata"].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">3. Waarom we dit doen</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <p className="mb-3">We gebruiken gegevens om:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {["Matches te maken","Betalingen en contracten te regelen","Accounts te beheren","Support te bieden","Het platform te verbeteren","Wettelijke verplichtingen na te komen"].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p className="font-semibold text-[#09090b]">We verkopen geen gegevens.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">4. Rechtsgrond</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <p className="mb-3">Wij verwerken gegevens op basis van:</p>
              <ul className="list-disc pl-5 space-y-1">
                {["Overeenkomst","Toestemming","Wettelijke verplichting","Gerechtvaardigd belang"].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">5. Bewaartermijnen</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {["Actieve accounts: zolang actief","Inactief: maximaal 24 maanden","Facturen: 7 jaar"].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p>Je kunt altijd verzoeken tot verwijdering.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">6. Delen met derden</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <p className="mb-3">Alleen met partijen die nodig zijn voor de werking:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {["Firebase (hosting en data)","SendGrid (e-mail)","Stripe (betalingen)","SignRequest (contracten)"].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p>Alles volgens AVG en zoveel mogelijk binnen de EU.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">7. Beveiliging</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <p className="mb-3">We beschermen gegevens met:</p>
              <ul className="list-disc pl-5 space-y-1">
                {["Beveiligde verbindingen","Versleutelde opslag","Beperkte toegang","Monitoring en updates"].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">8. Jouw rechten</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              <p className="mb-3">Je kunt:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {["Gegevens inzien","Gegevens aanpassen","Gegevens laten verwijderen","Bezwaar maken"].map(i => <li key={i}>{i}</li>)}
              </ul>
              <p>Mail naar <a href="mailto:info@link2talent.nl" className="text-[#007BFF] hover:underline">info@link2talent.nl</a>. Reactie binnen 30 dagen.</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">9. Cookies</h2>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              We gebruiken cookies voor werking en analyse. Bij eerste bezoek vragen we toestemming.
            </p>
          </div>

          {/* Section 10 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">10. Wijzigingen</h2>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              We kunnen dit beleid aanpassen. De nieuwste versie staat altijd op de website.
            </p>
          </div>

          {/* Section 11 */}
          <div className="rounded-2xl p-8 mb-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-[#09090b] font-bold text-xl tracking-tight mb-4">11. Contact</h2>
            <div className="text-[#4f4f4f] text-[0.95rem] leading-relaxed space-y-1">
              <p>Link2Talent</p>
              <p>Frederik Hendrikstraat 59H, Amsterdam</p>
              <p><a href="mailto:info@link2talent.nl" className="text-[#007BFF] hover:underline">info@link2talent.nl</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
