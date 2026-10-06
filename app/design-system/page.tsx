import Link from "next/link";
import { Button, Card, Badge, ProgressBar, Input } from "@/components/ui";
import { StockLogo } from "@/components/StockChart";
import { ArrowLeft } from "lucide-react";

const BLUES = [
  { name: "apex-50", hex: "#eff5ff", use: "Tinted backgrounds" },
  { name: "apex-100", hex: "#dbe8ff", use: "Badges, icon chips" },
  { name: "apex-300", hex: "#9dc0ff", use: "Borders, illustrations" },
  { name: "apex-500", hex: "#2f74f5", use: "Progress, links, focus" },
  { name: "apex-600", hex: "#1d5ce0", use: "PRIMARY — buttons, tabs" },
  { name: "apex-700", hex: "#1749b8", use: "Hover states, gradients" },
  { name: "apex-900", hex: "#0c2d6b", use: "Gradient end, emphasis" },
];

const SUPPORT = [
  { name: "Ink", hex: "#0f172a", use: "Headings & text" },
  { name: "Muted", hex: "#64748b", use: "Secondary text" },
  { name: "Surface", hex: "#f4f6f8", use: "App background" },
  { name: "Success", hex: "#16a34a", use: "Gains, positive %" },
  { name: "Warning", hex: "#f59e0b", use: "KYC pending, alerts" },
  { name: "Danger", hex: "#ef4444", use: "Losses, errors only" },
];

const TYPE = [
  { style: "H1 — 28px SemiBold (600)", cls: "text-[28px] font-semibold", sample: "Save, Grow & Invest" },
  { style: "H2 — 20px Medium (500)", cls: "text-xl font-medium", sample: "Total Balance" },
  { style: "Display — 32px ExtraBold (800)", cls: "text-[32px] font-extrabold", sample: "₦1,361,267.40" },
  { style: "Body — 14–16px Regular (400)", cls: "text-base", sample: "Start with as low as ₦1,000" },
  { style: "Caption — 12px Regular", cls: "text-xs", sample: "Funds held with licensed banks" },
];

export default function DesignSystem() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <Link href="/" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-apex-600">
        <ArrowLeft size={16} /> Back to prototype hub
      </Link>
      <h1 className="text-3xl font-extrabold text-ink">Apex Finance — Design System</h1>
      <p className="mt-1 text-sm text-muted">
        🎨 Colors • 🔤 Typography • 🧩 Components • 📐 Layout & Grid • Brand: <span className="font-bold text-apex-600">Apex Blue</span>
      </p>

      {/* Colors */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-ink">🎨 Color System — Apex Blue</h2>
        <p className="mt-1 text-sm text-muted">Blue = trust, stability, fintech-grade. Green only for positive money movement. Red only for losses/errors — never for balance.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BLUES.map((c) => (
            <Card key={c.name} className="!p-0 overflow-hidden">
              <div className="h-16" style={{ backgroundColor: c.hex }} />
              <div className="p-2.5">
                <p className="text-xs font-bold text-ink">{c.name}</p>
                <p className="text-[11px] uppercase text-muted">{c.hex}</p>
                <p className="mt-1 text-[10px] text-muted">{c.use}</p>
              </div>
            </Card>
          ))}
        </div>
        <h3 className="mt-6 text-base font-bold text-ink">Supporting colors</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SUPPORT.map((c) => (
            <Card key={c.name} className="!p-0 overflow-hidden">
              <div className="h-12" style={{ backgroundColor: c.hex }} />
              <div className="p-2.5">
                <p className="text-xs font-bold text-ink">{c.name} <span className="font-normal uppercase text-muted">{c.hex}</span></p>
                <p className="text-[10px] text-muted">{c.use}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">🔤 Typography — Inter</h2>
        <p className="mt-1 text-sm text-muted">Single family (Inter, via Google Fonts) for excellent fintech readability and developer friendliness.</p>
        <Card className="mt-4 space-y-4">
          {TYPE.map((t) => (
            <div key={t.style} className="border-b border-slate-100 pb-3 last:border-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{t.style}</p>
              <p className={`mt-1 text-ink ${t.cls}`}>{t.sample}</p>
            </div>
          ))}
        </Card>
      </section>

      {/* Components */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">🧩 Core Components</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <p className="mb-3 text-sm font-bold text-ink">Buttons (min height 48px — large tap targets)</p>
            <div className="space-y-3">
              <Button>Primary — Create Account</Button>
              <Button variant="secondary">Secondary — Log In</Button>
              <Button variant="ghost">Ghost — quick action</Button>
              <Button variant="danger">Danger — limited use</Button>
              <Button disabled>Disabled state</Button>
            </div>
          </Card>
          <Card>
            <p className="mb-3 text-sm font-bold text-ink">Inputs & controls</p>
            <div className="space-y-3">
              <Input label="Amount (₦)" placeholder="0.00" />
              <Input label="Account number" placeholder="Error state" error="Invalid NUBAN — must be 10 digits" />
            </div>
          </Card>
          <Card>
            <p className="mb-3 text-sm font-bold text-ink">Badges & progress</p>
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge tone="blue">Blue — info</Badge>
              <Badge tone="green">▲ +2.15%</Badge>
              <Badge tone="red">▼ −0.83%</Badge>
              <Badge tone="amber">KYC pending</Badge>
              <Badge tone="gray">Low risk</Badge>
            </div>
            <p className="text-xs font-semibold text-muted">KYC progress — 65%</p>
            <div className="mt-1.5"><ProgressBar value={65} /></div>
            <p className="mt-3 text-xs font-semibold text-muted">Savings goal — 46%</p>
            <div className="mt-1.5"><ProgressBar value={46} tone="green" /></div>
          </Card>
          <Card>
            <p className="mb-3 text-sm font-bold text-ink">Cards & stock identity</p>
            <div className="rounded-card bg-gradient-to-br from-apex-600 to-apex-900 p-4 text-white shadow-blue">
              <p className="text-xs text-blue-100">Balance Card (gradient apex-600 → apex-900)</p>
              <p className="mt-1 text-2xl font-extrabold">₦1,361,267.40</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <StockLogo initials="MTN" color="#f5b301" size={36} />
              <StockLogo initials="GT" color="#f97316" size={36} />
              <StockLogo initials="DC" color="#0c2d6b" size={36} />
              <p className="text-xs text-muted">Stock logos — circular swatches with brand initials</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Layout */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">📐 Layout, Spacing & Shape</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <ul className="space-y-2 text-sm text-ink">
              <li>• <span className="font-semibold">Grid:</span> 8pt spacing system</li>
              <li>• <span className="font-semibold">Mobile-first:</span> 360px / 375px viewports</li>
              <li>• <span className="font-semibold">Card padding:</span> 16–20px</li>
              <li>• <span className="font-semibold">Button padding:</span> 14–16px vertical</li>
              <li>• <span className="font-semibold">Corner radius:</span> cards 16px, buttons 12px, inputs 10px</li>
              <li>• <span className="font-semibold">Shadows:</span> soft elevation (0 4px 16px @ 6% ink)</li>
            </ul>
          </Card>
          <Card>
            <p className="mb-2 text-sm font-bold text-ink">Iconography</p>
            <ul className="space-y-1.5 text-sm text-ink">
              <li>• Outline style, rounded edges, consistent 2px stroke</li>
              <li>• Library: <span className="font-semibold">Lucide</span> (Feather-compatible)</li>
              <li>• Bottom nav icons: Home, PiggyBank, TrendingUp, User</li>
            </ul>
            <p className="mb-2 mt-4 text-sm font-bold text-ink">UX writing voice</p>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>❌ “Asset allocation” → ✅ “Where your money is invested”</li>
              <li>❌ “Market volatility” → ✅ “Prices can go up or down”</li>
              <li>Friendly • Simple • Reassuring • No jargon</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Dark mode */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">🌙 Dark Mode (Phase 2 token set)</h2>
        <Card className="mt-4 !bg-[#111827] !text-white">
          <p className="text-sm text-slate-300">Charcoal background #111827 • Soft blue accents apex-300/500 • reduced eye strain. Toggle lives in Profile → Appearance.</p>
          <div className="mt-3 flex gap-2">
            <Badge tone="blue">apex-300 accents</Badge>
            <Badge tone="green">success #4ade80</Badge>
          </div>
        </Card>
      </section>
    </main>
  );
}
