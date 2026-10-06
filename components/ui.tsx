import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  disabled,
  type,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  const styles: Record<string, string> = {
    primary: "bg-apex-600 text-white shadow-blue hover:bg-apex-700",
    secondary: "bg-white text-apex-600 border-2 border-apex-600 hover:bg-apex-50",
    danger: "bg-danger text-white hover:bg-red-600",
    ghost: "bg-apex-50 text-apex-700 hover:bg-apex-100",
  };
  const cls = `w-full flex items-center justify-center gap-2 rounded-btn px-4 py-4 text-base font-semibold transition-colors disabled:opacity-40 disabled:pointer-events-none ${styles[variant]} ${className}`;
  if (href)
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-card shadow-soft p-4 ${className}`}>{children}</div>;
}

export function Badge({
  children,
  tone = "blue",
  className = "",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "red" | "amber" | "gray";
  className?: string;
}) {
  const tones: Record<string, string> = {
    blue: "bg-apex-100 text-apex-700",
    green: "bg-green-100 text-success",
    red: "bg-red-100 text-danger",
    amber: "bg-amber-100 text-amber-700",
    gray: "bg-slate-100 text-muted",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

export function ProgressBar({ value, tone = "blue" }: { value: number; tone?: "blue" | "green" }) {
  return (
    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
      <div
        className={`h-full rounded-full ${tone === "green" ? "bg-success" : "bg-apex-500"} transition-all`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>}
      <input
        {...props}
        className={`w-full rounded-input border bg-white px-4 py-3.5 text-base outline-none transition-colors placeholder:text-slate-400 ${
          error ? "border-danger" : "border-slate-200 focus:border-apex-500 focus:ring-2 focus:ring-apex-100"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-danger">{error}</span>}
    </label>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-base font-bold text-ink">{children}</h2>
      {action}
    </div>
  );
}

export function TrustRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-[11px] text-muted ${className}`}>
      <span className="flex items-center gap-1">🛡️ SEC-licensed partner</span>
      <span className="flex items-center gap-1">🏦 Funds held with regulated banks</span>
    </div>
  );
}
