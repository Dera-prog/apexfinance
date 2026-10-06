"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneShell, TopBar } from "@/components/Phone";
import { Button } from "@/components/ui";
import { Fingerprint } from "lucide-react";

const STEPS = ["Phone number", "Verify OTP", "Create PIN"];

export default function Auth() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [biometric, setBiometric] = useState(true);
  const [error, setError] = useState("");

  const next = () => {
    setError("");
    if (step === 0 && phone.replace(/\D/g, "").length !== 10) {
      setError("Enter a valid 10-digit phone number");
      return;
    }
    if (step === 1 && otp.join("").length !== 4) {
      setError("Enter the 4-digit code sent by SMS");
      return;
    }
    if (step === 2 && pin.join("").length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }
    if (step < 2) setStep(step + 1);
    else router.push("/home");
  };

  const digits = (arr: string[], set: (v: string[]) => void) =>
    arr.map((d, i) => (
      <input
        key={i}
        inputMode="numeric"
        maxLength={1}
        value={d}
        onChange={(e) => {
          const v = e.target.value.replace(/\D/g, "");
          const copy = [...arr];
          copy[i] = v;
          set(copy);
          if (v && i < 3) (e.target.nextElementSibling as HTMLInputElement | null)?.focus();
        }}
        className="h-14 w-full rounded-input border-2 border-slate-200 bg-white text-center text-xl font-bold text-ink outline-none focus:border-apex-500"
      />
    ));

  return (
    <PhoneShell hideNav className="bg-white">
      <TopBar title={STEPS[step]} />
      <div className="px-6 pt-2">
        {/* Progress indicator — Step X of 3 */}
        <p className="text-xs font-semibold uppercase tracking-wide text-apex-600">Step {step + 1} of 3</p>
        <div className="mt-2 flex gap-2">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-apex-600" : "bg-slate-200"}`} />
          ))}
        </div>

        {step === 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink">What&apos;s your phone number?</h2>
            <p className="mt-1 text-sm text-muted">No email required — we&apos;ll send a code by SMS.</p>
            <div className="mt-6">
              <label className="mb-1.5 block text-sm font-medium text-ink">Phone number</label>
              <div className="flex gap-2">
                <span className="flex items-center rounded-input border border-slate-200 bg-surface px-3 text-base font-semibold text-ink">🇳🇬 +234</span>
                <input
                  inputMode="tel"
                  placeholder="803 456 7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-input border bg-white px-4 py-3.5 text-base outline-none border-slate-200 focus:border-apex-500 focus:ring-2 focus:ring-apex-100"
                />
              </div>
              {error && <p className="mt-1 text-xs text-danger">{error}</p>}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink">Enter verification code</h2>
            <p className="mt-1 text-sm text-muted">
              We sent a 4-digit code to <span className="font-semibold text-ink">+234 {phone}</span> by SMS. Code expires in 10 minutes.
            </p>
            <div className="mt-6 flex gap-3">{digits(otp, setOtp)}</div>
            {error && <p className="mt-2 text-xs text-danger">{error}</p>}
            <p className="mt-4 text-center text-sm text-apex-600 font-semibold">Resend code</p>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink">Create your 4-digit PIN</h2>
            <p className="mt-1 text-sm text-muted">You&apos;ll use this PIN to confirm withdrawals and trades.</p>
            <div className="mt-6 flex gap-3">{digits(pin, setPin)}</div>
            {error && <p className="mt-2 text-xs text-danger">{error}</p>}
            <button
              onClick={() => setBiometric(!biometric)}
              className="mt-6 flex w-full items-center justify-between rounded-card border border-slate-200 p-4"
            >
              <span className="flex items-center gap-3">
                <Fingerprint size={24} className="text-apex-600" />
                <span className="text-left">
                  <span className="block text-sm font-semibold text-ink">Use biometric login</span>
                  <span className="block text-xs text-muted">Face ID or fingerprint (optional)</span>
                </span>
              </span>
              <span className={`h-6 w-11 rounded-full p-0.5 transition-colors ${biometric ? "bg-apex-600" : "bg-slate-300"}`}>
                <span className={`block h-5 w-5 rounded-full bg-white transition-transform ${biometric ? "translate-x-5" : ""}`} />
              </span>
            </button>
          </div>
        )}

        <div className="mt-10">
          <Button onClick={next}>{step === 2 ? "Finish & Continue" : "Continue"}</Button>
        </div>
      </div>
    </PhoneShell>
  );
}
