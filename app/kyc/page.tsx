"use client";

import { useState } from "react";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Card, Button, Badge, ProgressBar, Input } from "@/components/ui";
import { KYC_LEVELS, USER } from "@/lib/data";
import { CheckCircle2, CircleDashed, IdCard, Camera, ScanFace } from "lucide-react";

export default function Kyc() {
  const [step, setStep] = useState<"levels" | "bvn" | "selfie" | "done">("levels");
  const [bvn, setBvn] = useState("");
  const currentLevel = USER.kycLevel; // 2 — working on Level 3

  if (step === "bvn")
    return (
      <PhoneShell hideNav className="bg-white">
        <TopBar title="Level 2 — BVN" />
        <div className="space-y-5 px-6 pt-4">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-apex-100 text-apex-700"><IdCard size={30} /></span>
            <h2 className="mt-3 text-lg font-bold text-ink">Verify your BVN</h2>
            <p className="mt-1 text-sm text-muted">We&apos;ll fetch your name from BVN — no documents needed.</p>
          </div>
          <Input label="Bank Verification Number" placeholder="11-digit BVN" inputMode="numeric" maxLength={11} value={bvn} onChange={(e) => setBvn(e.target.value.replace(/\D/g, ""))} />
          <Card className="bg-apex-50 !p-3">
            <p className="text-[11px] leading-relaxed text-apex-900">🔐 Your BVN is encrypted and only used for identity checks, as required by the CBN. We never store it in plain text. (NDPA compliant)</p>
          </Card>
          <Button onClick={() => setStep("selfie")} disabled={bvn.length !== 11}>Verify BVN</Button>
        </div>
      </PhoneShell>
    );

  if (step === "selfie")
    return (
      <PhoneShell hideNav className="bg-white">
        <TopBar title="Level 2 — Selfie Check" />
        <div className="flex flex-col items-center px-6 pt-6 text-center">
          <div className="relative flex h-56 w-44 items-center justify-center rounded-[2rem] border-4 border-dashed border-apex-300 bg-apex-50">
            <ScanFace size={72} className="text-apex-400" />
            <span className="absolute -bottom-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-apex-700 shadow-soft">Live check</span>
          </div>
          <h2 className="mt-8 text-lg font-bold text-ink">Take a selfie</h2>
          <p className="mt-1 text-sm text-muted">Look straight at the camera in good light. We match your face to your BVN record. Takes ~10 seconds.</p>
          <ul className="mt-4 w-full space-y-2 text-left text-xs text-muted">
            <li>✅ Good lighting on your face</li>
            <li>✅ Remove sunglasses or face covers</li>
            <li>✅ Hold the phone at eye level</li>
          </ul>
          <div className="mt-8 w-full space-y-3">
            <Button onClick={() => setStep("done")}><Camera size={16} /> Start Selfie Check</Button>
            <Button variant="ghost" onClick={() => setStep("levels")}>Maybe later</Button>
          </div>
        </div>
      </PhoneShell>
    );

  if (step === "done")
    return (
      <PhoneShell hideNav className="bg-white">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <CheckCircle2 size={72} className="text-success" />
          <h2 className="mt-4 text-xl font-bold text-ink">KYC Verified ✅</h2>
          <p className="mt-2 text-sm text-muted">Your identity is confirmed. You can now invest in Nigerian stocks with higher limits.</p>
          <div className="mt-8 w-full space-y-3">
            <Button href="/invest">Start Investing</Button>
            <Button href="/home" variant="secondary">Back to Home</Button>
          </div>
        </div>
      </PhoneShell>
    );

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title="KYC Verification" />
      <div className="space-y-4 px-5 pt-2">
        <Card className="bg-apex-50">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold text-apex-900">Level {currentLevel} of 3 — {USER.tier}</span>
            <span className="text-xs font-semibold text-apex-700">65%</span>
          </div>
          <div className="mt-2"><ProgressBar value={65} /></div>
          <p className="mt-2 text-xs text-apex-900">👉 Complete KYC to unlock investments & higher limits</p>
        </Card>

        <p className="text-xs text-muted">Progressive KYC — start saving instantly, unlock more as you verify. No need to submit everything upfront.</p>

        {KYC_LEVELS.map((lvl) => {
          const completed = lvl.level <= currentLevel;
          const inProgress = lvl.level === currentLevel + 1;
          return (
            <Card key={lvl.level} className={inProgress ? "border-2 border-apex-500" : ""}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {completed ? <CheckCircle2 size={20} className="text-success" /> : <CircleDashed size={20} className={inProgress ? "text-apex-600" : "text-slate-300"} />}
                  <p className="text-sm font-bold text-ink">Level {lvl.level} — {lvl.name}</p>
                </div>
                {completed && <Badge tone="green">Verified</Badge>}
                {inProgress && <Badge tone="blue">In progress</Badge>}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="mb-1 font-semibold text-muted">Requires</p>
                  {lvl.requirements.map((r) => <p key={r} className="text-ink">• {r}</p>)}
                </div>
                <div>
                  <p className="mb-1 font-semibold text-muted">Unlocks</p>
                  {lvl.unlocks.map((u) => <p key={u} className="text-ink">• {u}</p>)}
                </div>
              </div>
              {inProgress && (
                <div className="mt-3">
                  <Button onClick={() => setStep("bvn")}>Continue Verification</Button>
                </div>
              )}
            </Card>
          );
        })}

        <p className="pb-2 text-center text-[11px] leading-relaxed text-muted">
          KYC & AML compliant per CBN / SEC / NIBSS regulations. Your data is protected under the Nigeria Data Protection Act (NDPA).
        </p>
      </div>
    </PhoneShell>
  );
}
