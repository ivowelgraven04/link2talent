export default function TrustStrip() {
  const items = [
    "Remote Setters",
    "Actief binnen 14 dagen",
    "Flexibel opschalen",
    "Closers",
    "Geen vaste hires",
    "Resultaatgericht",
    "Leadgeneratie",
    "Amsterdam",
    "Performance-based",
    "Seatmodel",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-5" style={{ background: "#0d0e1c", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8 text-white/40 text-sm font-medium tracking-wide">
            <span className="w-1 h-1 rounded-full bg-[#007BFF] inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
