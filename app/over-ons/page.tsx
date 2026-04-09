import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Het team achter Link2Talent. Wij bouwen systemen. Geen gedoe.",
};

const team = [
  {
    name: "Demi",
    label: "Co-founder",
    photo: "/team-demi.png",
    role: "de commerciële motor",
    description:
      "Ik zorg dat opdrachtgevers precies krijgen wat ze nodig hebben. Geen eindeloos zoeken, geen losse gesprekken. Via de app zie je direct de juiste kandidaten en plan je meteen de matches.",
    values: [
      "Direct resultaat voor jouw team",
      "Snel de juiste commerciële talenten vinden",
      "Vertrouwd contactpunt via de app",
    ],
    cta: "Plan een strategiegesprek",
    ctaHref: "https://calendly.com/link2talent",
  },
  {
    name: "Anne-Roos",
    label: "Co-founder",
    photo: "/team-anne-roos.png",
    role: "de kandidaten-partner",
    description:
      "Ik help bedrijven en professionals elkaar makkelijk te vinden. Ik ben er voor vragen en denk mee. We maken het makkelijk om de juiste match te vinden, met de persoonlijke aandacht die nodig is om het echt goed te laten werken.",
    values: [
      "Duidelijke en eerlijke samenwerking",
      "Een community waarin iedereen elkaar versterkt",
      "Persoonlijke aandacht, ook in een digitaal platform",
    ],
    cta: "Plan een strategiegesprek",
    ctaHref: "https://calendly.com/link2talent",
  },
  {
    name: "Lodewijk",
    label: "Partner",
    photo: "/team-lodewijk.png",
    role: "de software-expert",
    description:
      "Ik zorg dat onze technologie soepel, veilig en gebruiksvriendelijk werkt zodat jij zonder gedoe kunt verbinden, samenwerken en groeien. Alles wat jij ziet, en wat op de achtergrond draait, is ontworpen voor een eenvoudige en efficiënte ervaring.",
    values: [
      "Slimme automatisering die tijd bespaart",
      "Stabiele en veilige technologie",
      "Continue innovatie voor een betere gebruikerservaring",
    ],
    cta: "Plan een strategiegesprek",
    ctaHref: "https://calendly.com/link2talent",
  },
];

const whyItems = [
  "Direct resultaat: zie direct geschikte kandidaten in de app",
  "Geen standaard trajecten: elke match is maatwerk",
  "Alles op één plek: contracten, betalingen en communicatie via de app",
  "De juiste match: wij matchen op skills én energie, niet alleen op CV",
];

export default function OverOnsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-[#08080f] pt-36 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 68% 50%, rgba(0,123,255,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#007BFF]" />
                <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">
                  Over ons
                </span>
              </div>
              <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-tighter leading-[1.02] text-white mb-6">
                Het team achter Link2Talent
              </h1>
              <p className="text-white/70 text-[1.05rem] leading-relaxed mb-4 font-semibold">
                Wij bouwen systemen. Geen gedoe.
              </p>
              <p className="text-white/50 text-[0.95rem] leading-relaxed">
                Bij Link2Talent draait alles om snel, overzichtelijk en direct
                resultaat via de app. Wij zijn geen traditioneel bureau. Wij
                zorgen dat je direct de juiste kandidaten ziet, matches plant en
                je salescapaciteit opschaalt zonder losse processen.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative bg-[#f7f8fa] py-28 md:py-36">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <ScrollReveal className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#007BFF]" />
                <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">
                  Het team
                </span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b]">
                Meet the Co-founders
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <div
                    className="rounded-2xl border overflow-hidden h-full flex flex-col"
                    style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    {/* Photo */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-7 flex-1">
                      <div>
                        <p className="text-[#007BFF] text-[0.7rem] font-semibold tracking-[0.15em] uppercase mb-1">
                          Meet the {member.label}
                        </p>
                        <h3 className="text-[#09090b] font-bold text-xl tracking-tight">
                          {member.name} – {member.role}
                        </h3>
                      </div>
                      <p className="text-[#4f4f4f] text-sm leading-relaxed flex-1">
                        {member.description}
                      </p>
                      <div
                        className="flex flex-col gap-2 pt-4"
                        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                      >
                        <p className="text-[#09090b] text-xs font-semibold mb-1">Waar ik voor {member.name === "Anne-Roos" ? "staat" : "sta"}:</p>
                        {member.values.map((v) => (
                          <div key={v} className="flex items-start gap-2.5">
                            <CheckCircle
                              size={14}
                              weight="fill"
                              className="text-[#007BFF] mt-0.5 shrink-0"
                            />
                            <span className="text-[#09090b] text-xs">{v}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={member.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#007BFF] text-sm font-semibold hover:underline w-fit mt-2"
                      >
                        {member.cta} <ArrowRight size={13} weight="bold" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Ivo credit */}
            <ScrollReveal className="mt-6">
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Photo */}
                  <div className="relative w-full md:w-56 shrink-0 aspect-square md:aspect-auto">
                    <Image
                      src="/team-ivo.png"
                      alt="Ivo Welgraven"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center gap-3">
                    <div>
                      <p className="text-[#007BFF] text-[0.7rem] font-semibold tracking-[0.15em] uppercase mb-1">
                        Meet the Partner
                      </p>
                      <h3 className="text-[#09090b] font-bold text-xl tracking-tight">
                        Ivo Welgraven – onze webheld
                      </h3>
                    </div>
                    <p className="text-[#4f4f4f] text-sm leading-relaxed max-w-[560px]">
                      Ivo heeft deze hele website voor ons gemaakt via De Proces
                      Designers. Zonder hem had dit platform er niet zo strak en
                      gebruiksvriendelijk uitgezien. Een groot dank aan Ivo en zijn
                      team voor de perfecte samenwerking.
                    </p>
                    <p className="text-[#4f4f4f] text-sm">
                      Shout-out: Ivo Welgraven via De Proces Designers
                    </p>
                    <a
                      href="https://deprocesdesigners.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#007BFF] text-sm font-semibold hover:underline w-fit"
                    >
                      deprocesdesigners.nl <ArrowRight size={13} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why */}
        <section className="relative bg-[#08080f] py-28 md:py-36 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-[#007BFF]" />
                  <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">
                    Waarom Link2Talent werkt
                  </span>
                </div>
                <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-white mb-6">
                  Wij zijn geen traditionele recruiters
                </h2>
                <p className="text-white/50 text-[0.95rem] leading-relaxed mb-8">
                  Alles draait om resultaat en overzicht via de app:
                </p>
                <div className="flex flex-col gap-3 mb-10">
                  {whyItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="text-[#007BFF] mt-0.5 shrink-0"
                      />
                      <span className="text-white/65 text-[0.95rem]">{item}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton
                  href="https://calendly.com/link2talent"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
                >
                  Plan een strategiegesprek <ArrowRight size={15} weight="bold" />
                </MagneticButton>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="relative rounded-[2rem] bg-[#007BFF] overflow-hidden p-10 md:p-14">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="relative">
                    <p className="text-white/70 text-sm font-medium mb-2">
                      Start jouw eerste match nu
                    </p>
                    <p className="text-white font-bold text-2xl tracking-tight mb-4">
                      Plan een gesprek of maak direct een account aan in de app en voeg binnen 14 dagen salescapaciteit toe aan je team.
                    </p>
                    <a
                      href="https://calendly.com/link2talent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#007BFF] font-bold text-sm hover:bg-white/90 transition-colors"
                    >
                      Plan een strategiegesprek <ArrowRight size={14} weight="bold" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
