"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneShell } from "@/components/Phone";
import { Card, Badge } from "@/components/ui";
import { StockLogo, Sparkline } from "@/components/StockChart";
import { naira, pct } from "@/lib/format";
import { STOCKS, HOLDINGS, stockByTicker, portfolioValue, portfolioGain, portfolioGainPct } from "@/lib/data";
import { Search, Lock } from "lucide-react";

const TABS = ["All Companies", "My Portfolio"] as const;

export default function Invest() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All Companies");
  const [query, setQuery] = useState("");
  const kycUnlocked = true; // Level 2 demo — investments require Level 3 (see /kyc)

  const filtered = STOCKS.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.ticker.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <PhoneShell>
      <div className="px-5 pt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-ink">Invest</h1>
          <Badge tone="blue">🇳🇬 Nigerian Stocks (NGX)</Badge>
        </div>
        <p className="mt-1 text-xs text-muted">Global stocks 🌍 coming in Phase 2</p>

        {/* Portfolio summary */}
        <div className="mt-4 rounded-card bg-gradient-to-br from-apex-600 to-apex-900 p-5 text-white shadow-blue">
          <p className="text-sm text-blue-100">Portfolio Value</p>
          <p className="mt-1 text-3xl font-extrabold">{naira(portfolioValue)}</p>
          <p className={`mt-1 text-sm font-semibold ${portfolioGain >= 0 ? "text-green-300" : "text-red-300"}`}>
            {portfolioGain >= 0 ? "▲" : "▼"} {naira(Math.abs(portfolioGain))} ({pct(portfolioGainPct)}) all time
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex rounded-btn bg-slate-200/70 p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-[9px] py-2 text-sm font-semibold transition-colors ${
                tab === t ? "bg-white text-apex-700 shadow-soft" : "text-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "All Companies" && (
          <>
            {/* Search */}
            <div className="relative mt-4">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search MTN, GTCO, Dangote…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-input border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-apex-500"
              />
            </div>

            {/* Company list */}
            <div className="mt-3 space-y-2.5">
              {filtered.map((s) => (
                <Link key={s.ticker} href={kycUnlocked ? `/invest/${s.ticker}` : "/kyc"}>
                  <Card className="flex items-center gap-3 !p-3.5 hover:bg-apex-50">
                    <StockLogo initials={s.initials} color={s.color} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-ink">{s.name}</p>
                      <p className="text-xs text-muted">{s.ticker} • {s.sector}</p>
                    </div>
                    <Sparkline data={s.history1W} up={s.change >= 0} />
                    <div className="text-right">
                      <p className="text-sm font-bold text-ink">{naira(s.price)}</p>
                      <p className={`text-xs font-semibold ${s.change >= 0 ? "text-success" : "text-danger"}`}>
                        {pct(s.change)}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
              {filtered.length === 0 && (
                <p className="py-8 text-center text-sm text-muted">No companies match “{query}”</p>
              )}
            </div>

            {/* SEC disclaimer */}
            <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-relaxed text-muted">
              <Lock size={12} className="mt-0.5 shrink-0" />
              Trades are executed by our SEC-licensed broker-dealer partner. Investments carry risk — prices can go up or down. No returns are guaranteed.
            </p>
          </>
        )}

        {tab === "My Portfolio" && (
          <div className="mt-4 space-y-2.5">
            {HOLDINGS.map((h) => {
              const s = stockByTicker(h.ticker)!;
              const value = h.units * s.price;
              const gain = value - h.units * h.avgPrice;
              const gainPct = (gain / (h.units * h.avgPrice)) * 100;
              return (
                <Link key={h.ticker} href="/portfolio">
                  <Card className="flex items-center gap-3 !p-3.5">
                    <StockLogo initials={s.initials} color={s.color} />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-ink">{s.ticker}</p>
                      <p className="text-xs text-muted">{h.units} units @ {naira(h.avgPrice)} avg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-ink">{naira(value)}</p>
                      <p className={`text-xs font-semibold ${gain >= 0 ? "text-success" : "text-danger"}`}>
                        {gain >= 0 ? "▲" : "▼"} {pct(gainPct)}
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
            <Link href="/invest" onClick={(e) => { e.preventDefault(); setTab("All Companies"); }} className="block text-center text-sm font-semibold text-apex-600">
              + Buy more shares
            </Link>
          </div>
        )}
      </div>
    </PhoneShell>
  );
}
