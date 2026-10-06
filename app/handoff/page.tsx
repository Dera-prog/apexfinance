import Link from "next/link";
import { Card } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

const TOKENS_JSON = `{
  "color": {
    "primary":       { "value": "#1d5ce0", "name": "apex-600", "use": "buttons, active tabs, key actions" },
    "primaryHover":  { "value": "#1749b8", "name": "apex-700" },
    "primaryDeep":   { "value": "#0c2d6b", "name": "apex-900", "use": "gradient end" },
    "accentLight":   { "value": "#2f74f5", "name": "apex-500", "use": "links, progress, focus rings" },
    "tint":          { "value": "#eff5ff", "name": "apex-50",  "use": "tinted backgrounds" },
    "ink":           { "value": "#0f172a", "use": "headings, primary text" },
    "muted":         { "value": "#64748b", "use": "secondary text" },
    "surface":       { "value": "#f4f6f8", "use": "app background" },
    "success":       { "value": "#16a34a", "use": "gains, positive deltas ONLY" },
    "warning":       { "value": "#f59e0b", "use": "KYC pending, alerts" },
    "danger":        { "value": "#ef4444", "use": "losses, errors ONLY — never for balance" }
  },
  "typography": {
    "fontFamily": "Inter, system-ui, sans-serif",
    "h1":      { "size": 28, "weight": 600 },
    "h2":      { "size": 20, "weight": 500 },
    "display": { "size": 32, "weight": 800, "use": "balances" },
    "body":    { "size": 16, "weight": 400 },
    "caption": { "size": 12, "weight": 400 }
  },
  "spacing": { "base": 8, "unit": "px", "cardPadding": [16, 20], "buttonPaddingY": [14, 16] },
  "radius":  { "card": 16, "button": 12, "input": 10 },
  "shadow":  { "soft": "0 4px 16px rgba(15,23,42,0.06)", "card": "0 8px 24px rgba(15,23,42,0.08)" },
  "breakpoints": { "mobileFirst": 360, "designWidth": 375, "tablet": 768 }
}`;

const SCREEN_MAP = [
  ["Onboarding", "/onboarding", "Static", "Logo, headline, 3 feature rows, primary/secondary CTA, trust row"],
  ["Sign Up / Login", "/auth", "3-step client flow", "Phone (+234) → SMS OTP (4-digit, 10 min expiry) → PIN + biometric toggle; Step X of 3 indicator"],
  ["Home Dashboard", "/home", "Client (hide/show balance)", "Greeting, bell, balance card w/ eye toggle, KYC bar, quick actions, summary cards, 7-day mini chart, activity"],
  ["Savings", "/save", "Static + data", "Total savings, interest earned, Flexible/Fixed/Target cards w/ progress bars"],
  ["Create Savings", "/save/create", "Client form", "Type selector, amount (min ₦500), frequency, duration, live interest preview, success state"],
  ["Withdraw", "/withdraw", "Client multi-state", "Balance, amount, destination (bank/wallet), NUBAN validation, fee breakdown, PIN confirm, processing/success/failed+retry"],
  ["Invest", "/invest", "Client tabs + search", "Portfolio value card, tabs (All Companies / My Portfolio), NGX stock list w/ sparklines, SEC disclaimer"],
  ["Stock Detail", "/invest/[ticker]", "Client range toggle", "Price, % change, 1D/1W/1M area chart, stats, about, risk badge, education card, Buy CTA, disclaimer"],
  ["Buy Shares", "/invest/[ticker]/buy", "Client form", "Buy by amount/units, fractional toggle, brokerage 0.35%, estimated return, confirmation receipt"],
  ["Portfolio", "/portfolio", "Static + data", "Value card, 1M chart, holdings (units, avg price, gain/loss), Buy more / Sell"],
  ["Wallet", "/wallet", "Client reveal", "Balance, fund via bank transfer (dedicated NUBAN, copy) / card, transaction history"],
  ["KYC", "/kyc", "Client wizard", "Level 1/2/3 cards, progress, BVN form (11-digit), selfie liveness, success — progressive disclosure"],
  ["Profile", "/profile", "Static", "User card, KYC status bar, security (PIN, biometric, 2FA), settings, trust signals, logout"],
];

const COMPONENTS = [
  ["PhoneShell", "components/Phone.tsx", "375×812 frame on desktop, full-bleed on mobile; status bar; scroll area"],
  ["BottomNav", "components/Phone.tsx", "4 tabs (Home/Save/Invest/Profile), active = apex-600 + 2.4 stroke"],
  ["TopBar", "components/Phone.tsx", "Back chevron (history.back), title, optional right slot"],
  ["Button", "components/ui.tsx", "primary/secondary/danger/ghost; min-height 48px; radius 12px"],
  ["Card", "components/ui.tsx", "white, radius 16px, shadow-soft, p-4"],
  ["Badge", "components/ui.tsx", "blue/green/red/amber/gray pill"],
  ["ProgressBar", "components/ui.tsx", "8px track, blue or green fill"],
  ["Input", "components/ui.tsx", "radius 10px, focus ring apex-100, error text below"],
  ["AreaChart / Sparkline", "components/StockChart.tsx", "dependency-free SVG; blue when up, red when down"],
  ["StockLogo", "components/StockChart.tsx", "circular brand-color swatch + initials"],
];

export default function Handoff() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <Link href="/" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-apex-600">
        <ArrowLeft size={16} /> Back to prototype hub
      </Link>
      <h1 className="text-3xl font-extrabold text-ink">📦 Developer Handoff Package</h1>
      <p className="mt-1 text-sm text-muted">
        Everything engineering needs: design tokens, screen map, component inventory, data contracts and integration notes.
        Stack: <span className="font-semibold text-ink">Next.js 14 (App Router) • TypeScript • Tailwind CSS • lucide-react</span>
      </p>

      {/* Tokens */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-ink">1. Design Tokens (JSON — Figma/W3C DTCG style)</h2>
        <pre className="mt-3 overflow-x-auto rounded-card bg-ink p-5 text-[12px] leading-relaxed text-blue-100">{TOKENS_JSON}</pre>
      </section>

      {/* Screen map */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">2. Screen Map & Routes</h2>
        <Card className="mt-3 !p-0 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Screen</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Key elements / states</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SCREEN_MAP.map(([name, route, type, notes]) => (
                <tr key={route} className="align-top">
                  <td className="px-4 py-3 font-semibold text-ink">{name}</td>
                  <td className="px-4 py-3">
                    {route.includes("[") ? (
                      <span className="font-mono text-xs text-ink">{route}</span>
                    ) : (
                      <Link href={route} className="font-mono text-xs text-apex-600 hover:underline">{route}</Link>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">{type}</td>
                  <td className="px-4 py-3 text-xs text-muted">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* Components */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">3. Component Inventory</h2>
        <Card className="mt-3 !p-0 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wide text-muted">
              <tr><th className="px-4 py-3">Component</th><th className="px-4 py-3">File</th><th className="px-4 py-3">Spec</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPONENTS.map(([name, file, spec]) => (
                <tr key={name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-ink">{name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-apex-600">{file}</td>
                  <td className="px-4 py-3 text-xs text-muted">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* Data contract */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">4. Data Contracts (lib/data.ts)</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <Card>
            <p className="text-sm font-bold text-ink">Stock</p>
            <pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-muted">{`{ ticker, name, sector, price, change,
  marketCap, pe, dividendYield,
  risk: "Low"|"Medium"|"High",
  color, initials, about,
  history1D[], history1W[], history1M[] }`}</pre>
          </Card>
          <Card>
            <p className="text-sm font-bold text-ink">SavingsPlan</p>
            <pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-muted">{`{ id, name, type: "Flexible"|"Fixed"|"Target",
  balance, interestRate, interestEarned,
  goal?, frequency, matures?, emoji }`}</pre>
          </Card>
          <Card>
            <p className="text-sm font-bold text-ink">Txn</p>
            <pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-muted">{`{ id, title, subtitle,
  amount,  // negative = debit
  date, category }`}</pre>
          </Card>
          <Card>
            <p className="text-sm font-bold text-ink">Holding</p>
            <pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-muted">{`{ ticker, units, avgPrice }
// fractional units supported (4 d.p.)`}</pre>
          </Card>
        </div>
        <p className="mt-2 text-xs text-muted">All amounts in NGN (₦). Format via <code className="rounded bg-slate-100 px-1">lib/format.ts</code> — en-NG locale.</p>
      </section>

      {/* Integrations */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">5. Integration Notes (production)</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {[
            ["🏦 Banking / Payments", "NIBSS NIP for transfers via CBN-licensed partner bank (e.g., Providus). Payment gateway for card funding (Paystack/Flutterwave). Dedicated virtual account per user for wallet funding."],
            ["🆔 Identity / KYC", "BVN verification (NIBSS/identity provider), NIN (NIMC), selfie liveness check. Progressive KYC — Level 1 instant, Level 2 BVN+selfie, Level 3 NIN+address unlocks investing."],
            ["📈 Stocks / Brokerage", "SEC-licensed broker-dealer partner for NGX execution & custody. Delayed pricing permitted for MVP. Fractional shares via broker omnibus structure. Brokerage fee 0.35% (under SEC 0.75% cap)."],
            ["🔐 Security", "E2E encryption in transit (TLS 1.3) & at rest (AES-256). PIN + 2FA for withdrawals & trades. Biometric unlock (WebAuthn/native). Audit logs, AML monitoring, sanctions/PEP screening."],
            ["📊 Performance targets", "App load < 3s on 3G • transaction reliability > 99% • 99.5% uptime • price refresh within exchange-permitted delay."],
            ["📜 Compliance", "CBN, SEC, NDIC, NIBSS + Nigeria Data Protection Act (NDPA 2023). Mandatory risk disclosures on every invest/buy screen. No guaranteed returns language anywhere."],
          ].map(([title, body]) => (
            <Card key={title}>
              <p className="text-sm font-bold text-ink">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Export specs */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">6. Asset Export Specs</h2>
        <Card className="mt-3 text-sm text-ink">
          <ul className="space-y-1.5 text-xs leading-relaxed">
            <li>• <span className="font-semibold">App icon:</span> 1024×1024 (blue gradient rounded square, white “A” apex mark)</li>
            <li>• <span className="font-semibold">iOS screenshots:</span> 1242×2688 (6.5&quot;) — export <Link href="/screenshots" className="font-semibold text-apex-600 underline">/screenshots</Link> shots at 3.105×; max 10, use 6–7</li>
            <li>• <span className="font-semibold">Android screenshots:</span> 1080×1920 — export at 2.7×; max 8, use 6</li>
            <li>• <span className="font-semibold">Logo variants:</span> primary (blue on white), inverse (white on dark), icon-only (A)</li>
            <li>• <span className="font-semibold">Icons:</span> lucide-react, 2px stroke, outline style</li>
          </ul>
        </Card>
      </section>

      <section className="mt-10 rounded-card bg-apex-50 p-5 text-sm text-apex-900">
        <p className="font-bold">Running locally</p>
        <pre className="mt-2 overflow-x-auto text-xs">{`npm install
npm run dev     # http://localhost:3000
npm run build && npm start`}</pre>
      </section>
    </main>
  );
}
