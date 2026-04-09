import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, UserCircle, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    icon: UserCircle,
    title: "Remote Setters",
    subtitle: "Seat model — vanaf €295 p/m",
    description: "Wij koppelen je aan een remote setter die direct aan de slag kan. Via de app zie je alle kandidaten, check je skills en ervaring en plan je direct de juiste match.",
    items: ["Direct inzetbare setters", "Flexibel op- en afschalen via de app", "Contract, betaling en communicatie op één plek"],
    result: "Gesprekken gepland, leads opgevolgd en jouw pipeline gevuld.",
    href: "/diensten#remote-setters",
    external: false,
  },
  {
    icon: EnvelopeSimple,
    title: "Leadgeneratie via Link2Leads",
    subtitle: "Extra volume",
    description: "Voor wie extra volume nodig heeft, koppelen wij e-mailcampagnes aan je team. Alles wordt afgestemd op je ideale klant en direct geïntegreerd in de app.",
    items: ["Gerichte e-mailcampagnes", "Volledige opvolging en rapportage", "Naadloze integratie met jouw team en pipeline"],
    result: "Meer relevante leads, sneller in je agenda.",
    href: "https://link2leads.nl/",
    external: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#08080f] py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 50% at 30% 50%, rgba(0,123,255,0.06) 0%, transparent 70%)",
      }} />
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#007BFF]" />
            <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Aanbod</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-white max-w-[600px]">
            Flexibele salescapaciteit via een seatmodel
          </h2>
          <p className="text-white/50 text-[0.95rem] leading-relaxed mt-4 max-w-[520px]">
            Geen recruitment of detachering. Alles via één systeem — match, contract, betaling en samenwerking op één plek.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4 max-w-[860px]">
          {services.map((s, i) => {
            const CardWrapper = s.external
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <Link href={s.href} className="block h-full">
                    {children}
                  </Link>
                );

            return (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <CardWrapper>
                  <div className="relative flex flex-col gap-6 rounded-2xl p-8 border h-full bg-white/[0.03] border-white/[0.08] hover:border-[#007BFF]/50 hover:bg-white/[0.05] transition-all duration-200 cursor-pointer group">
                    <div>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: "rgba(0,123,255,0.1)" }}>
                        <s.icon size={20} className="text-[#007BFF]" />
                      </div>
                      <p className="text-[#007BFF] text-xs font-semibold tracking-[0.15em] uppercase mb-2">{s.subtitle}</p>
                      <h3 className="text-white font-bold text-xl tracking-tight mb-3">{s.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">{s.description}</p>
                      <div className="flex flex-col gap-2">
                        {s.items.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <div className="w-1 h-1 rounded-full bg-[#007BFF] mt-2 shrink-0" />
                            <span className="text-white/65 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto pt-5 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      <p className="text-white/40 text-xs italic">{s.result}</p>
                      <ArrowRight size={15} className="text-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 ml-3" />
                    </div>
                  </div>
                </CardWrapper>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal className="mt-12">
          <MagneticButton
            href="https://calendly.com/link2talent"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
          >
            Plan een strategiegesprek <ArrowRight size={15} weight="bold" />
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
