import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function CTASection() {
  return (
    <section className="relative bg-[#08080f] py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="relative rounded-[2rem] bg-[#007BFF] overflow-hidden px-10 md:px-20 py-20 md:py-24 text-center">
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }} />
            <div className="relative">
              <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Start vandaag</p>
              <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-tighter leading-[1.08] text-white mb-5 max-w-[600px] mx-auto">
                Blijf je zelf alles doen of bouw je een team dat voor je werkt?
              </h2>
              <p className="text-white/75 text-[0.95rem] leading-relaxed mb-10 max-w-[480px] mx-auto">
                Start vandaag en voeg binnen 14 dagen salescapaciteit toe aan je bedrijf.
              </p>
              <MagneticButton
                href="https://app.link2talent.nl"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-white/90 text-[#007BFF] font-bold text-sm tracking-tight transition-colors duration-200"
              >
                Start in de app <ArrowRight size={15} weight="bold" />
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
