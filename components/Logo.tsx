import Link from "next/link";
import Image from "next/image";

const sizeMap = { sm: { h: 36, w: 144 }, md: { h: 40, w: 160 }, lg: { h: 48, w: 192 } };

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const { h, w } = sizeMap[size];
  return (
    <Link href="/" className="inline-flex items-center select-none shrink-0" aria-label="Link2Talent — Home">
      <Image
        src="/logo.png"
        alt="Link2Talent"
        width={w}
        height={h}
        priority
        style={{ objectFit: "contain", height: h, width: "auto" }}
      />
    </Link>
  );
}
