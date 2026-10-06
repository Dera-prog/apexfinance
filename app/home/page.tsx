"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneShell } from "@/components/Phone";
import { Card, Badge, ProgressBar } from "@/components/ui";
import { Sparkline } from "@/components/StockChart";
import { naira, nairaCompact, pct } from "@/lib/format";
import {
  USER,
  WALLET_BALANCE,
  totalSavings,
  portfolioValue,
  portfolioGainPct,
  totalInterest,
  totalBalance,
  TRANSACTIONS,
} from "@/lib/data";
import { Bell, Eye, EyeOff, PiggyBank, ArrowDownLeft, TrendingUp, ChevronRight, ShieldCheck } from "lucide-react";

const PORTFOLIO_7D = [98.2, 99.1, 98.6, 100.4, 101.2, 100.8, 102.3];

export default function Home() {
  const [hidden, setHidden] = useState(false);
  const mask = (v: number) => (hidden ? "₦ ••••••" : naira(v));

  return (
    <PhoneShell>
      {/* Greeting + bell */}
      <div className="flex items-center justify-between px-5 pt-2">
        <div>
          <p className="text-sm text-muted">Good morning,</p>
          <p className="text-lg font-bold text-ink">{USER.name} 👋</p>
        </div>
        <Link href="/profile" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
          <Bell size={20} className="text-ink" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-danger" />
        </Link>
      </div>

      <div className="space-y-4 px-5 pt-4">
        {/* KYC progress bar */}
        <Link href="/kyc">
          <Card className="!p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-ink">KYC 65% — Standard</span>
              <span className="font-semibold text-apex-600">Complete KYC →</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={65} />
            </div>
            <p className="mt-1.5 text-[11px] text-muted">👉 Add NIN & address to unlock investments</p>
          </Card>
        </Link>

        {/* Balance card */}
        <div className="rounded-card bg-gradient-to-br from-apex-600 via-apex-700 to-apex-900 p-5 text-white shadow-blue">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-100">Total Balance</p>
            <button onClick={() => setHidden(!hidden)} aria-label="Hide or show balance" className="text-blue-100">
              {hidden ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <p className="mt-1 text-3xl font-extrabold tracking-tight">{mask(totalBalance)}</p>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <Badge tone="green" className="!bg-white/15 !text-green-200">▲ +2.3% this week</Badge>
            <span className="text-blue-200">{USER.accountNumber} • {USER.bankPartner}</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { href: "/save/create", label: "Save", icon: PiggyBank, bg: "bg-apex-100 text-apex-700" },
            { href: "/withdraw", label: "Withdraw", icon: ArrowDownLeft, bg: "bg-green-100 text-success" },
            { href: "/invest", label: "Buy Shares", icon: TrendingUp, bg: "bg-amber-100 text-amber-600" },
          ].map(({ href, label, icon: Icon, bg }) => (
            <Link key={label} href={href} className="flex flex-col items-center gap-2">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} shadow-soft`}>
                <Icon size={24} />
              </span>
              <span className="text-xs font-semibold text-ink">{label}</span>
            </Link>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/save">
            <Card className="h-full">
              <p className="text-xs text-muted">Savings Balance</p>
              <p className="mt-1 text-lg font-bold text-ink">{mask(totalSavings)}</p>
              <p className="mt-1 text-[11px] font-semibold text-success">+ {nairaCompact(totalInterest)} interest</p>
            </Card>
          </Link>
          <Link href="/portfolio">
            <Card className="h-full">
              <p className="text-xs text-muted">Investment Value</p>
              <p className="mt-1 text-lg font-bold text-ink">{mask(portfolioValue)}</p>
              <p className="mt-1 text-[11px] font-semibold text-success">▲ {pct(portfolioGainPct)} all time</p>
            </Card>
          </Link>
        </div>

        {/* Wallet mini card */}
        <Link href="/wallet">
          <Card className="flex items-center justify-between !p-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-apex-50 text-apex-600">💼</span>
              <div>
                <p className="text-xs text-muted">Wallet Balance</p>
                <p className="text-sm font-bold text-ink">{mask(WALLET_BALANCE)}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </Card>
        </Link>

        {/* Mini chart — 7-day performance */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Portfolio performance</p>
              <p className="text-sm font-bold text-ink">Last 7 days <span className="text-success">▲ 2.3%</span></p>
            </div>
            <Sparkline data={PORTFOLIO_7D} up={true} />
          </div>
        </Card>

        {/* Recent transactions */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-base font-bold text-ink">Recent Activity</p>
            <Link href="/wallet" className="text-xs font-semibold text-apex-600">See all</Link>
          </div>
          <Card className="divide-y divide-slate-100 !p-0">
            {TRANSACTIONS.slice(0, 4).map((t) => (
              <div key={t.id} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{t.title}</p>
                  <p className="text-xs text-muted">{t.date}</p>
                </div>
                <span className={`text-sm font-bold ${t.amount >= 0 ? "text-success" : "text-ink"}`}>
                  {t.amount >= 0 ? "+" : "−"}{hidden ? "₦••••" : nairaCompact(Math.abs(t.amount))}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col items-center gap-1 pb-2 text-[11px] text-muted">
          <span className="flex items-center gap-1 font-semibold"><ShieldCheck size={13} className="text-success" /> SEC-compliant partner</span>
          <span>Funds held with licensed banks • NDIC-insured partner bank</span>
        </div>
      </div>
    </PhoneShell>
  );
}
