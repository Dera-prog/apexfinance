import Link from "next/link";
import {
  Smartphone, Palette, Image, Package, FileText,
  PiggyBank, ArrowDownLeft, TrendingUp, User, Home, Wallet, ShieldCheck, IdCard, PlusCircle,
} from "lucide-react";

const SCREENS = [
  { href: "/onboarding", label: "Onboarding", desc: "Welcome • Create Account / Log In", icon: Smartphone },
  { href: "/auth", label: "Sign Up / Login", desc: "+234 phone • SMS OTP • PIN • biometric", icon: ShieldCheck },
  { href: "/home", label: "Home Dashboard", desc: "Balance card • quick actions • KYC bar", icon: Home },
  { href: "/save", label: "Savings", desc: "Flexible • Fixed • Target savings", icon: PiggyBank },
  { href: "/save/create", label: "Create Savings", desc: "Type • amount • frequency • interest preview", icon: PlusCircle },
  { href: "/withdraw", label: "Withdraw Funds", desc: "Bank/wallet • fees • PIN • success/fail states", icon: ArrowDownLeft },
  { href: "/invest", label: "Invest (NGX Stocks)", desc: "Dangote, MTN, GTCO & more • live-style prices", icon: TrendingUp },
  { href: "/invest/GTCO", label: "Stock Detail", desc: "Chart 1D/1W/1M • risk level • SEC disclosure", icon: TrendingUp },
  { href: "/invest/GTCO/buy", label: "Buy Shares", desc: "Fractional shares • summary • confirmation", icon: TrendingUp },
  { href: "/portfolio", label: "Portfolio", desc: "Holdings • gains/losses • buy more / sell", icon: Wallet },
  { href: "/wallet", label: "Wallet", desc: "Fund via transfer/card • history", icon: Wallet },
  { href: "/kyc", label: "KYC Verification", desc: "Progressive BVN → selfie → NIN (Levels 1-3)", icon: IdCard },
  { href: "/profile", label: "Profile & Settings", desc: "Security • KYC status • trust signals", icon: User },
];

const DOCS = [
  { href: "/design-system", label: "Design System", desc: "Blue color tokens • typography • components • spacing", icon: Palette },
  { href: "/screenshots", label: "App Store Screenshots", desc: "7 store-ready mockups (1242×2688)", icon: Image },
  { href: "/handoff", label: "Developer Handoff", desc: "Tokens JSON • specs • screen map • integrations", icon: Package },
  { href: "/prd", label: "Localized PRD", desc: "Nigeria/Africa — CBN, SEC, NDIC, NIBSS, NDPA", icon: FileText },
];

export default function Hub() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-apex-500 to-apex-900 shadow-blue">
          <svg width="42" height="42" viewBox="0 0 34 34" fill="none">
            <path d="M17 4 L29 26 H23 L17 15 L11 26 H5 L17 4Z" fill="white" />
            <path d="M11 26 L17 20 L23 26" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">
          Apex <span className="text-apex-600">Finance</span>
        </h1>
        <p className="mt-2 max-w-xl text-lg text-muted">
          Save. Withdraw. Invest. — Smart saving & investing made for Africa 🇳🇬
        </p>
        <p className="mt-1 text-sm text-muted">
          High-fidelity interactive prototype • Mobile-first (375px) • Naira-first • BVN KYC • NGX stocks
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link href="/onboarding" className="rounded-btn bg-apex-600 px-6 py-3 text-sm font-bold text-white shadow-blue hover:bg-apex-700">
            ▶ Launch Interactive Prototype
          </Link>
          <Link href="/screenshots" className="rounded-btn border-2 border-apex-600 bg-white px-6 py-3 text-sm font-bold text-apex-600 hover:bg-apex-50">
            View Store Screenshots
          </Link>
        </div>
      </div>

      {/* App screens */}
      <section className="mt-14">
        <h2 className="text-xl font-extrabold text-ink">📱 App Screens (clickable prototype)</h2>
        <p className="mt-1 text-sm text-muted">Bottom navigation: Home • Save • Invest • Profile — persistent across the app.</p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENS.map(({ href, label, desc, icon: Icon }) => (
            <Link key={href + label} href={href} className="group rounded-card border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-apex-400 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-apex-50 text-apex-600 group-hover:bg-apex-600 group-hover:text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{label}</p>
                  <p className="text-xs text-muted">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Docs */}
      <section className="mt-14">
        <h2 className="text-xl font-extrabold text-ink">📚 Brand, Design & Product Docs</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DOCS.map(({ href, label, desc, icon: Icon }) => (
            <Link key={href} href={href} className="group rounded-card border border-slate-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-apex-400 hover:shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-apex-600 text-white">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{label}</p>
                  <p className="text-xs text-muted">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-muted">
        <p>Apex Finance — UI/UX prototype for demonstration. Not a licensed financial institution.</p>
        <p className="mt-1">© 2026 Chizoba Uzoma • Built with Next.js • Blue design system • Inter typography</p>
      </footer>
    </main>
  );
}
