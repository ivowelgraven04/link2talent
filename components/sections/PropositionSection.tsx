import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, XCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function PropositionSection() {
  return (
    <section className="relative bg-[#f7f8fa] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Voor wie */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Voor wie</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b] mb-6">
              Dit werkt voor bedrijven die willen opschalen
            </h2>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-8">
              Van geen capaciteit naar een werkende salesmachine. Geen vacatures, geen eindeloze gesprekken, geen mis-hires. Gewoon iemand die afspraken voor je inplant.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Al verkopen en willen opschalen",
                "Meer leads hebben dan ze kunnen opvolgen",
                "Geen tijd hebben om zelf salesmensen te zoeken",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} weight="fill" className="text-[#007BFF] mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-red-400" />
              <span className="text-red-500 text-xs font-semibold tracking-[0.18em] uppercase">Voor wie niet</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b] mb-6">
              Dan is dit voor jou te vroeg
            </h2>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-8">
              Als onderstaande op jou van toepassing is, gaat dit niet werken.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Je aanbod nog niet verkoopt",
                "Je geen duidelijke doelgroep hebt",
                "Je verwacht dat iemand zonder sturing alles voor je oplost",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle size={18} weight="fill" className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Realiteit & Probleem */}
        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Realiteit</span>
            </div>
            <h3 className="text-[1.6rem] md:text-[2rem] font-bold tracking-tighter leading-[1.1] text-[#09090b] mb-4">
              Zonder salescapaciteit blijft groei hangen
            </h3>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">
              Je hebt leads, ideeën of potentie… maar niemand die structureel opvolgt. Niet omdat het er niet is, maar omdat je het niet verwerkt krijgt.
            </p>
            <div className="flex flex-col gap-3">
              {["Leads blijven liggen", "Deals worden niet opgevolgd", "Groei blijft achter"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <WarningCircle size={18} weight="fill" className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Het probleem</span>
            </div>
            <h3 className="text-[1.6rem] md:text-[2rem] font-bold tracking-tighter leading-[1.1] text-[#09090b] mb-4">
              De meeste bedrijven lossen dit verkeerd op
            </h3>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">
              Ze nemen iemand aan (duur en risicovol) of ze blijven zelf alles doen (niet schaalbaar). En beide zorgen voor hetzelfde: geen consistente salesoutput.
            </p>
            <div className="rounded-2xl p-6 border" style={{ background: "rgba(0,123,255,0.04)", borderColor: "rgba(0,123,255,0.12)" }}>
              <p className="text-[#09090b] font-semibold text-[0.95rem] mb-2">De oplossing</p>
              <p className="text-[#4f4f4f] text-[0.9rem] leading-relaxed">
                Wij geven je direct toegang tot bewezen salescapaciteit. Geen hires, geen lange trajecten, geen onzekerheid. Gewoon een setter die past bij jouw bedrijf en direct kan starten.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
