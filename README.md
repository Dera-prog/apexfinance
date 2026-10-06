# Apex Finance 💙

**Save. Withdraw. Invest.** — Smart saving & investing made for Africa 🇳🇬

High-fidelity, interactive UI/UX prototype for a mobile-first fintech app localized for Nigeria/Africa: Naira-first (₦), progressive BVN/NIN KYC, NGX stock investing, CBN/SEC/NDIC/NIBSS/NDPA-aware.

Built with **Next.js 14 (App Router) • TypeScript • Tailwind CSS • lucide-react**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## What's inside

| Route | Description |
| --- | --- |
| `/` | Prototype hub — links to every screen & doc |
| `/onboarding` | Welcome screen (logo, headline, feature rows, CTAs) |
| `/auth` | 3-step signup: +234 phone → SMS OTP → PIN + biometric toggle |
| `/home` | Dashboard: balance card w/ eye toggle, KYC bar, quick actions, 7-day chart |
| `/save` | Savings overview: Flexible / Fixed / Target cards, progress & interest |
| `/save/create` | Create plan: type, amount (min ₦500), frequency, duration, interest preview |
| `/withdraw` | Withdraw to Nigerian bank or wallet: fee breakdown, PIN confirm, processing/success/failed+retry states |
| `/invest` | NGX stocks (Dangote Cement, MTN, GTCO, Zenith, UBA, BUA…), tabs + search, SEC disclaimer |
| `/invest/[ticker]` | Stock detail: 1D/1W/1M chart, stats, risk level, education card |
| `/invest/[ticker]/buy` | Buy by amount/units, fractional shares, brokerage fee, trade confirmation |
| `/portfolio` | Holdings with gain/loss, 1M performance chart, buy more / sell |
| `/wallet` | Balance, fund via transfer (dedicated NUBAN) / card, transaction history |
| `/kyc` | Progressive KYC Levels 1–3: BVN form, selfie liveness, verification states |
| `/profile` | Personal info, KYC status, security (PIN/2FA/biometric), trust signals |
| `/design-system` | Apex Blue tokens, Inter typography, components, spacing & radius |
| `/screenshots` | 7 App Store-ready mockups (iOS 1242×2688 export at 3.105×) |
| `/handoff` | Developer handoff: tokens JSON, screen map, components, data contracts, integrations |
| `/prd` | Fully localized Nigeria/Africa PRD (regulatory draft) |

## Scope notes

- **Excluded (by design):** loans, group savings (Ajo/Esusu), crypto, forex, insurance.
- Stock prices/data are realistic demo data for the prototype — not live NGX feeds.

## Brand

- **Name:** Apex Finance — short, modern, works across Africa
- **Color system:** Apex Blue (`#1d5ce0` primary, `#0c2d6b` deep) • success green for gains • red for losses/errors only
- **Typography:** Inter • **Radius:** cards 16px / buttons 12px / inputs 10px • **Spacing:** 8pt grid

© 2026 Chizoba Uzoma
