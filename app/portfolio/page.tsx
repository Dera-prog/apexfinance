"use client";

import Link from "next/link";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Card, Badge, Button } from "@/components/ui";
import { StockLogo, AreaChart } from "@/components/StockChart";
import { naira, pct } from "@/lib/format";
import { HOLDINGS, stockByTicker, portfolioValue, portfolioGain, portfolioGainPct, portfolioCost } from "@/lib/data";

const PORTFOLIO_1M = [
  21400, 21800, 21250, 22100, 22600, 22300, 23100, 23400, 22900, 23600, 24200, 23900,
  24500, 24100, 24800, 25200, 24900, 25600, 26100, 25800, 26400, 26900, 26600, 27300,
  27800, 27500, 28200, 28600, 28300, 29000,
];

export default function Portfolio() {
  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="My Portfolio" />
      <div className="space-y-4 px-5 pt-1">
        {/* Overview */}
        <div className="rounded-card bg-gradient-to-br from-apex-600 to-apex-900 p-5 text-white shadow-blue">
          <p className="text-sm text-blue-100">Total investment value</p>
          <p className="mt-1 text-3xl font-extrabold">{naira(portfolioValue)}</p>
          <div className="mt-2 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-white/15 px-2.5 py-1 font-semibold text-green-200">
              ▲ {naira(portfolioGain)} ({pct(portfolioGainPct)})
            </span>
            <span className="text-blue-200">Cost: {naira(portfolioCost)}</span>
          </div>
        </div>

        <Card className="!p-2">
          <div className="flex items-center justify-between px-3 pt-2">
            <p className="text-sm font-bold text-ink">Performance (1M)</p>
            <Badge tone="green">▲ {pct(portfolioGainPct)}</Badge>
          </div>
          <AreaChart data={PORTFOLIO_1M} up={true} height={120} />
        </Card>

        {/* Holdings */}
        <div>
          <p className="mb-2 text-base font-bold text-ink">Your holdings</p>
          <div className="space-y-2.5">
            {HOLDINGS.map((h) => {
              const s = stockByTicker(h.ticker)!;
              const value = h.units * s.price;
              const gain = value - h.units * h.avgPrice;
              const gainPct = (gain / (h.units * h.avgPrice)) * 100;
              return (
                <Card key={h.ticker} className="!p-3.5">
                  <Link href={`/invest/${s.ticker}`} className="flex items-center gap-3">
                    <StockLogo initials={s.initials} color={s.color} />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-ink">{s.name}</p>
                      <p className="text-xs text-muted">{h.units} units @ {naira(h.avgPrice)} avg</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-ink">{naira(value)}</p>
                      <p className={`text-xs font-semibold ${gain >= 0 ? "text-success" : "text-danger"}`}>
                        {gain >= 0 ? "▲" : "▼"} {naira(Math.abs(gain))} ({pct(gainPct)})
                      </p>
                    </div>
                  </Link>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Link href={`/invest/${s.ticker}/buy`}>
                      <span className="flex items-center justify-center rounded-btn bg-apex-600 py-2 text-xs font-bold text-white hover:bg-apex-700">Buy more</span>
                    </Link>
                    <span className="flex cursor-pointer items-center justify-center rounded-btn border-2 border-slate-200 py-2 text-xs font-bold text-ink hover:border-danger hover:text-danger">Sell</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Button href="/invest" variant="secondary">+ Buy New Shares</Button>
        <p className="pb-2 text-center text-[11px] text-muted">
          Custody of your shares is held with our SEC-licensed partner. Prices update during NGX trading hours (9:30 AM – 2:30 PM WAT).
        </p>
      </div>
    </PhoneShell>
  );
}
