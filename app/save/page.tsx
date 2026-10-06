"use client";

import { PhoneShell } from "@/components/Phone";
import { Card, Button, ProgressBar, Badge } from "@/components/ui";
import { naira, nairaCompact } from "@/lib/format";
import { SAVINGS_PLANS, totalSavings, totalInterest } from "@/lib/data";
import { Plus, Lock, ArrowLeftRight, Target } from "lucide-react";

const TYPE_META = {
  Flexible: { icon: ArrowLeftRight, tone: "blue" as const, note: "Withdraw anytime" },
  Fixed: { icon: Lock, tone: "amber" as const, note: "Locked • higher interest" },
  Target: { icon: Target, tone: "green" as const, note: "Goal-based savings" },
};

export default function Save() {
  return (
    <PhoneShell>
      <div className="px-5 pt-3">
        <h1 className="text-xl font-bold text-ink">Savings</h1>
        <p className="text-xs text-muted">Save as low as ₦500 • Earn up to 12% yearly</p>

        {/* Overview */}
        <div className="mt-4 rounded-card bg-gradient-to-br from-apex-600 to-apex-900 p-5 text-white shadow-blue">
          <p className="text-sm text-blue-100">Total Savings</p>
          <p className="mt-1 text-3xl font-extrabold">{naira(totalSavings)}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-blue-100">
            <span className="rounded-full bg-white/15 px-2.5 py-1 font-semibold text-green-200">
              + {nairaCompact(totalInterest)} interest earned
            </span>
            <span>Held with licensed bank partner</span>
          </div>
        </div>

        {/* Savings cards */}
        <div className="mt-5 space-y-3">
          {SAVINGS_PLANS.map((plan) => {
            const meta = TYPE_META[plan.type];
            const Icon = meta.icon;
            const progress = plan.goal ? (plan.balance / plan.goal) * 100 : 100;
            return (
              <Card key={plan.id}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-apex-50 text-xl">{plan.emoji}</span>
                    <div>
                      <p className="text-sm font-bold text-ink">{plan.name}</p>
                      <p className="flex items-center gap-1 text-[11px] text-muted">
                        <Icon size={11} /> {meta.note} • {plan.frequency}
                      </p>
                    </div>
                  </div>
                  <Badge tone={meta.tone}>{plan.interestRate}% p.a.</Badge>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-ink">{naira(plan.balance)}</p>
                    {plan.goal && (
                      <p className="text-[11px] text-muted">Goal: {nairaCompact(plan.goal)} {plan.matures && `• by ${plan.matures}`}</p>
                    )}
                    {!plan.goal && plan.matures && <p className="text-[11px] text-muted">Matures {plan.matures}</p>}
                  </div>
                  <p className="text-xs font-semibold text-success">+ {nairaCompact(plan.interestEarned)} earned</p>
                </div>
                {plan.goal && (
                  <div className="mt-2">
                    <ProgressBar value={progress} tone="green" />
                    <p className="mt-1 text-right text-[11px] font-semibold text-muted">{progress.toFixed(0)}% complete</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* No group savings — deliberately excluded from MVP */}
        <div className="mt-5">
          <Button href="/save/create">
            <Plus size={18} /> Create New Savings
          </Button>
          <p className="mt-3 text-center text-[11px] text-muted">
            💡 Interest is paid monthly. Funds are held with our licensed bank partner.
          </p>
        </div>
      </div>
    </PhoneShell>
  );
}
