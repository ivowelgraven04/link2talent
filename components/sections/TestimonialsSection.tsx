import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "@phosphor-icons/react/dist/ssr";

const testimonials = [
  {
    quote: "Echt een top bedrijf! Meerdere kandidaten gevonden, alles snel geregeld.",
    name: "Micah",
    company: "MIJU",
  },
  {
    quote: "Niet alleen de samenwerking, maar ook het resultaat. 5/5.",
    name: "Jens",
    company: "",
  },
  {
    quote: "Kandidaten sluiten perfect aan en zijn direct inzetbaar.",
    name: "Dick",
    company: "Remorec",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#f7f8fa] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#007BFF]" />
            <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Social proof</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b]">
            Gebruikt door bedrijven die sneller wilden opschalen
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl p-8 border h-full flex flex-col gap-5" style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} weight="fill" className="text-[#007BFF]" />
                  ))}
                </div>
                <p className="text-[#09090b] text-[0.95rem] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-[#09090b] font-semibold text-sm">{t.name}</p>
                  {t.company && <p className="text-[#4f4f4f] text-xs">{t.company}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
