"use client";

import { useRef, useEffect } from "react";

export default function HexagonBackground() {
  const layerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const parent = layerRef.current?.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 45;
      const dy = (e.clientY - cy) / 45;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Deterministic pseudo-random based on grid position (avoids hydration mismatch)
  function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9301 + 49297) * 49311;
    return x - Math.floor(x);
  }

  // Generate hexagon grid points
  const hexagons: { x: number; y: number; size: number; opacity: number }[] = [];
  const cols = 10;
  const rows = 8;
  const hexW = 110;
  const hexH = 95;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const seed = row * cols + col;
      const x = col * hexW + (row % 2 === 0 ? 0 : hexW / 2) - hexW;
      const y = row * hexH * 0.75 - hexH;
      const opacity = 0.04 + seededRandom(seed) * 0.06;
      const size = 44 + seededRandom(seed + 100) * 10;
      hexagons.push({ x, y, size, opacity });
    }
  }

  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i - 30);
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return `M ${pts.join(" L ")} Z`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        ref={layerRef}
        className="absolute inset-0 w-full h-full animate-pulse-glow"
        style={{ transition: "transform 0.1s ease-out" }}
        viewBox="0 0 1100 760"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {hexagons.map((h, i) => (
          <path
            key={i}
            d={hexPath(h.x, h.y, h.size)}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.6"
            opacity={h.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
