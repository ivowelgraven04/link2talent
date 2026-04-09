import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, XCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function PropositionSection() {
  return (
    <section className="relative bg-[#f7f8fa] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Subhead */}
        <ScrollReveal className="mb-16">
          <p className="text-[#4f4f4f] text-[1rem] leading-relaxed max-w-[640px]">
            Van geen capaciteit naar een werkende salesmachine.<br />
            Geen vacatures, geen eindeloze gesprekken, geen mis-hires.<br />
            Gewoon iemand die afspraken voor je inplant.
          </p>
        </ScrollReveal>

        {/* Voor wie / Voor wie niet */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Voor wie</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b] mb-6">
              Dit werkt voor bedrijven die:
            </h2>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Al verkopen en willen opschalen",
                "Meer leads hebben dan ze kunnen opvolgen (of dat willen fixen)",
                "Geen tijd hebben om zelf salesmensen te zoeken en gesprekken te voeren",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} weight="fill" className="text-[#007BFF] mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#09090b] font-semibold text-[0.95rem]">Dan is dit voor jou.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-red-400" />
              <span className="text-red-500 text-xs font-semibold tracking-[0.18em] uppercase">Voor wie niet</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b] mb-6">
              Dan is dit voor jou te vroeg
            </h2>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">
              Als onderstaande op jou van toepassing is, dan is dit voor jou te vroeg.
            </p>
            <div className="flex flex-col gap-3 mb-6">
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
            <p className="text-[#09090b] font-semibold text-[0.95rem]">Dan gaat dit niet werken.</p>
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
              Zonder salescapaciteit blijft groei hangen.
            </h3>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-2">
              Je hebt leads, ideeën of potentie…
            </p>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-2">
              Maar niemand die structureel opvolgt.
            </p>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">
              Dus gebeurt er dit:
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {["Leads blijven liggen", "Deals worden niet opgevolgd", "Groei blijft achter"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <WarningCircle size={18} weight="fill" className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed">
              Niet omdat het er niet is, maar omdat je het niet verwerkt krijgt.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Het probleem</span>
            </div>
            <h3 className="text-[1.6rem] md:text-[2rem] font-bold tracking-tighter leading-[1.1] text-[#09090b] mb-4">
              De meeste bedrijven lossen dit verkeerd op
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Ze nemen iemand aan (duur en risicovol)",
                "Of ze blijven zelf alles doen (niet schaalbaar)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle size={18} weight="fill" className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-[#09090b] text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#4f4f4f] text-[0.95rem] leading-relaxed mb-6">
              En beide zorgen voor hetzelfde probleem: geen consistente salesoutput.
            </p>
            <div className="rounded-2xl p-6 border" style={{ background: "rgba(0,123,255,0.04)", borderColor: "rgba(0,123,255,0.12)" }}>
              <p className="text-[#09090b] font-semibold text-[0.95rem] mb-3">De oplossing</p>
              <p className="text-[#4f4f4f] text-[0.9rem] leading-relaxed mb-3">
                Wij geven je direct toegang tot bewezen salescapaciteit.
              </p>
              <p className="text-[#4f4f4f] text-[0.9rem] leading-relaxed mb-3">
                Geen hires. Geen lange trajecten. Geen onzekerheid.
              </p>
              <p className="text-[#4f4f4f] text-[0.9rem] leading-relaxed mb-3">Gewoon een setter die:</p>
              <div className="flex flex-col gap-2 mb-4">
                {["Past bij jouw bedrijf", "Direct kan starten", "Afspraken voor je inplant"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#007BFF] mt-2 shrink-0" />
                    <span className="text-[#09090b] text-[0.9rem]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#09090b] text-[0.9rem] font-medium mb-2">Jij focust op closen.</p>
              <p className="text-[#4f4f4f] text-[0.9rem] leading-relaxed">
                Of geeft ook dit uit handen en start naast een setter met een closer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
