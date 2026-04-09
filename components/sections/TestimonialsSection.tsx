"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Arnold",
    highlight: "Absolute aanrader voor commercieel talent en recruitment.",
    quote:
      "Link2Talent onderscheidt zich door een persoonlijke aanpak en echte betrokkenheid. Ze koppelen de juiste mensen aan de juiste organisaties en communiceren transparant en eerlijk.",
  },
  {
    name: "Lodewijk",
    highlight: null,
    quote:
      "Erg fijn bedrijf om mee samen te werken. Adequaat en met sterke communicatie.",
  },
  {
    name: "Wouter",
    highlight: "Zeker een aanrader.",
    quote:
      "Werk via Link2Talent voor twee opdrachtgevers. Er wordt goed meegedacht en de communicatie is vanaf dag één sterk.",
  },
  {
    name: "Jamie",
    highlight: "Voelde me gewaardeerd en goed begeleid.",
    quote:
      "Mijn eerste opdracht via Link2Talent gekregen. Snelle, duidelijke communicatie en echt geluisterd naar mijn wensen.",
  },
  {
    name: "Rafael",
    highlight: "Snel schakelen, direct resultaat.",
    quote: "Behoefte uitgelegd en binnen een paar dagen alles geregeld.",
  },
  {
    name: "Jens",
    highlight: "5/5.",
    quote: "Niet alleen de samenwerking, maar ook het resultaat.",
  },
  {
    name: "Dick",
    highlight: null,
    quote: "Kandidaten sluiten perfect aan en zijn direct inzetbaar.",
  },
  {
    name: "Imke",
    highlight: null,
    quote: "Fijne communicatie en ze denken echt met je mee.",
  },
  {
    name: "Micah",
    highlight: "Meerdere sterke kandidaten gevonden, 100% aanrader.",
    quote: "Komen afspraken na, reageren snel en luisteren goed.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section className="relative bg-[#f7f8fa] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#007BFF]" />
                <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">
                  Reviews
                </span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tighter leading-[1.08] text-[#09090b]">
                Wat anderen over ons zeggen
              </h2>
            </div>
            {/* Arrow controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scroll("left")}
                aria-label="Vorige reviews"
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 hover:border-[#007BFF] hover:text-[#007BFF]"
                style={{ borderColor: "rgba(0,0,0,0.12)", color: "#09090b", background: "#ffffff" }}
              >
                <ArrowLeft size={18} weight="bold" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Volgende reviews"
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 hover:border-[#007BFF] hover:text-[#007BFF]"
                style={{ borderColor: "rgba(0,0,0,0.12)", color: "#09090b", background: "#ffffff" }}
              >
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrollable track — full bleed */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          maxWidth: "100vw",
        }}
      >
        {/* left spacer to align with content */}
        <div className="shrink-0 w-[max(0px,calc((100vw-1320px)/2))]" />

        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 80, damping: 20 }}
            className="shrink-0 w-[300px] md:w-[320px] rounded-2xl p-7 border flex flex-col gap-4"
            style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.08)" }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={13} weight="fill" className="text-[#007BFF]" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#09090b] text-[0.9rem] leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Highlight */}
            {t.highlight && (
              <p className="text-[#007BFF] text-[0.85rem] font-semibold leading-snug">
                → {t.highlight}
              </p>
            )}

            {/* Author */}
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                style={{ background: "#007BFF" }}
              >
                {t.name[0]}
              </div>
              <span className="text-[#09090b] font-semibold text-sm">{t.name}</span>
            </div>
          </motion.div>
        ))}

        {/* right padding */}
        <div className="shrink-0 w-6" />
      </div>

      {/* hide scrollbar webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
