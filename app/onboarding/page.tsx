"use client";

import { PhoneShell } from "@/components/Phone";
import { Button, TrustRow } from "@/components/ui";
import { PiggyBank, ArrowDownLeft, TrendingUp, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: PiggyBank, title: "Save", text: "Earn up to 12% yearly, from ₦500", color: "bg-apex-100 text-apex-700" },
  { icon: ArrowDownLeft, title: "Withdraw", text: "Fast transfers to any Nigerian bank", color: "bg-green-100 text-success" },
  { icon: TrendingUp, title: "Invest", text: "Buy MTN, GTCO, Dangote & more", color: "bg-amber-100 text-amber-600" },
];

export default function Onboarding() {
  return (
    <PhoneShell hideNav className="bg-white">
      <div className="flex h-full flex-col px-6 pt-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-apex-500 to-apex-800 shadow-blue">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M17 4 L29 26 H23 L17 15 L11 26 H5 L17 4Z" fill="white" />
              <path d="M11 26 L17 20 L23 26" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
            Apex <span className="text-apex-600">Finance</span>
          </h1>
        </div>

        <h2 className="mt-8 text-center text-xl font-bold leading-snug text-ink">
          Save, Withdraw & Invest —<br />All in One App
        </h2>
        <p className="mt-2 text-center text-sm text-muted">
          Start with as low as <span className="font-semibold text-ink">₦1,000</span>. Smart money management made for Africa.
        </p>

        {/* Feature illustrations */}
        <div className="mt-6 space-y-3">
          {FEATURES.map(({ icon: Icon, title, text, color }) => (
            <div key={title} className="flex items-center gap-3 rounded-card border border-slate-100 bg-surface p-3.5">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{title}</p>
                <p className="text-xs text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-3 pb-2">
          <Button href="/auth">Create Account</Button>
          <Button href="/auth" variant="secondary">Log In</Button>
          <div className="flex items-center justify-center gap-1 text-[11px] text-muted">
            <ShieldCheck size={13} className="text-success" /> BVN-verified • SEC partner • Bank-grade security
          </div>
          <TrustRow />
        </div>
      </div>
    </PhoneShell>
  );
}
