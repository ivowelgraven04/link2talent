"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-5"
      >
        <div
          className={`
            max-w-[1320px] mx-auto flex items-center justify-between
            px-4 md:px-5 py-3 rounded-2xl transition-all duration-500
            ${scrolled
              ? "bg-[#0a0b18]/90 border border-white/[0.08] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "bg-transparent border border-transparent"
            }
          `}
          style={{ backdropFilter: scrolled ? "blur(24px)" : "none", WebkitBackdropFilter: scrolled ? "blur(24px)" : "none" }}
        >
          <Logo size="sm" />

          <nav className="hidden md:flex items-center gap-1" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.07]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href="https://app.link2talent.nl"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#007BFF] text-white text-sm font-semibold tracking-tight hover:bg-[#0066d6] transition-colors duration-200"
            >
              Start in de app
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl text-white/80 hover:text-white transition-colors duration-200"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-current rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="md:hidden max-w-[1320px] mx-auto mt-2 rounded-2xl px-5 py-5 flex flex-col gap-1 border border-white/[0.08] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]"
              style={{
                background: "rgba(8, 9, 20, 0.92)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
              }}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 text-[15px] font-medium border-b border-white/[0.05] last:border-0 transition-colors duration-200 ${
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-30">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
              >
                <a
                  href="https://app.link2talent.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 w-full text-center block py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066d6] text-white text-[15px] font-semibold tracking-tight transition-colors duration-200 active:scale-[0.98]"
                >
                  Start in de app
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/40"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
