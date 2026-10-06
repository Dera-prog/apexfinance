"use client";

import { useState } from "react";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Card, Button } from "@/components/ui";
import { naira, nairaCompact } from "@/lib/format";
import { WALLET_BALANCE, TRANSACTIONS, USER } from "@/lib/data";
import { Landmark, CreditCard, Copy, CheckCircle2, ArrowUpRight, ArrowDownLeft, PiggyBank, TrendingUp } from "lucide-react";

const CAT_ICON = {
  wallet: ArrowDownLeft,
  transfer: ArrowUpRight,
  savings: PiggyBank,
  invest: TrendingUp,
};

export default function WalletPage() {
  const [showAccount, setShowAccount] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(USER.accountNumber).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="Wallet" />
      <div className="space-y-4 px-5 pt-1">
        <div className="rounded-card bg-gradient-to-br from-apex-600 to-apex-900 p-5 text-white shadow-blue">
          <p className="text-sm text-blue-100">Wallet Balance</p>
          <p className="mt-1 text-3xl font-extrabold">{naira(WALLET_BALANCE)}</p>
          <p className="mt-2 text-xs text-blue-200">Naira wallet • {USER.bankPartner}</p>
        </div>

        {/* Fund wallet */}
        <div>
          <p className="mb-2 text-base font-bold text-ink">Fund wallet</p>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setShowAccount(!showAccount)} className="rounded-card border-2 border-slate-200 p-4 text-left hover:border-apex-500">
              <Landmark size={22} className="text-apex-600" />
              <p className="mt-2 text-sm font-bold text-ink">Bank Transfer</p>
              <p className="text-xs text-muted">Free • instant via NIP</p>
            </button>
            <button className="rounded-card border-2 border-slate-200 p-4 text-left hover:border-apex-500">
              <CreditCard size={22} className="text-apex-600" />
              <p className="mt-2 text-sm font-bold text-ink">Debit Card</p>
              <p className="text-xs text-muted">Verve / Mastercard</p>
            </button>
          </div>

          {showAccount && (
            <Card className="mt-3 bg-apex-50">
              <p className="text-xs text-muted">Transfer to this dedicated account:</p>
              <p className="mt-1 text-lg font-extrabold tracking-wide text-apex-900">
                {USER.accountNumber} • Apex/{USER.bankPartner.split(" ")[0]}
              </p>
              <p className="mt-0.5 text-xs text-ink font-semibold">{USER.fullName}</p>
              <button onClick={copy} className="mt-3 flex items-center gap-1.5 rounded-btn bg-apex-600 px-3 py-2 text-xs font-bold text-white">
                {copied ? <><CheckCircle2 size={13} /> Copied!</> : <><Copy size={13} /> Copy account number</>}
              </button>
            </Card>
          )}
          <p className="mt-2 text-center text-[11px] text-muted">Coming soon: USSD funding & salary inflow</p>
        </div>

        {/* Transaction history */}
        <div>
          <p className="mb-2 text-base font-bold text-ink">Transaction history</p>
          <Card className="divide-y divide-slate-100 !p-0">
            {TRANSACTIONS.map((t) => {
              const Icon = CAT_ICON[t.category];
              return (
                <div key={t.id} className="flex items-center gap-3 px-4 py-3">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${t.amount >= 0 ? "bg-green-100 text-success" : "bg-slate-100 text-muted"}`}>
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">{t.title}</p>
                    <p className="text-xs text-muted">{t.subtitle} • {t.date}</p>
                  </div>
                  <span className={`text-sm font-bold ${t.amount >= 0 ? "text-success" : "text-ink"}`}>
                    {t.amount >= 0 ? "+" : "−"}{nairaCompact(Math.abs(t.amount))}
                  </span>
                </div>
              );
            })}
          </Card>
        </div>
        <div className="pb-2">
          <Button href="/withdraw">Withdraw to Bank</Button>
        </div>
      </div>
    </PhoneShell>
  );
}
