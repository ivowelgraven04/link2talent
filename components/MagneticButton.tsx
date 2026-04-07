"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({ children, className = "", href, onClick, strength = 0.35 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const x = useSpring(useTransform(mouseX, (v) => v * strength), springConfig);
  const y = useSpring(useTransform(mouseY, (v) => v * strength), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  const Tag = href ? "a" : "button";
  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }} className="inline-flex">
      <Tag href={href} onClick={onClick} className={`btn-press ${className}`}>{children}</Tag>
    </motion.div>
  );
}
