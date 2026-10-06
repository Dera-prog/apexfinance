"use client";

import Link from "next/link";
import { PhoneShell } from "@/components/Phone";
import { Card, Badge, ProgressBar } from "@/components/ui";
import { USER } from "@/lib/data";
import {
  UserCircle, ShieldCheck, Landmark, Bell, Lock, HelpCircle, LogOut,
  ChevronRight, Fingerprint, Moon, FileText,
} from "lucide-react";

const SECTIONS = [
  { icon: UserCircle, label: "Personal Info", sub: "Name, phone, email" },
  { icon: Landmark, label: "Bank Accounts", sub: "Linked Nigerian banks" },
  { icon: Bell, label: "Notifications", sub: "SMS & in-app alerts" },
  { icon: FileText, label: "Statements & Reports", sub: "Download history" },
  { icon: Moon, label: "Appearance", sub: "Light / Dark mode" },
  { icon: HelpCircle, label: "Help & Support", sub: "Chat, FAQ, call us" },
];

export default function Profile() {
  return (
    <PhoneShell>
      <div className="px-5 pt-3">
        <h1 className="text-xl font-bold text-ink">Profile</h1>

        {/* User card */}
        <Card className="mt-4 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-apex-500 to-apex-800 text-lg font-extrabold text-white">
            CU
          </div>
          <div className="flex-1">
            <p className="text-base font-bold text-ink">{USER.fullName}</p>
            <p className="text-xs text-muted">{USER.phone}</p>
            <p className="text-xs text-muted">{USER.email}</p>
          </div>
          <Badge tone="amber">Level {USER.kycLevel}</Badge>
        </Card>

        {/* KYC status with progress bar */}
        <Link href="/kyc" className="mt-3 block">
          <Card className="!p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-ink">KYC Status — {USER.tier}</p>
              <span className="text-xs font-semibold text-apex-600">Upgrade →</span>
            </div>
            <div className="mt-2"><ProgressBar value={65} /></div>
            <p className="mt-1.5 text-[11px] text-muted">65% complete • Add NIN & address to unlock investments</p>
          </Card>
        </Link>

        {/* Security settings */}
        <div className="mt-4">
          <p className="mb-2 text-base font-bold text-ink">Security</p>
          <Card className="divide-y divide-slate-100 !p-0">
            <SecurityRow icon={Lock} label="Change PIN" sub="Last changed 3 months ago" />
            <SecurityRow icon={Fingerprint} label="Biometric Login" sub="Face ID / fingerprint" toggleOn />
            <SecurityRow icon={ShieldCheck} label="Two-Factor Authentication" sub="On for withdrawals & trades" toggleOn />
          </Card>
        </div>

        {/* Settings */}
        <div className="mt-4">
          <p className="mb-2 text-base font-bold text-ink">Settings & Support</p>
          <Card className="divide-y divide-slate-100 !p-0">
            {SECTIONS.map(({ icon: Icon, label, sub }) => (
              <SecurityRow key={label} icon={Icon} label={label} sub={sub} />
            ))}
          </Card>
        </div>

        {/* Trust signals */}
        <Card className="mt-4 bg-apex-50 !p-3.5">
          <div className="flex flex-col gap-1.5 text-xs text-apex-900">
            <p className="flex items-center gap-1.5 font-bold"><ShieldCheck size={14} className="text-success" /> SEC-licensed investment partner</p>
            <p className="flex items-center gap-1.5 font-semibold"><Landmark size={14} /> Funds held with CBN-licensed, NDIC-insured banks</p>
            <p className="flex items-center gap-1.5 font-semibold"><Lock size={14} /> KYC & AML compliant • Your data is protected (NDPA)</p>
          </div>
        </Card>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-btn border-2 border-red-200 py-3.5 text-sm font-bold text-danger hover:bg-red-50">
          <LogOut size={16} /> Log Out
        </button>
        <p className="mt-3 pb-2 text-center text-[11px] text-muted">Apex Finance v1.0.0 • Made for Africa 🇳🇬</p>
      </div>
    </PhoneShell>
  );
}

function SecurityRow({
  icon: Icon,
  label,
  sub,
  toggleOn,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  toggleOn?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <Icon size={20} className="shrink-0 text-apex-600" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-xs text-muted">{sub}</p>
      </div>
      {toggleOn !== undefined ? (
        <span className={`h-6 w-11 rounded-full p-0.5 ${toggleOn ? "bg-apex-600" : "bg-slate-300"}`}>
          <span className={`block h-5 w-5 rounded-full bg-white transition-transform ${toggleOn ? "translate-x-5" : ""}`} />
        </span>
      ) : (
        <ChevronRight size={18} className="text-slate-300" />
      )}
    </div>
  );
}
