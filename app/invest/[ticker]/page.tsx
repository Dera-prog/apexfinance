"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Button, Card, Badge } from "@/components/ui";
import { StockLogo, AreaChart } from "@/components/StockChart";
import { naira, nairaCompact, pct } from "@/lib/format";
import { stockByTicker } from "@/lib/data";

const RANGES = ["1D", "1W", "1M"] as const;

export default function StockDetail() {
  const { ticker } = useParams<{ ticker: string }>();
  const stock = stockByTicker(ticker);
  const [range, setRange] = useState<(typeof RANGES)[number]>("1W");
  if (!stock) notFound();

  const data =
    range === "1D" ? stock.history1D : range === "1W" ? stock.history1W : stock.history1M;
  const up = stock.change >= 0;
  const riskTone = stock.risk === "Low" ? "green" : stock.risk === "Medium" ? "amber" : "red";

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar
        title={stock.ticker}
        right={<Badge tone={riskTone as "green"}>{stock.risk} risk</Badge>}
      />
      <div className="space-y-4 px-5 pt-1">
        <div className="flex items-center gap-3">
          <StockLogo initials={stock.initials} color={stock.color} size={48} />
          <div>
            <h2 className="text-base font-bold leading-tight text-ink">{stock.name}</h2>
            <p className="text-xs text-muted">{stock.sector} • NGX</p>
          </div>
        </div>

        <div>
          <p className="text-3xl font-extrabold text-ink">{naira(stock.price)}</p>
          <p className={`mt-0.5 text-sm font-semibold ${up ? "text-success" : "text-danger"}`}>
            {up ? "▲" : "▼"} {pct(stock.change)} today
          </p>
        </div>

        {/* Price chart */}
        <div>
          <div className="mb-2 flex gap-2">
            {RANGES.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                  range === r ? "bg-apex-600 text-white" : "bg-slate-100 text-muted"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <AreaChart data={data} up={up} height={150} />
        </div>

        {/* Key stats */}
        <Card className="grid grid-cols-2 gap-3">
          <Stat label="Market cap" value={nairaCompact(stock.marketCap)} />
          <Stat label="P/E ratio" value={stock.pe ? stock.pe.toFixed(1) : "—"} />
          <Stat label="Dividend yield" value={stock.dividendYield ? `${stock.dividendYield}%` : "—"} />
          <Stat label="Risk level" value={stock.risk} />
        </Card>

        {/* Company overview — simple language */}
        <Card>
          <p className="mb-1 text-sm font-bold text-ink">About {stock.name.split(" ")[0]}</p>
          <p className="text-[13px] leading-relaxed text-muted">{stock.about}</p>
        </Card>

        <Card className="bg-apex-50">
          <p className="text-xs leading-relaxed text-apex-900">
            💡 <span className="font-bold">How investing works:</span> you buy small pieces of a company. If the company grows, your pieces can gain value. Prices can go up or down.
          </p>
        </Card>

        <div className="space-y-3 pb-2">
          <Button href={`/invest/${stock.ticker}/buy`}>Buy Shares</Button>
          <p className="text-center text-[11px] leading-relaxed text-muted">
            ⚠️ Investments carry risk. SEC-required disclosure: past performance does not guarantee future returns.
          </p>
        </div>
      </div>
    </PhoneShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-muted">{label}</p>
      <p className="text-sm font-bold text-ink">{value}</p>
    </div>
  );
}
