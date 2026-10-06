"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PiggyBank, TrendingUp, User, ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

const TABS = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/save", label: "Save", icon: PiggyBank },
  { href: "/invest", label: "Invest", icon: TrendingUp },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-sm items-stretch justify-around px-2 pb-5 pt-2">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-1 text-[11px] font-medium ${
                active ? "text-apex-600" : "text-slate-400"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[13px] font-semibold text-ink">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]">🇳🇬</span>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.3" y="5" width="3" height="6" rx="0.5"/><rect x="8.6" y="2.5" width="3" height="8.5" rx="0.5"/><rect x="12.9" y="0" width="3" height="11" rx="0.5" opacity="0.35"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.4"/><rect x="2" y="2" width="13" height="7" rx="1.5" fill="currentColor"/><path d="M20 4v3a2 2 0 0 0 0-3Z" fill="currentColor" opacity="0.4"/></svg>
      </div>
    </div>
  );
}

export function TopBar({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-5 pb-2 pt-1">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.history.back();
        }}
        className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-slate-100"
        aria-label="Go back"
      >
        <ChevronLeft size={22} />
      </Link>
      <h1 className="flex-1 text-lg font-bold text-ink">{title}</h1>
      {right}
    </div>
  );
}

export function PhoneShell({
  children,
  hideNav,
  className = "",
}: {
  children: ReactNode;
  hideNav?: boolean;
  className?: string;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center md:p-8">
      <div className="relative h-dvh w-full overflow-hidden bg-surface md:h-[812px] md:w-[375px] md:rounded-[44px] md:border-[10px] md:border-slate-900 md:shadow-card">
        <div className="hidden md:block absolute left-1/2 top-2.5 z-30 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className={`relative flex h-full flex-col ${className}`}>
          <StatusBar />
          <div className={`flex-1 overflow-y-auto no-scrollbar ${hideNav ? "pb-6" : "pb-24"}`}>{children}</div>
          {!hideNav && <BottomNav />}
        </div>
      </div>
    </div>
  );
}
