"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import MagneticButton from "@/components/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center bg-[#08080f] overflow-hidden">
      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* blue glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 50% at 68% 50%, rgba(0,123,255,0.08) 0%, transparent 70%)",
      }} />
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-32 pb-24">
        <div className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-px w-8 bg-[#007BFF]" />
            <span className="text-[#007BFF] text-xs font-semibold tracking-[0.18em] uppercase">Remote salescapaciteit</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.8rem] md:text-[3.6rem] lg:text-[4rem] font-bold tracking-tighter leading-[1.02] text-white mb-6"
          >
            Je wilt meer omzet,{" "}
            <span className="text-[#007BFF]">maar je hebt niet genoeg salescapaciteit</span>{" "}
            om het waar te maken.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-[1.05rem] leading-relaxed mb-4 max-w-[580px]"
          >
            Goede mensen vinden kost tijd. Slechte mensen kosten je deals. En ondertussen blijft je pipeline achter.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/80 text-[1.05rem] leading-relaxed mb-8 max-w-[580px] font-medium"
          >
            Wij leveren binnen 14 dagen een remote setter die direct gesprekken voor je inplant. Zonder vaste hires, zonder gedoe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <CheckCircle size={16} weight="fill" className="text-[#007BFF]" />
              Vanaf €295 per maand per seat
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <CheckCircle size={16} weight="fill" className="text-[#007BFF]" />
              Performance-based mogelijk
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <CheckCircle size={16} weight="fill" className="text-[#007BFF]" />
              Actief binnen 14 dagen
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="https://calendly.com/link2talent"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
            >
              Plan een strategiegesprek <ArrowRight size={15} weight="bold" />
            </MagneticButton>
            <a
              href="/diensten"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/[0.1] text-white/65 hover:text-white hover:border-white/[0.2] font-medium text-sm tracking-tight transition-all duration-200"
            >
              Bekijk diensten
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
