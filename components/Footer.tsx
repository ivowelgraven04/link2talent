import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer style={{ background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col gap-5">
            <Logo size="sm" />
            <p className="text-white/45 text-sm leading-relaxed">
              Remote salesprofessionals via de app. Flexibele salescapaciteit zonder vaste hires.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@link2talent.nl" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                <Envelope size={14} className="text-[#007BFF]" />
                info@link2talent.nl
              </a>
              <a href="tel:+31850805381" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-[#007BFF]" />
                +31 85 080 538 1
              </a>
              <span className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-[#007BFF]" />
                Amsterdam, NL
              </span>
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.18em] uppercase mb-5">Diensten</p>
            <div className="flex flex-col gap-3">
              <Link href="/diensten" className="text-white/55 hover:text-white text-sm transition-colors">Remote Setters</Link>
              <a href="https://link2leads.nl/" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white text-sm transition-colors">Leadgeneratie</a>
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.18em] uppercase mb-5">Bedrijf</p>
            <div className="flex flex-col gap-3">
              <Link href="/over-ons" className="text-white/55 hover:text-white text-sm transition-colors">Over ons</Link>
              <a href="https://link2leads.nl/" target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white text-sm transition-colors">Link2Leads</a>
            </div>
          </div>
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.18em] uppercase mb-5">Juridisch</p>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-white/55 hover:text-white text-sm transition-colors">Privacybeleid</Link>
              <Link href="/algemene-voorwaarden" className="text-white/55 hover:text-white text-sm transition-colors">Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Link2Talent. Alle rechten voorbehouden.</p>
          <p className="text-white/30 text-xs">
            Webdesign door{" "}
            <a href="https://deprocesdesigners.nl/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              De Proces Designers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
