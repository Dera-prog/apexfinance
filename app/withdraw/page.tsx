"use client";

import { useState } from "react";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Button, Input, Card, Badge } from "@/components/ui";
import { naira } from "@/lib/format";
import { WALLET_BALANCE } from "@/lib/data";
import { Landmark, Wallet as WalletIcon, Loader2, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

const BANKS = ["Access Bank", "GTBank", "Zenith Bank", "First Bank", "UBA", "Kuda MFB", "Opay"];
type Status = "form" | "pin" | "processing" | "success" | "failed";

export default function Withdraw() {
  const [status, setStatus] = useState<Status>("form");
  const [amount, setAmount] = useState("");
  const [dest, setDest] = useState<"bank" | "wallet">("bank");
  const [bank, setBank] = useState("Access Bank");
  const [account, setAccount] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);

  const amt = parseFloat(amount.replace(/,/g, "")) || 0;
  const fee = amt > 0 && amt <= 5000 ? 10 : amt > 5000 ? 25 : 0;
  const insufficient = amt > WALLET_BALANCE;
  const canConfirm = amt >= 100 && !insufficient && (dest === "wallet" || account.replace(/\D/g, "").length === 10);

  const submitPin = () => {
    if (pin.join("").length !== 4) return;
    setStatus("processing");
    setTimeout(() => setStatus(Math.random() < 0.85 ? "success" : "failed"), 1600);
  };

  if (status === "processing")
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <Loader2 size={64} className="animate-spin text-apex-600" />
          <h2 className="mt-5 text-xl font-bold text-ink">Processing withdrawal…</h2>
          <p className="mt-2 text-sm text-muted">Sending {naira(amt)} to {dest === "bank" ? `${bank} • ${account}` : "Apex Wallet"}</p>
        </div>
      </PhoneShell>
    );

  if (status === "success")
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <CheckCircle2 size={72} className="text-success" />
          <h2 className="mt-4 text-xl font-bold text-ink">Withdrawal Successful ✅</h2>
          <p className="mt-2 text-sm text-muted">{naira(amt)} is on its way. NIP transfers usually arrive in under 5 minutes.</p>
          <Card className="mt-6 w-full text-left">
            <Row label="Amount" value={naira(amt)} />
            <Row label="Fee" value={naira(fee)} />
            <Row label="Destination" value={dest === "bank" ? `${bank} • ${account}` : "Apex Wallet"} />
            <Row label="Reference" value={"APX-" + Math.random().toString(36).slice(2, 10).toUpperCase()} />
          </Card>
          <div className="mt-8 w-full space-y-3">
            <Button href="/home">Back to Home</Button>
            <Button href="/wallet" variant="secondary">View Transactions</Button>
          </div>
        </div>
      </PhoneShell>
    );

  if (status === "failed")
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <XCircle size={72} className="text-danger" />
          <h2 className="mt-4 text-xl font-bold text-ink">Transfer Failed</h2>
          <p className="mt-2 text-sm text-muted">
            The bank didn&apos;t confirm this transfer. <span className="font-semibold">No money left your wallet.</span> You can retry — if it keeps failing, contact support.
          </p>
          <div className="mt-8 w-full space-y-3">
            <Button onClick={() => setStatus("form")}>
              <RotateCcw size={16} /> Retry Withdrawal
            </Button>
            <Button href="/home" variant="secondary">Back to Home</Button>
          </div>
        </div>
      </PhoneShell>
    );

  if (status === "pin")
    return (
      <PhoneShell hideNav className="bg-white">
        <TopBar title="Confirm with PIN" />
        <div className="px-6 pt-4">
          <h2 className="text-xl font-bold text-ink">Enter your 4-digit PIN</h2>
          <p className="mt-1 text-sm text-muted">Confirm withdrawal of <span className="font-bold text-ink">{naira(amt + fee)}</span></p>
          <div className="mt-8 flex gap-3">
            {pin.map((d, i) => (
              <input
                key={i}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => {
                  const copy = [...pin];
                  copy[i] = e.target.value.replace(/\D/g, "");
                  setPin(copy);
                  if (copy[i] && i < 3) (e.target.nextElementSibling as HTMLInputElement | null)?.focus();
                }}
                className="h-14 w-full rounded-input border-2 border-slate-200 bg-white text-center text-xl font-bold outline-none focus:border-apex-500"
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-muted">🔐 Protected by 2FA • Biometric available</p>
          <div className="mt-8 space-y-3">
            <Button onClick={submitPin} disabled={pin.join("").length !== 4}>Confirm Withdrawal</Button>
            <Button variant="ghost" onClick={() => setStatus("form")}>Cancel</Button>
          </div>
        </div>
      </PhoneShell>
    );

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="Withdraw Funds" />
      <div className="space-y-5 px-6 pt-2">
        <Card className="flex items-center justify-between bg-apex-50">
          <span className="text-sm text-muted">Available balance</span>
          <span className="text-lg font-extrabold text-apex-700">{naira(WALLET_BALANCE)}</span>
        </Card>

        <div>
          <Input
            label="Amount (₦)"
            placeholder="0.00"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            error={insufficient ? "Insufficient balance" : undefined}
          />
          <div className="mt-2 flex gap-2">
            {[5000, 10000, 25000].map((q) => (
              <button key={q} onClick={() => setAmount(String(q))} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-ink hover:bg-apex-100">
                + ₦{q.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Destination */}
        <div>
          <p className="mb-2 text-sm font-medium text-ink">Destination</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDest("bank")}
              className={`flex items-center gap-2 rounded-card border-2 p-3 text-left text-sm font-semibold ${dest === "bank" ? "border-apex-600 bg-apex-50 text-apex-700" : "border-slate-200 text-muted"}`}
            >
              <Landmark size={18} /> Nigerian Bank
            </button>
            <button
              onClick={() => setDest("wallet")}
              className={`flex items-center gap-2 rounded-card border-2 p-3 text-left text-sm font-semibold ${dest === "wallet" ? "border-apex-600 bg-apex-50 text-apex-700" : "border-slate-200 text-muted"}`}
            >
              <WalletIcon size={18} /> In-app Wallet
            </button>
          </div>
        </div>

        {dest === "bank" && (
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Bank</span>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full rounded-input border border-slate-200 bg-white px-4 py-3.5 text-base outline-none focus:border-apex-500"
              >
                {BANKS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </label>
            <Input
              label="Account number"
              placeholder="10-digit NUBAN"
              inputMode="numeric"
              maxLength={10}
              value={account}
              onChange={(e) => setAccount(e.target.value.replace(/\D/g, ""))}
            />
            {account.length === 10 && (
              <p className="text-xs font-semibold text-success">✓ {bank} • CHIZOBA UZOMA</p>
            )}
          </div>
        )}

        {/* Fee breakdown — transparent */}
        <Card>
          <p className="mb-2 text-sm font-bold text-ink">Fee breakdown</p>
          <Row label="Amount" value={naira(amt)} />
          <Row label="Transfer fee (NIP)" value={naira(fee)} />
          <Row label="Total debit" value={naira(amt + fee)} bold />
          <p className="mt-2 text-[11px] text-muted">No hidden charges. Fee follows CBN/NIBSS guidance.</p>
        </Card>

        <Button onClick={() => setStatus("pin")} disabled={!canConfirm}>Confirm Withdrawal</Button>
        {insufficient && (
          <p className="flex items-center justify-center gap-1 text-xs text-danger">
            <Badge tone="red">Insufficient balance</Badge> Fund your wallet first
          </p>
        )}
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
