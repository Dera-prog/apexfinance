import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Bell, Eye, PiggyBank, ArrowDownLeft, TrendingUp, ChevronLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { StockLogo } from "@/components/StockChart";

// -------------------------------------------------------------
// App Store screenshots — 6.5" iOS spec: 1242 × 2688 px (ratio 9:19.5)
// Rendered live at 400×788 → export at 3.105× for store submission.
// -------------------------------------------------------------

function Shot({
  headline,
  subtext,
  screen,
  note,
}: {
  headline: string;
  subtext: string;
  screen: ReactNode;
  note: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex w-[400px] flex-col items-center overflow-hidden rounded-[28px] bg-gradient-to-b from-apex-50 via-white to-apex-100 px-6 pt-8 shadow-card"
        style={{ height: 868 }}
        id={`shot-${note.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <h3 className="text-center text-[26px] font-extrabold leading-tight text-ink">{headline}</h3>
        <p className="mt-1.5 text-center text-[14px] leading-snug text-muted">{subtext}</p>
        {/* Phone mockup */}
        <div className="relative mt-5 h-[600px] w-[290px] overflow-hidden rounded-[36px] border-[8px] border-slate-900 bg-white shadow-card">
          <div className="absolute left-1/2 top-1.5 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
          <div className="flex h-full flex-col pt-6 text-[9px]">{screen}</div>
        </div>
        {/* Logo — appears once, bottom */}
        <div className="absolute bottom-4 flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-apex-500 to-apex-800 text-[9px] font-black text-white">A</span>
          <span className="text-[11px] font-extrabold text-ink">Apex <span className="text-apex-600">Finance</span></span>
        </div>
      </div>
      <p className="mt-2 max-w-[400px] text-center text-xs text-muted">{note}</p>
    </div>
  );
}

function MiniNav({ active }: { active: string }) {
  const tabs = [
    { id: "home", label: "Home", icon: Bell },
    { id: "save", label: "Save", icon: PiggyBank },
    { id: "invest", label: "Invest", icon: TrendingUp },
    { id: "profile", label: "Profile", icon: ShieldCheck },
  ];
  return (
    <div className="mt-auto flex justify-around border-t border-slate-200 bg-white py-1.5">
      {tabs.map((t) => (
        <span key={t.id} className={`flex flex-col items-center gap-0.5 text-[7px] font-medium ${t.id === active ? "text-apex-600" : "text-slate-400"}`}>
          <t.icon size={12} />
          {t.label}
        </span>
      ))}
    </div>
  );
}

export default function Screenshots() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Link href="/" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-apex-600">
        <ArrowLeft size={16} /> Back to prototype hub
      </Link>
      <h1 className="text-3xl font-extrabold text-ink">🏷 App Store Screenshots & Mockups</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        7 store-ready screenshots following the final spec. iOS 6.5&quot; target: <span className="font-semibold text-ink">1242 × 2688 px</span> (export these at 3.105× scale).
        Android 1080 × 1920 export at 2.7×. Visual style: clean soft-gray/blue background, phone mockup, big benefits, minimal text, single logo placement.
      </p>
      <div className="mt-4 rounded-card bg-apex-50 p-4 text-sm text-apex-900">
        <p className="font-bold">Store listing copy</p>
        <p className="mt-1">Title: <span className="font-semibold">ApexFinance – Save, Withdraw & Invest</span></p>
        <p>Subtitle: <span className="font-semibold">Smart saving & investing made simple</span></p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-12">
        {/* 1 — Hero */}
        <Shot
          headline="Save, Withdraw & Invest — All in One App"
          subtext="Smart money management made for Africa."
          note="Screenshot 1 — Hero: Home Dashboard. The single most important screenshot; benefits-first headline."
          screen={
            <>
              <div className="flex items-center justify-between px-3">
                <div>
                  <p className="text-[8px] text-slate-400">Good morning,</p>
                  <p className="text-[11px] font-bold text-ink">Dera 👋</p>
                </div>
                <Bell size={12} className="text-ink" />
              </div>
              <div className="mx-3 mt-2 rounded-xl bg-gradient-to-br from-apex-600 to-apex-900 p-3 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] text-blue-200">Total Balance</p>
                  <Eye size={10} className="text-blue-200" />
                </div>
                <p className="mt-0.5 text-[16px] font-extrabold">₦1,361,267.40</p>
                <p className="mt-1 inline-block rounded-full bg-white/15 px-1.5 py-0.5 text-[7px] font-semibold text-green-300">▲ +2.3% this week</p>
              </div>
              <div className="mx-3 mt-2 grid grid-cols-3 gap-1.5">
                {[
                  { l: "Save", i: PiggyBank, c: "bg-apex-100 text-apex-700" },
                  { l: "Withdraw", i: ArrowDownLeft, c: "bg-green-100 text-green-600" },
                  { l: "Buy Shares", i: TrendingUp, c: "bg-amber-100 text-amber-600" },
                ].map((a) => (
                  <span key={a.l} className="flex flex-col items-center gap-0.5">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${a.c}`}><a.i size={13} /></span>
                    <span className="text-[7px] font-semibold text-ink">{a.l}</span>
                  </span>
                ))}
              </div>
              <div className="mx-3 mt-2 grid grid-cols-2 gap-1.5">
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <p className="text-[7px] text-slate-400">Savings Balance</p>
                  <p className="text-[10px] font-bold text-ink">₦873,900</p>
                  <p className="text-[6px] font-semibold text-green-600">+ ₦37,930 interest</p>
                </div>
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <p className="text-[7px] text-slate-400">Investment Value</p>
                  <p className="text-[10px] font-bold text-ink">₦47,350.75</p>
                  <p className="text-[6px] font-semibold text-green-600">▲ +8.4% all time</p>
                </div>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-white p-2 shadow-sm">
                <p className="text-[7px] text-slate-400">Portfolio performance • Last 7 days</p>
                <svg viewBox="0 0 200 40" className="mt-1 h-8 w-full">
                  <polyline points="0,30 30,26 60,29 90,20 120,16 150,19 180,10 200,7" fill="none" stroke="#1d5ce0" strokeWidth="2" />
                </svg>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-white p-2 text-center shadow-sm">
                <p className="text-[6.5px] text-slate-400">🛡️ SEC-compliant partner • Funds held with licensed banks</p>
              </div>
              <MiniNav active="home" />
            </>
          }
        />

        {/* 2 — Savings */}
        <Shot
          headline="Save Money with Ease"
          subtext="Flexible, fixed & target savings from as low as ₦500."
          note="Screenshot 2 — Savings: progress bars and interest earned are the heroes."
          screen={
            <>
              <div className="px-3 pt-1">
                <p className="text-[12px] font-bold text-ink">Savings</p>
                <p className="text-[7px] text-slate-400">Save as low as ₦500 • Earn up to 12% yearly</p>
              </div>
              <div className="mx-3 mt-2 rounded-xl bg-gradient-to-br from-apex-600 to-apex-900 p-3 text-white">
                <p className="text-[8px] text-blue-200">Total Savings</p>
                <p className="text-[16px] font-extrabold">₦873,900.00</p>
                <p className="mt-1 inline-block rounded-full bg-white/15 px-1.5 py-0.5 text-[7px] font-semibold text-green-300">+ ₦37,930 interest earned</p>
              </div>
              {[
                { e: "🏦", n: "Flexible Savings", b: "₦125,400.00", r: "8% p.a.", p: 100, note: "Withdraw anytime" },
                { e: "🏠", n: "Rent Fund", b: "₦412,000.00", r: "12% p.a.", p: 46, note: "Goal ₦900K • 46% done" },
                { e: "🔒", n: "Fixed Savings", b: "₦250,000.00", r: "13.5% p.a.", p: 100, note: "Matures Mar 2027" },
                { e: "🎓", n: "School Fees", b: "₦86,500.00", r: "11% p.a.", p: 25, note: "Goal ₦350K • 25% done" },
              ].map((s) => (
                <div key={s.n} className="mx-3 mt-1.5 rounded-lg bg-white p-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[8.5px] font-bold text-ink">{s.e} {s.n}</p>
                    <p className="text-[8.5px] font-extrabold text-ink">{s.b}</p>
                  </div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${s.p === 100 ? "bg-apex-500" : "bg-green-500"}`} style={{ width: `${s.p}%` }} />
                  </div>
                  <div className="mt-0.5 flex justify-between text-[6px] text-slate-400">
                    <span>{s.note}</span>
                    <span className="font-bold text-apex-600">{s.r}</span>
                  </div>
                </div>
              ))}
              <div className="mx-3 mt-2 rounded-lg bg-apex-600 py-1.5 text-center text-[8px] font-bold text-white">➕ Create New Savings</div>
              <MiniNav active="save" />
            </>
          }
        />

        {/* 3 — Withdrawals */}
        <Shot
          headline="Access Your Money Anytime"
          subtext="Fast withdrawals to Nigerian banks."
          note="Screenshot 3 — Withdrawals: shows withdraw screen + success confirmation side by side."
          screen={
            <>
              <div className="flex items-center gap-1 px-3 pt-1">
                <ChevronLeft size={11} className="text-ink" />
                <p className="text-[11px] font-bold text-ink">Withdraw Funds</p>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-apex-50 p-2">
                <div className="flex justify-between text-[8px]">
                  <span className="text-slate-500">Available balance</span>
                  <span className="font-extrabold text-apex-700">₦486,250.75</span>
                </div>
              </div>
              <div className="mx-3 mt-2 rounded-lg border border-slate-200 p-2">
                <p className="text-[7px] text-slate-400">Amount (₦)</p>
                <p className="text-[13px] font-extrabold text-ink">30,000</p>
              </div>
              <div className="mx-3 mt-1.5 flex gap-1.5">
                <span className="flex-1 rounded-lg border-2 border-apex-600 bg-apex-50 p-1.5 text-center text-[7px] font-bold text-apex-700">🏦 Nigerian Bank</span>
                <span className="flex-1 rounded-lg border border-slate-200 p-1.5 text-center text-[7px] font-semibold text-slate-400">💼 In-app Wallet</span>
              </div>
              <div className="mx-3 mt-1.5 rounded-lg bg-white p-2 shadow-sm">
                <p className="text-[7.5px] font-bold text-ink">Fee breakdown</p>
                {[["Amount", "₦30,000.00"], ["Transfer fee (NIP)", "₦25.00"], ["Total debit", "₦30,025.00"]].map(([l, v], i) => (
                  <div key={l} className={`flex justify-between py-0.5 text-[7px] ${i === 2 ? "font-extrabold text-ink" : "text-slate-500"}`}>
                    <span>{l}</span><span>{v}</span>
                  </div>
                ))}
                <p className="text-[5.5px] text-slate-400">No hidden charges.</p>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-apex-600 py-1.5 text-center text-[8px] font-bold text-white">Confirm Withdrawal</div>
              {/* Success state */}
              <div className="mx-3 mt-3 flex-1 rounded-xl bg-white p-3 text-center shadow-sm">
                <CheckCircle2 size={26} className="mx-auto text-green-600" />
                <p className="mt-1 text-[10px] font-extrabold text-ink">Withdrawal Successful ✅</p>
                <p className="mt-0.5 text-[7px] text-slate-400">₦30,000 sent to Access Bank • arrives in under 5 minutes</p>
                <div className="mt-1.5 rounded-md bg-slate-50 p-1.5 text-left text-[6.5px] text-slate-500">
                  <p className="flex justify-between"><span>Reference</span><span className="font-bold text-ink">APX-8F2KQ41Z</span></p>
                </div>
              </div>
              <MiniNav active="home" />
            </>
          }
        />

        {/* 4 — Investing */}
        <Shot
          headline="Invest in Top Companies"
          subtext="Buy Nigerian shares with small amounts."
          note="Screenshot 4 — Investing: MTN, GTCO and Dangote Cement front and center."
          screen={
            <>
              <div className="flex items-center justify-between px-3 pt-1">
                <p className="text-[12px] font-bold text-ink">Invest</p>
                <span className="rounded-full bg-apex-100 px-1.5 py-0.5 text-[6.5px] font-bold text-apex-700">🇳🇬 Nigerian Stocks (NGX)</span>
              </div>
              <div className="mx-3 mt-2 rounded-xl bg-gradient-to-br from-apex-600 to-apex-900 p-2.5 text-white">
                <p className="text-[7.5px] text-blue-200">Portfolio Value</p>
                <p className="text-[14px] font-extrabold">₦47,350.75</p>
                <p className="text-[7px] font-semibold text-green-300">▲ ₦3,668.20 (+8.4%) all time</p>
              </div>
              <div className="mx-3 mt-2 flex rounded-md bg-slate-200/70 p-0.5">
                <span className="flex-1 rounded bg-white py-1 text-center text-[7px] font-bold text-apex-700">All Companies</span>
                <span className="flex-1 py-1 text-center text-[7px] font-semibold text-slate-400">My Portfolio</span>
              </div>
              {[
                { i: "MTN", c: "#f5b301", n: "MTN Nigeria", t: "MTNN", p: "₦298.50", d: "−0.83%", down: true },
                { i: "GT", c: "#f97316", n: "Guaranty Trust Holding", t: "GTCO", p: "₦58.20", d: "+2.15%", down: false },
                { i: "DC", c: "#0c2d6b", n: "Dangote Cement", t: "DANGCEM", p: "₦542.00", d: "+1.28%", down: false },
                { i: "ZB", c: "#dc2626", n: "Zenith Bank", t: "ZENITHBANK", p: "₦57.40", d: "+0.70%", down: false },
                { i: "UBA", c: "#dc2626", n: "United Bank for Africa", t: "UBA", p: "₦29.10", d: "+1.04%", down: false },
              ].map((s) => (
                <div key={s.t} className="mx-3 mt-1.5 flex items-center gap-1.5 rounded-lg bg-white p-1.5 shadow-sm">
                  <StockLogo initials={s.i} color={s.c} size={20} />
                  <div className="flex-1">
                    <p className="text-[7.5px] font-bold leading-tight text-ink">{s.n}</p>
                    <p className="text-[6px] text-slate-400">{s.t}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[7.5px] font-bold text-ink">{s.p}</p>
                    <p className={`text-[6px] font-bold ${s.down ? "text-red-500" : "text-green-600"}`}>{s.d}</p>
                  </div>
                </div>
              ))}
              <div className="mx-3 mt-2 rounded-lg bg-apex-600 py-1.5 text-center text-[8px] font-bold text-white">Buy Shares</div>
              <MiniNav active="invest" />
            </>
          }
        />

        {/* 5 — Portfolio growth */}
        <Shot
          headline="Track Your Growth"
          subtext="See profits, losses, and performance clearly."
          note="Screenshot 5 — Portfolio: gains in blue/green per brand rules (never red unless negative)."
          screen={
            <>
              <div className="flex items-center gap-1 px-3 pt-1">
                <ChevronLeft size={11} className="text-ink" />
                <p className="text-[11px] font-bold text-ink">My Portfolio</p>
              </div>
              <div className="mx-3 mt-2 rounded-xl bg-gradient-to-br from-apex-600 to-apex-900 p-3 text-white">
                <p className="text-[8px] text-blue-200">Total investment value</p>
                <p className="text-[16px] font-extrabold">₦47,350.75</p>
                <p className="mt-1 inline-block rounded-full bg-white/15 px-1.5 py-0.5 text-[7px] font-semibold text-green-300">▲ ₦3,668.20 (+8.41%)</p>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-white p-2 shadow-sm">
                <div className="flex justify-between text-[7.5px]">
                  <span className="font-bold text-ink">Performance (1M)</span>
                  <span className="rounded-full bg-green-100 px-1.5 font-bold text-green-700">▲ +8.41%</span>
                </div>
                <svg viewBox="0 0 200 50" className="mt-1 h-12 w-full">
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1d5ce0" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1d5ce0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,50 0,42 25,38 50,40 75,32 100,28 125,30 150,20 175,14 200,8 200,50" fill="url(#pg)" />
                  <polyline points="0,42 25,38 50,40 75,32 100,28 125,30 150,20 175,14 200,8" fill="none" stroke="#1d5ce0" strokeWidth="2" />
                </svg>
              </div>
              {[
                { i: "GT", c: "#f97316", n: "Guaranty Trust Holding", u: "240 units @ ₦52.40 avg", v: "₦13,968.00", g: "▲ +₦1,392 (+11.07%)", up: true },
                { i: "MTN", c: "#f5b301", n: "MTN Nigeria", u: "45 units @ ₦305.20 avg", v: "₦13,432.50", g: "▼ −₦301 (−2.19%)", up: false },
                { i: "DC", c: "#0c2d6b", n: "Dangote Cement", u: "18 units @ ₦528.00 avg", v: "₦9,756.00", g: "▲ +₦252 (+2.65%)", up: true },
                { i: "UBA", c: "#dc2626", n: "United Bank for Africa", u: "310 units @ ₦27.15 avg", v: "₦9,021.00", g: "▲ +₦604 (+7.15%)", up: true },
              ].map((h) => (
                <div key={h.n} className="mx-3 mt-1.5 flex items-center gap-1.5 rounded-lg bg-white p-1.5 shadow-sm">
                  <StockLogo initials={h.i} color={h.c} size={20} />
                  <div className="flex-1">
                    <p className="text-[7.5px] font-bold leading-tight text-ink">{h.n}</p>
                    <p className="text-[6px] text-slate-400">{h.u}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[7.5px] font-bold text-ink">{h.v}</p>
                    <p className={`text-[6px] font-bold ${h.up ? "text-green-600" : "text-red-500"}`}>{h.g}</p>
                  </div>
                </div>
              ))}
              <MiniNav active="invest" />
            </>
          }
        />

        {/* 6 — Security & Trust */}
        <Shot
          headline="Secure & Regulated"
          subtext="BVN-verified • SEC partner • Bank-grade security"
          note="Screenshot 6 — Security & Trust: Profile with KYC verified state. Capitalize trust words."
          screen={
            <>
              <div className="px-3 pt-1">
                <p className="text-[12px] font-bold text-ink">Profile</p>
              </div>
              <div className="mx-3 mt-2 flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-apex-500 to-apex-800 text-[10px] font-extrabold text-white">CU</span>
                <div className="flex-1">
                  <p className="text-[8.5px] font-bold text-ink">Chizoba Uzoma</p>
                  <p className="text-[6.5px] text-slate-400">+234 803 456 7890</p>
                </div>
                <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[6.5px] font-bold text-green-700">Verified ✓</span>
              </div>
              <div className="mx-3 mt-1.5 rounded-lg bg-white p-2 shadow-sm">
                <div className="flex justify-between text-[7.5px]">
                  <span className="font-bold text-ink">KYC Status — Full Access</span>
                  <span className="font-bold text-green-600">Level 3 ✓</span>
                </div>
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-green-500" />
                </div>
                <p className="mt-1 text-[6px] text-slate-400">BVN ✓ • NIN ✓ • Selfie ✓ • Address ✓ — all features unlocked</p>
              </div>
              <div className="mx-3 mt-1.5 rounded-lg bg-white shadow-sm">
                {[
                  ["🔐", "Change PIN", ""],
                  ["👆", "Biometric Login", "on"],
                  ["🛡️", "Two-Factor Authentication", "on"],
                ].map(([e, l, on]) => (
                  <div key={l} className="flex items-center gap-1.5 border-b border-slate-50 px-2 py-1.5 last:border-0">
                    <span className="text-[9px]">{e}</span>
                    <span className="flex-1 text-[7.5px] font-semibold text-ink">{l}</span>
                    {on ? <span className="h-2.5 w-5 rounded-full bg-apex-600 p-0.5"><span className="ml-auto block h-1.5 w-1.5 rounded-full bg-white" /></span> : <span className="text-[6.5px] text-slate-300">›</span>}
                  </div>
                ))}
              </div>
              <div className="mx-3 mt-1.5 rounded-lg bg-apex-50 p-2">
                <p className="flex items-center gap-1 text-[7px] font-bold text-apex-900"><ShieldCheck size={9} className="text-green-600" /> SEC-licensed investment partner</p>
                <p className="mt-0.5 text-[6.5px] text-apex-900">🏦 Funds held with CBN-licensed, NDIC-insured banks</p>
                <p className="text-[6.5px] text-apex-900">🔐 KYC & AML compliant • Your data is protected (NDPA)</p>
              </div>
              <MiniNav active="profile" />
            </>
          }
        />

        {/* 7 — Beginner friendly */}
        <Shot
          headline="Built for Beginners"
          subtext="Simple language. No hidden charges."
          note="Screenshot 7 (optional) — Beginner friendly: education card + tooltip UI on stock detail."
          screen={
            <>
              <div className="flex items-center gap-1 px-3 pt-1">
                <ChevronLeft size={11} className="text-ink" />
                <p className="text-[11px] font-bold text-ink">GTCO</p>
                <span className="ml-auto rounded-full bg-green-100 px-1.5 py-0.5 text-[6.5px] font-bold text-green-700">Low risk</span>
              </div>
              <div className="mx-3 mt-2 flex items-center gap-2">
                <StockLogo initials="GT" color="#f97316" size={28} />
                <div>
                  <p className="text-[9px] font-bold text-ink">Guaranty Trust Holding Company</p>
                  <p className="text-[6.5px] text-slate-400">Banking • NGX</p>
                </div>
              </div>
              <div className="mx-3 mt-1.5">
                <p className="text-[15px] font-extrabold text-ink">₦58.20</p>
                <p className="text-[7.5px] font-bold text-green-600">▲ +2.15% today</p>
              </div>
              <div className="mx-3 mt-1.5 rounded-lg bg-white p-1 shadow-sm">
                <div className="mb-1 flex gap-1">
                  {["1D", "1W", "1M"].map((r, i) => (
                    <span key={r} className={`rounded-full px-1.5 py-0.5 text-[6px] font-bold ${i === 1 ? "bg-apex-600 text-white" : "bg-slate-100 text-slate-400"}`}>{r}</span>
                  ))}
                </div>
                <svg viewBox="0 0 200 40" className="h-9 w-full">
                  <polyline points="0,32 30,28 60,30 90,22 120,24 150,14 180,12 200,6" fill="none" stroke="#1d5ce0" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative mx-3 mt-1.5 rounded-lg bg-apex-50 p-2">
                <p className="text-[7px] font-bold leading-snug text-apex-900">💡 How investing works</p>
                <p className="mt-0.5 text-[6.5px] leading-relaxed text-apex-900">You buy small pieces of a company. If the company grows, your pieces can gain value. Prices can go up or down.</p>
                {/* Tooltip */}
                <div className="absolute -top-2.5 right-2 rounded-md bg-ink px-1.5 py-0.5 text-[6px] font-semibold text-white">Tap any term for a simple explanation ✨</div>
              </div>
              <div className="mx-3 mt-2 grid grid-cols-2 gap-1.5">
                <div className="rounded-md bg-white p-1.5 shadow-sm">
                  <p className="text-[6px] text-slate-400">Market cap</p><p className="text-[8px] font-bold text-ink">₦3.42T</p>
                </div>
                <div className="rounded-md bg-white p-1.5 shadow-sm">
                  <p className="text-[6px] text-slate-400">Dividend yield</p><p className="text-[8px] font-bold text-ink">5.8%</p>
                </div>
              </div>
              <div className="mx-3 mt-2 rounded-lg bg-apex-600 py-1.5 text-center text-[8px] font-bold text-white">Buy Shares from ₦500</div>
              <p className="mx-3 mt-1 text-center text-[5.5px] text-slate-400">⚠️ Investments carry risk. Executed by our SEC-licensed broker partner.</p>
              <MiniNav active="invest" />
            </>
          }
        />
      </div>
    </main>
  );
}
