"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current; const ring = ringRef.current;
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId: number;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX; mouseY = e.clientY;
      dot!.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
    function loop() {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
      ring!.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(loop);
    }
    function onEnterLink() {
      ring!.style.width = "48px"; ring!.style.height = "48px";
      ring!.style.marginLeft = "-24px"; ring!.style.marginTop = "-24px";
      ring!.style.borderColor = "rgba(0,123,255,0.7)";
    }
    function onLeaveLink() {
      ring!.style.width = "32px"; ring!.style.height = "32px";
      ring!.style.marginLeft = "-16px"; ring!.style.marginTop = "-16px";
      ring!.style.borderColor = "rgba(0,123,255,0.5)";
    }

    document.addEventListener("mousemove", onMouseMove);
    dot!.style.opacity = "1"; ring!.style.opacity = "1";
    rafId = requestAnimationFrame(loop);

    function attach() {
      document.querySelectorAll("a,button,[role='button'],input,textarea,select,label")
        .forEach(el => { el.addEventListener("mouseenter", onEnterLink); el.addEventListener("mouseleave", onLeaveLink); });
    }
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { document.removeEventListener("mousemove", onMouseMove); cancelAnimationFrame(rafId); obs.disconnect(); };
  }, []);

  return (
    <>
      <div ref={dotRef} aria-hidden="true" style={{ position:"fixed",top:0,left:0,width:"6px",height:"6px",marginLeft:"-3px",marginTop:"-3px",borderRadius:"50%",background:"#007BFF",pointerEvents:"none",zIndex:99999,opacity:0,willChange:"transform",boxShadow:"0 0 8px rgba(0,123,255,0.6)" }} />
      <div ref={ringRef} aria-hidden="true" style={{ position:"fixed",top:0,left:0,width:"32px",height:"32px",marginLeft:"-16px",marginTop:"-16px",borderRadius:"50%",border:"1.5px solid rgba(0,123,255,0.5)",background:"transparent",pointerEvents:"none",zIndex:99998,opacity:0,transition:"width .2s,height .2s,margin .2s,border-color .2s",willChange:"transform" }} />
    </>
  );
}
