import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, UserCircle, Handshake, EnvelopeSimple, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Alles wat je nodig hebt om direct salescapaciteit te bouwen. Remote setters, closers en leadgeneratie via de app.",
};

const services = [
  {
    icon: UserCircle,
    title: "Remote Setters",
    subtitle: "Seat model — vanaf €295 p/m",
    description: "Wij koppelen je aan een remote setter die direct aan de slag kan. Geen vacatures, geen gedoe. Via de app zie je alle kandidaten, check je skills en ervaring en plan je direct de juiste match. Je setter plant gesprekken voor jouw team, zodat jij kunt focussen op closen.",
    items: ["Direct inzetbare setters", "Flexibel op- en afschalen via de app", "Contract, betaling en communicatie op één plek"],
    result: "Gesprekken gepland, leads opgevolgd en jouw pipeline gevuld.",
  },
  {
    icon: Handshake,
    title: "Closers",
    subtitle: "Op aanvraag",
    description: "Wil je naast een setter ook iemand die deals afrondt? Wij koppelen je aan ervaren closers die passen bij je aanbod en team.",
    items: ["Direct beschikbare closers", "Integratie met de bestaande pipeline", "Volledige rapportage via de app"],
    result: "Gesloten deals, sneller groeiend resultaat.",
  },
  {
    icon: EnvelopeSimple,
    title: "Leadgeneratie via Link2Leads",
    subtitle: "Extra volume",
    description: "Voor wie extra volume nodig heeft, koppelen wij e-mailcampagnes aan je team. Alles wordt afgestemd op je ideale klant en direct geïntegreerd in de app.",
    items: ["Gerichte e-mailcampagnes", "Volledige opvolging en rapportage", "Naadloze integratie met jouw team en pipeline"],
    result: "Meer relevante leads, sneller in je agenda.",
  },
];

const steps = [
  { num: "01", title: "Intake", desc: "We checken je aanbod, doelgroep en salesproces. Geen sterke basis? Dan zeggen we dat direct." },
  { num: "02", title: "Match", desc: "Je wordt gekoppeld aan de juiste setter of closer via de app. Skills, ervaring en beschikbaarheid bepalen de match." },
  { num: "03", title: "Start", desc: "Contract, betaling en communicatie lopen via de app. Binnen 1 tot 2 weken is je team actief." },
  { num: "04", title: "Opschalen", desc: "Meer volume nodig? Voeg eenvoudig extra capaciteit toe in de app." },
];

export default function DienstenPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-[#08080f] pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 55% 50% at 68% 50%, rgba(0,123,255,0.08) 0%, transparent 70%)",
          }} />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#007BFF]" />
                <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Diensten</span>
              </div>
              <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-tighter leading-[1.02] text-white mb-6">
                Remote Salesprofessionals via de app
              </h1>
              <p className="text-white/60 text-[1.05rem] leading-relaxed mb-4">
                Alles wat je nodig hebt om direct salescapaciteit te bouwen.
              </p>
              <p className="text-white/50 text-[0.95rem] leading-relaxed mb-8">
                Wij leveren geen losse hires. Wij zorgen dat je een complete salesflow krijgt, volledig geïntegreerd in de app. Van intake tot actieve matches en doorlopende opvolging.
              </p>
              <MagneticButton
                href="https://app.link2talent.nl"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
              >
                Start direct in de app <ArrowRight size={15} weight="bold" />
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative bg-[#f7f8fa] py-28 md:py-36">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col gap-20">
            {services.map((s, i) => (
              <ScrollReveal key={s.title}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5" style={{ background: "rgba(0,123,255,0.08)" }}>
                      <s.icon size={24} className="text-[#007BFF]" />
                    </div>
                    <p className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase mb-3">{s.subtitle}</p>
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold tracking-tighter leading-[1.1] text-[#09090b] mb-4">{s.title}</h2>
                    <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">{s.description}</p>
                    <div className="flex flex-col gap-3 mb-6">
                      {s.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle size={18} weight="fill" className="text-[#007BFF] mt-0.5 shrink-0" />
                          <span className="text-[#09090b] text-[0.9rem]">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[#007BFF] text-sm font-semibold">Resultaat: {s.result}</p>
                  </div>
                  <div className="rounded-2xl p-10 flex items-center justify-center min-h-[280px]" style={{ background: "rgba(0,123,255,0.04)", border: "1px solid rgba(0,123,255,0.1)" }}>
                    <s.icon size={80} className="text-[#007BFF]/20" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="relative bg-[#08080f] py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <ScrollReveal className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#007BFF]" />
                <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Hoe het werkt</span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-white">
                Van aanvraag tot actieve salescapaciteit
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <div className="relative flex flex-col gap-4 rounded-2xl p-7 border bg-white/[0.03] border-white/[0.08] h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[#007BFF] text-xs font-semibold tracking-[0.15em] uppercase">Stap {step.num}</span>
                      <span className="text-white/10 text-3xl font-bold tabular-nums">{step.num}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg tracking-tight">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="relative bg-[#f7f8fa] py-28 md:py-36">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="max-w-[680px]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-[#007BFF]" />
                  <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Waarom dit werkt</span>
                </div>
                <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b] mb-6">
                  Traditioneel hiring is traag en risicovol
                </h2>
                <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-8">
                  Wij draaien het om. Je bouwt een salesmachine die werkt, zonder losse processen of gedoe.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { from: "Geen CV's", to: "directe matches" },
                    { from: "Geen lange processen", to: "direct starten" },
                    { from: "Geen hoge vaste kosten", to: "flexibel opschalen" },
                    { from: "Alles via één systeem", to: "app beheert contract, betaling en communicatie" },
                  ].map((item) => (
                    <div key={item.from} className="flex items-center gap-4 rounded-xl p-4" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
                      <span className="text-[#09090b] font-semibold text-sm">{item.from}</span>
                      <span className="text-[#007BFF]">→</span>
                      <span className="text-[#4f4f4f] text-sm">{item.to}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <MagneticButton
                    href="https://app.link2talent.nl"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
                  >
                    Start direct in de app <ArrowRight size={15} weight="bold" />
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
