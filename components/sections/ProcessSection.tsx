import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Intake",
    week: "Week 1",
    desc: "We checken je aanbod, doelgroep en salesproces. Geen sterke basis? Dan zeggen we dat direct.",
  },
  {
    num: "02",
    title: "Match",
    week: "Week 1–2",
    desc: "Je wordt gekoppeld aan een geschikte remote setter op basis van skills, ervaring en beschikbaarheid.",
  },
  {
    num: "03",
    title: "Start",
    week: "Week 2",
    desc: "Contract, betaling en communicatie lopen via de app. Binnen 1–2 weken is je setter actief.",
  },
  {
    num: "04",
    title: "Opschalen",
    week: "Vanaf week 3",
    desc: "Meer volume? Dan schaal je simpel op met extra capaciteit. Afspraken stromen in je agenda.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-[#f7f8fa] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#007BFF]" />
            <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Hoe het werkt</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b]">
            Van aanvraag tot actieve setter in je team
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="relative rounded-2xl p-7 border h-full" style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#007BFF] text-xs font-semibold tracking-[0.15em] uppercase">{step.week}</span>
                  <span className="text-[#e0e0e0] text-3xl font-bold tabular-nums">{step.num}</span>
                </div>
                <h3 className="text-[#09090b] font-bold text-lg tracking-tight mb-3">{step.title}</h3>
                <p className="text-[#4f4f4f] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
