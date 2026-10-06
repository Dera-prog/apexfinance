"use client";

export function StockLogo({ initials, color, size = 40 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
      style={{ backgroundColor: color, width: size, height: size, fontSize: size * 0.32 }}
    >
      {initials}
    </div>
  );
}

export function AreaChart({
  data,
  up,
  height = 160,
}: {
  data: number[];
  up: boolean;
  height?: number;
}) {
  const w = 320;
  const h = height;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - 8 - ((v - min) / range) * (h - 16);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const color = up ? "#1d5ce0" : "#ef4444";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" style={{ height }}>
      <defs>
        <linearGradient id={`grad-${up ? "u" : "d"}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points.join(" ")} ${w},${h}`} fill={`url(#grad-${up ? "u" : "d"})`} />
      <polyline points={points.join(" ")} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  const w = 72;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => `${((i / (data.length - 1)) * w).toFixed(1)},${(h - 2 - ((v - min) / range) * (h - 4)).toFixed(1)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
      <polyline points={points} fill="none" stroke={up ? "#16a34a" : "#ef4444"} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
