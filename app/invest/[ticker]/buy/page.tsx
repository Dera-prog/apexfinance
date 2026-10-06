"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Button, Card } from "@/components/ui";
import { StockLogo } from "@/components/StockChart";
import { naira } from "@/lib/format";
import { stockByTicker, WALLET_BALANCE } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function BuyShares() {
  const { ticker } = useParams<{ ticker: string }>();
  const stock = stockByTicker(ticker);
  const [mode, setMode] = useState<"units" | "amount">("amount");
  const [units, setUnits] = useState("10");
  const [amount, setAmount] = useState("");
  const [fractional, setFractional] = useState(true);
  const [done, setDone] = useState(false);
  if (!stock) notFound();

  const buyAmount = mode === "units" ? parseFloat(units) * stock.price : parseFloat(amount.replace(/,/g, "")) || 0;
  const buyUnits = mode === "units" ? parseFloat(units) || 0 : buyAmount / stock.price;
  const fee = buyAmount > 0 ? Math.max(50, buyAmount * 0.0035) : 0; // 0.35% brokerage (SEC cap 0.75%)
  const total = buyAmount + fee;
  const canBuy = buyAmount >= 500 && total <= WALLET_BALANCE;

  // 1-year projection at stock's recent trend — illustrative only
  const estReturn = buyAmount * 0.09;

  if (done)
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <CheckCircle2 size={72} className="text-success" />
          <h2 className="mt-4 text-xl font-bold text-ink">Trade Confirmed 🎉</h2>
          <p className="mt-2 text-sm text-muted">
            You bought <span className="font-bold text-ink">{buyUnits.toFixed(fractional ? 4 : 0)} units</span> of {stock.ticker} for {naira(buyAmount)}.
          </p>
          <Card className="mt-6 w-full text-left">
            <Row label="Company" value={stock.name} />
            <Row label="Price per share" value={naira(stock.price)} />
            <Row label="Units" value={buyUnits.toFixed(4)} />
            <Row label="Brokerage fee" value={naira(fee)} />
            <Row label="Total paid" value={naira(total)} bold />
            <Row label="Order ID" value={"APX-" + Math.random().toString(36).slice(2, 10).toUpperCase()} />
          </Card>
          <div className="mt-8 w-full space-y-3">
            <Button href="/portfolio">View Portfolio</Button>
            <Button href="/invest" variant="secondary">Back to Invest</Button>
          </div>
        </div>
      </PhoneShell>
    );

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="Buy Shares" />
      <div className="space-y-5 px-6 pt-2">
        <div className="flex items-center gap-3">
          <StockLogo initials={stock.initials} color={stock.color} size={44} />
          <div>
            <p className="text-sm font-bold text-ink">{stock.name}</p>
            <p className="text-xs text-muted">{stock.ticker} • {naira(stock.price)} per share</p>
          </div>
        </div>

        {/* Buy by units / amount */}
        <div className="flex rounded-btn bg-slate-200/70 p-1">
          {(["amount", "units"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 rounded-[9px] py-2 text-sm font-semibold ${mode === m ? "bg-white text-apex-700 shadow-soft" : "text-muted"}`}
            >
              {m === "amount" ? "By Amount (₦)" : "By Shares"}
            </button>
          ))}
        </div>

        {mode === "amount" ? (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Amount to invest</span>
            <input
              inputMode="decimal"
              placeholder="e.g. 10,000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-input border border-slate-200 px-4 py-3.5 text-lg font-bold outline-none focus:border-apex-500 focus:ring-2 focus:ring-apex-100"
            />
            <div className="mt-2 flex gap-2">
              {[1000, 5000, 10000, 25000].map((q) => (
                <button key={q} onClick={() => setAmount(String(q))} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold hover:bg-apex-100">
                  ₦{q.toLocaleString()}
                </button>
              ))}
            </div>
          </label>
        ) : (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Number of shares</span>
            <input
              inputMode="decimal"
              placeholder="e.g. 10"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              className="w-full rounded-input border border-slate-200 px-4 py-3.5 text-lg font-bold outline-none focus:border-apex-500 focus:ring-2 focus:ring-apex-100"
            />
            <p className="mt-1 text-xs text-muted">≈ {naira((parseFloat(units) || 0) * stock.price)}</p>
          </label>
        )}

        {/* Fractional toggle */}
        <button
          onClick={() => setFractional(!fractional)}
          className="flex w-full items-center justify-between rounded-card border border-slate-200 p-4"
        >
          <span className="text-left">
            <span className="block text-sm font-semibold text-ink">Fractional shares</span>
            <span className="block text-xs text-muted">Buy part of a share from ₦500</span>
          </span>
          <span className={`h-6 w-11 rounded-full p-0.5 transition-colors ${fractional ? "bg-apex-600" : "bg-slate-300"}`}>
            <span className={`block h-5 w-5 rounded-full bg-white transition-transform ${fractional ? "translate-x-5" : ""}`} />
          </span>
        </button>

        {/* Summary */}
        <Card>
          <p className="mb-2 text-sm font-bold text-ink">Investment summary</p>
          <Row label={`You get${fractional ? " (approx)" : ""}`} value={`${buyUnits.toFixed(fractional ? 4 : 0)} units`} />
          <Row label="Brokerage fee (0.35%)" value={naira(fee)} />
          <Row label="Total debit from wallet" value={naira(total)} bold />
          <div className="mt-2 rounded-lg bg-green-50 p-2.5 text-[11px] leading-relaxed text-success">
            📈 Estimated return in 1 year (if +9%): <span className="font-bold">+{naira(estReturn)}</span>. This is an estimate, not a promise.
          </div>
        </Card>

        <Button onClick={() => setDone(true)} disabled={!canBuy}>Confirm Purchase</Button>
        {buyAmount > 0 && total > WALLET_BALANCE && (
          <p className="text-center text-xs text-danger">Insufficient wallet balance ({naira(WALLET_BALANCE)})</p>
        )}
        <p className="pb-2 text-center text-[11px] leading-relaxed text-muted">
          ⚠️ Investments carry risk — prices can go up or down. You could get back less than you invested. Executed by our SEC-licensed broker partner.
        </p>
      </div>
    </PhoneShell>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className="text-muted">{label}</span>
      <span className={bold ? "font-extrabold text-ink" : "font-semibold text-ink"}>{value}</span>
    </div>
  );
}
