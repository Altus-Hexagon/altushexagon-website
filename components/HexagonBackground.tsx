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
      const dx = (e.clientX - cx) / 50;
      const dy = (e.clientY - cy) / 50;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9301 + 49297) * 49311;
    return x - Math.floor(x);
  }

  const hexagons: {
    x: number;
    y: number;
    size: number;
    opacity: number;
    filled: boolean;
    raised: boolean;
  }[] = [];

  const cols = 12;
  const rows = 9;
  const hexW = 100;
  const hexH = 87;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const seed = row * cols + col;
      const x = col * hexW + (row % 2 === 0 ? 0 : hexW / 2) - hexW;
      const y = row * hexH * 0.75 - hexH;
      const opacity = 0.05 + seededRandom(seed) * 0.1;
      const size = 40 + seededRandom(seed + 100) * 12;
      const filled = seededRandom(seed + 200) > 0.65;
      const raised = seededRandom(seed + 300) > 0.5;
      hexagons.push({ x, y, size, opacity, filled, raised });
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
      {/* Ambient top light — mimics brand image lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(201,162,39,0.08)_0%,_transparent_55%)]" />

      <svg
        ref={layerRef}
        className="absolute inset-0 w-full h-full"
        style={{ transition: "transform 0.15s ease-out" }}
        viewBox="0 0 1200 780"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hexGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#C9A227" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F9E29C" stopOpacity="0.04" />
          </linearGradient>
          <filter id="hexShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <filter id="hexHighlight" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="-1" stdDeviation="2" floodColor="#F9E29C" floodOpacity="0.15" />
          </filter>
        </defs>

        {hexagons.map((h, i) => (
          <path
            key={i}
            d={hexPath(h.x, h.y, h.size)}
            fill={h.filled ? "url(#hexGold)" : "none"}
            stroke={h.filled ? "none" : "#C9A227"}
            strokeWidth={h.filled ? 0 : 0.7}
            opacity={h.opacity}
            filter={h.raised ? "url(#hexShadow)" : h.filled ? "url(#hexHighlight)" : undefined}
          />
        ))}
      </svg>
    </div>
  );
}
