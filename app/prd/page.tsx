import Link from "next/link";
import { Card, Badge } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

function H2({ children, n }: { children: React.ReactNode; n: string }) {
  return <h2 className="mt-10 text-xl font-extrabold text-ink">{n}. {children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-4 text-base font-bold text-apex-700">{children}</h3>;
}
function Ul({ items }: { items: React.ReactNode[] }) {
  return <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink">{items.map((i, k) => <li key={k}>• {i}</li>)}</ul>;
}

export default function Prd() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Link href="/" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-apex-600">
        <ArrowLeft size={16} /> Back to prototype hub
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="blue">Regulatory Draft</Badge>
        <Badge tone="green">Build-ready</Badge>
        <Badge tone="amber">Last updated: Oct 2026</Badge>
      </div>
      <h1 className="mt-3 text-3xl font-extrabold text-ink">
        Apex Finance — Nigeria / Africa Localized PRD
      </h1>
      <p className="mt-2 text-sm text-muted">
        Mobile-first financial platform enabling users in Nigeria and other African markets to save money, withdraw funds,
        and invest in company shares — while promoting financial inclusion and trust.
        <span className="font-semibold text-ink"> Prepared for: Nigeria & Africa market launch. Owner: Chizoba Uzoma.</span>
      </p>

      <H2 n="1">Product Vision & Problem</H2>
      <H3>Vision</H3>
      <p className="mt-1 text-sm leading-relaxed text-ink">
        A simple, secure mobile app that helps users save money, access funds easily, and invest in company shares — all from one platform.
        Core values: <span className="font-semibold">Simplicity • Trust • Accessibility • Growth.</span>
      </p>
      <H3>Problem</H3>
      <p className="mt-1 text-sm leading-relaxed text-ink">
        Users rely on fragmented services — separate apps for savings, withdrawals and investing — causing confusion, low trust and limited
        financial growth. Existing platforms are complex, unfriendly to beginners, or inaccessible to underserved users.
      </p>
      <H3>Solution</H3>
      <p className="mt-1 text-sm leading-relaxed text-ink">
        A unified mobile-first app combining digital savings, seamless withdrawals (NIP rails) and beginner-friendly NGX share investing,
        designed with simplicity, transparency and security at its core. Naira-first (₦), low data usage, simple English, progressive KYC.
      </p>

      <H2 n="2">Regulatory Context (Nigeria-first)</H2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Card><p className="text-sm font-bold text-ink">🇳🇬 Nigeria (MVP)</p><Ul items={["CBN — banking/payments supervision via licensed partner bank", "SEC — securities regulation via licensed broker-dealer partner", "NDIC — deposit insurance at partner bank", "NIBSS — NIP transfer rails, BVN verification", "NDPA 2023 — data protection & user consent"]} /></Card>
        <Card><p className="text-sm font-bold text-ink">🌍 Africa (Phase 2)</p><Ul items={["Ghana — SEC Ghana, Bank of Ghana", "Kenya — CMA, CBK (chama-ready)", "South Africa — FSCA", "Per-country licensing before launch"]} /></Card>
      </div>

      <H2 n="3">Market & User Context</H2>
      <Ul items={[
        "Mobile-first users; many on entry-level Android devices and metered data",
        "High reliance on bank transfers & wallets; USSD still relevant (Phase 2 funding channel)",
        "Mix of formal salary and informal income (support irregular earners)",
        "Low tolerance for complex financial language; strong trust concerns — visible compliance matters",
      ]} />
      <H3>Personas</H3>
      <Ul items={[
        <span key="1"><span className="font-semibold">Salary Earner</span> — structured savings, monthly withdrawals, beginner investor</span>,
        <span key="2"><span className="font-semibold">Freelancer / SME Owner</span> — irregular income, flexible savings, wants money to grow</span>,
        <span key="3"><span className="font-semibold">First-Time Investor</span> — small capital, needs guidance and low-risk entry</span>,
        <span key="4"><span className="font-semibold">Diaspora user</span> — future phase</span>,
      ]} />

      <H2 n="4">Goals & KPIs</H2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Card><p className="text-sm font-bold text-ink">Business goals</p><Ul items={["Achieve/maintain regulatory approval via licensed partners", "Build user trust and adoption", "Enable savings-led investment growth", "Revenue from transaction fees & brokerage commissions"]} /></Card>
        <Card><p className="text-sm font-bold text-ink">KPIs</p><Ul items={["Verified users (KYC Level 2+)", "Total savings volume (₦)", "Withdrawal success rate (target > 99%)", "Investment transaction volume", "MAU, 30/90-day retention", "Regulatory compliance audits passed", "App crash rate < 0.5%"]} /></Card>
      </div>

      <H2 n="5">Regulatory & Compliance Requirements</H2>
      <H3>5.1 Banking & Payments</H3>
      <Ul items={["Partner with CBN-licensed commercial or microfinance bank (funds never held directly)", "NIBSS/NIP rails for transfers; dedicated virtual accounts for wallet funding", "Custodial account structure for investment funds", "Transparent fee schedule aligned to CBN guidance"]} />
      <H3>5.2 KYC & AML</H3>
      <Ul items={["BVN verification mandatory for Level 2+", "NIN required/recommended for Level 3", "AML transaction monitoring; sanctions & PEP screening", "Suspicious activity reporting workflow in back office"]} />
      <H3>5.3 Investment Regulations</H3>
      <Ul items={["Partner with SEC-licensed broker-dealer for NGX execution & custody", "Mandatory risk disclosures on every invest screen; no guaranteed returns language", "User suitability checks (risk level shown per stock)", "Brokerage fee 0.35% (within SEC's 0.75% commission cap)"]} />
      <H3>5.4 Data Protection</H3>
      <Ul items={["Nigeria Data Protection Act (NDPA 2023) compliance", "Explicit user consent management; data minimization", "Encryption at rest (AES-256) & in transit (TLS 1.3); BVN never stored in plain text"]} />

      <H2 n="6">Scope</H2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Card><p className="text-sm font-bold text-success">✅ MVP (regulation-safe)</p><Ul items={["Onboarding & progressive KYC (BVN/NIN)", "Wallet (₦) + bank transfer/card funding", "Savings: Flexible, Fixed, Target", "Withdrawals to Nigerian banks (NIP)", "NGX stock investing + fractional shares", "Portfolio tracking", "Security & notifications"]} /></Card>
        <Card><p className="text-sm font-bold text-apex-700">🔵 Phase 2</p><Ul items={["Global stocks 🌍", "USSD funding & salary inflow", "Automated investing", "Advanced analytics", "Africa expansion (GH/KE/ZA)", "Dark mode"]} /></Card>
        <Card><p className="text-sm font-bold text-danger">⛔ Out of scope</p><Ul items={["Loans / lending", "Group savings (Ajo/Esusu/Chama)", "Crypto assets", "Forex trading", "Insurance"]} /></Card>
      </div>

      <H2 n="7">Functional Requirements (Localized)</H2>
      <H3>7.1 Onboarding & Auth</H3>
      <Ul items={["Phone-first signup (+234 prefilled); no email required at start", "SMS OTP (expires in defined time); create 4-digit PIN; optional biometric login", "Account creation in under 2 minutes"]} />
      <H3>7.2 KYC Levels (progressive — never block early)</H3>
      <Ul items={[
        <span key="1"><span className="font-semibold">Level 1 — Basic (instant):</span> phone + full name → save money, small withdrawals (≤ ₦50k/day)</span>,
        <span key="2"><span className="font-semibold">Level 2 — Standard:</span> BVN verification + selfie (&ldquo;we&apos;ll fetch your name from BVN&rdquo;) → higher limits (≤ ₦500k/day), transfers</span>,
        <span key="3"><span className="font-semibold">Level 3 — Full Access:</span> NIN + address confirmation → stock investments, highest limits</span>,
      ]} />
      <H3>7.3 Wallet</H3>
      <Ul items={["Naira-based wallet with total balance display", "Fund via bank transfer (dedicated virtual account) or debit card", "Full transaction history; USSD funding in Phase 2"]} />
      <H3>7.4 Savings</H3>
      <Ul items={["Types: Flexible (withdraw anytime, ~8% p.a.), Fixed/Locked (higher rate, up to ~13.5% p.a.), Target (rent, school fees, travel, up to ~12% p.a.)", "Create plan: type, amount (min ₦500), frequency (daily/weekly/monthly), duration", "Real-time balance updates; clear interest disclosure; auto-save schedules", "Interest paid monthly; funds held with licensed bank partner"]} />
      <H3>7.5 Withdrawals & Transfers</H3>
      <Ul items={["Nigerian bank transfers only in MVP (NIP rails); wallet-to-wallet transfers", "Transparent fee breakdown before confirmation; PIN/biometric 2FA", "States: Processing → Successful / Failed (with retry); insufficient-balance guard", "Failed transfers never leave the wallet; clear reference numbers"]} />
      <H3>7.6 Investments (NGX Stocks)</H3>
      <Ul items={["MVP assets: NGX-listed stocks (e.g., Dangote Cement, MTN Nigeria, GTCO, Zenith Bank, Airtel Africa, BUA Foods, UBA)", "Real-time or delayed pricing as permitted; 1D/1W/1M charts; risk level per stock", "Buy by amount or units; fractional shares from ₦500 (via broker support)", "Portfolio tracking: units, avg price, current value, gain/loss; buy more / sell", "Confirmation receipt after every trade; mandatory SEC risk disclaimer"]} />

      <H2 n="8">Non-Functional Requirements</H2>
      <Ul items={[
        "Performance: app load < 3s on 3G; low data usage (compressed assets, lazy loading)",
        "Security: E2E encryption, 2FA for withdrawals & trades, secure key management, session pinning",
        "Reliability: transaction reliability > 99%; 99.5% uptime; redundant infrastructure",
        "Accessibility: large tap targets (≥48px), high contrast, large-font support",
      ]} />

      <H2 n="9">UX & Content Rules</H2>
      <Ul items={[
        "Simple English, no jargon — “Prices can go up or down”, not “market volatility”",
        "Currency always ₦; amounts in en-NG locale formatting",
        "No misleading financial promises; benefits over features in marketing copy",
        "Clear success/failure states; offline-safe loading states; beginner tooltips",
        "Trust signals visible: “SEC-licensed partner”, “Funds held with regulated banks”, “KYC & AML compliant”",
      ]} />

      <H2 n="10">Notifications</H2>
      <Ul items={["SMS & in-app: transaction alerts, savings reminders, investment confirmations, security alerts", "Regulatory/product updates; opt-in marketing only (NDPA consent)"]} />

      <H2 n="11">Admin & Back Office (compliance-focused)</H2>
      <Ul items={["KYC review dashboard; user management", "Transaction monitoring & fraud detection (AML rules)", "Suspicious activity reporting; audit logs", "Investment listings management; regulatory reporting tools; analytics"]} />

      <H2 n="12">Risk Management</H2>
      <Card className="mt-3 !p-0 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-surface text-xs uppercase text-muted"><tr><th className="px-4 py-2.5">Risk</th><th className="px-4 py-2.5">Mitigation</th></tr></thead>
          <tbody className="divide-y divide-slate-100 text-ink">
            <tr><td className="px-4 py-2.5 font-semibold">Regulatory breach</td><td className="px-4 py-2.5 text-muted">Licensed partners, compliance audits, disclosures on every trade</td></tr>
            <tr><td className="px-4 py-2.5 font-semibold">Fraud</td><td className="px-4 py-2.5 text-muted">BVN verification, AML rules, 2FA, monitoring</td></tr>
            <tr><td className="px-4 py-2.5 font-semibold">Downtime</td><td className="px-4 py-2.5 text-muted">Redundant infrastructure, retry-safe transactions</td></tr>
            <tr><td className="px-4 py-2.5 font-semibold">Loss of user trust</td><td className="px-4 py-2.5 text-muted">Transparent fees, plain-language education, visible compliance</td></tr>
          </tbody>
        </table>
      </Card>

      <H2 n="13">Rollout Strategy</H2>
      <Ul items={[
        "Phase 1 — Nigeria: savings, withdrawals, NGX stocks, BVN KYC",
        "Phase 2 — Africa: Ghana, Kenya, South Africa with localized compliance per market",
      ]} />

      <H2 n="14">Open Regulatory Questions</H2>
      <Ul items={["Custody structure approval with broker partner", "Fractional shares approval per market", "Cross-border investment limits for Phase 2", "Final interest rate structure with bank partner"]} />

      <p className="mt-10 border-t border-slate-200 pt-4 text-xs text-muted">
        Document status: Regulatory draft — prepared for Nigeria & Africa market launch. This PRD ships inside the product repo
        so design, engineering and compliance always read the same source of truth.
      </p>
    </main>
  );
}
