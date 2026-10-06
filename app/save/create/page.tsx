"use client";

import { useState } from "react";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Button, Input, Card } from "@/components/ui";
import { naira } from "@/lib/format";
import { CheckCircle2 } from "lucide-react";

const TYPES = [
  { id: "Flexible", label: "Flexible", note: "Withdraw anytime", rate: 8, emoji: "🏦" },
  { id: "Fixed", label: "Fixed", note: "Locked, higher rate", rate: 13.5, emoji: "🔒" },
  { id: "Target", label: "Target", note: "Rent, school fees, travel", rate: 12, emoji: "🎯" },
];
const FREQUENCIES = ["Daily", "Weekly", "Monthly"] as const;
const DURATIONS = ["1 month", "3 months", "6 months", "12 months"];

export default function CreateSavings() {
  const [type, setType] = useState("Target");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState<(typeof FREQUENCIES)[number]>("Monthly");
  const [duration, setDuration] = useState("12 months");
  const [done, setDone] = useState(false);

  const rate = TYPES.find((t) => t.id === type)!.rate;
  const amt = parseFloat(amount.replace(/,/g, "")) || 0;
  const months = parseInt(duration) || 12;
  const projected = (amt * (rate / 100) * (months / 12));

  if (done)
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <CheckCircle2 size={72} className="text-success" />
          <h2 className="mt-4 text-xl font-bold text-ink">Savings plan created! 🎉</h2>
          <p className="mt-2 text-sm text-muted">
            We&apos;ll auto-save {naira(amt)} {frequency.toLowerCase()} into your {type} Savings at {rate}% p.a.
          </p>
          <Card className="mt-6 w-full !text-left">
            <p className="text-xs text-muted">Estimated interest in {duration}</p>
            <p className="text-2xl font-extrabold text-success">{naira(projected)}</p>
          </Card>
          <div className="mt-8 w-full space-y-3">
            <Button href="/save">Back to Savings</Button>
            <Button href="/home" variant="secondary">Go Home</Button>
          </div>
        </div>
      </PhoneShell>
    );

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="Create Savings" />
      <div className="space-y-5 px-6 pt-2">
        {/* Type selector */}
        <div>
          <p className="mb-2 text-sm font-medium text-ink">Savings type</p>
          <div className="grid grid-cols-3 gap-2">
            {TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => setType(t.id)}
                className={`rounded-card border-2 p-3 text-center transition-colors ${
                  type === t.id ? "border-apex-600 bg-apex-50" : "border-slate-200 bg-white"
                }`}
              >
                <span className="text-xl">{t.emoji}</span>
                <p className="mt-1 text-xs font-bold text-ink">{t.label}</p>
                <p className="text-[10px] text-muted">{t.note}</p>
              </button>
            ))}
          </div>
        </div>

        <Input
          label="Amount (₦)"
          placeholder="e.g. 25,000"
          inputMode="numeric"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Frequency */}
        <div>
          <p className="mb-2 text-sm font-medium text-ink">Frequency</p>
          <div className="flex gap-2">
            {FREQUENCIES.map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`flex-1 rounded-btn border-2 py-2.5 text-sm font-semibold transition-colors ${
                  frequency === f ? "border-apex-600 bg-apex-50 text-apex-700" : "border-slate-200 text-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <p className="mb-2 text-sm font-medium text-ink">Duration</p>
          <div className="grid grid-cols-2 gap-2">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`rounded-btn border-2 py-2.5 text-sm font-semibold transition-colors ${
                  duration === d ? "border-apex-600 bg-apex-50 text-apex-700" : "border-slate-200 text-muted"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Interest preview */}
        <Card className="bg-apex-50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Interest rate</span>
            <span className="font-bold text-apex-700">{rate}% per year</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted">Estimated interest ({duration})</span>
            <span className="font-bold text-success">{naira(projected)}</span>
          </div>
        </Card>

        <Button onClick={() => amt >= 500 && setDone(true)} disabled={amt < 500}>
          Start Saving
        </Button>
        {amt > 0 && amt < 500 && (
          <p className="text-center text-xs text-danger">Minimum is ₦500</p>
        )}
      </div>
    </PhoneShell>
  );
}
