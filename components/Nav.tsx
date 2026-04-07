"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { background: "rgba(10,11,24,0.90)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" } : {}}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-18">
        <Logo size="sm" />
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://app.link2talent.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm tracking-tight transition-colors duration-200"
        >
          Start in de app <ArrowRight size={14} weight="bold" />
        </a>
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{ background: "rgba(10,11,24,0.97)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-base font-medium py-2 transition-colors">
                  {l.label}
                </Link>
              ))}
              <a
                href="https://app.link2talent.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white font-semibold text-sm mt-2 transition-colors"
              >
                Start in de app <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
