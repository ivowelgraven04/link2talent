import ScrollReveal from "@/components/ScrollReveal";
import { TrendUp, CalendarCheck, ChartBar, UsersFour } from "@phosphor-icons/react/dist/ssr";

const results = [
  { icon: TrendUp, title: "Structurele opvolging", desc: "Je hebt structurele opvolging van leads — geen kansen meer die blijven liggen." },
  { icon: CalendarCheck, title: "Agenda gevuld", desc: "Je agenda vult zich met gesprekken. Jij focust op closen." },
  { icon: ChartBar, title: "Pipeline groeit consistent", desc: "Je pipeline groeit consistent, week na week, zonder dat jij er achteraan hoeft." },
  { icon: UsersFour, title: "Niet meer afhankelijk", desc: "Je bent niet meer afhankelijk van jezelf. Je salesproces werkt ook zonder jou." },
];

export default function ResultsSection() {
  return (
    <section className="relative bg-[#08080f] py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#007BFF]" />
              <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Resultaat</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-white mb-6">
              Wat er verandert als dit goed staat
            </h2>
            <p className="text-white/50 text-[0.95rem] leading-relaxed mb-8">
              Traditionele hiring is traag en risicovol. Wij draaien het om. Geen CV's — directe matches. Geen lange processen — direct starten. Geen hoge vaste kosten — flexibel opschalen.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Geen CV's → directe matches",
                "Geen lange processen → direct starten",
                "Geen hoge vaste kosten → flexibel opschalen",
                "Alles via één systeem",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007BFF] shrink-0" />
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            {results.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <div className="relative flex flex-col gap-4 rounded-2xl p-6 border bg-white/[0.03] border-white/[0.08]">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: "rgba(0,123,255,0.1)" }}>
                    <r.icon size={18} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-2">{r.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
