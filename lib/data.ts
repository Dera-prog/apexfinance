// ---------------------------------------------------------------
// Apex Finance — demo data (NGX-listed Nigerian stocks, ₦ prices)
// Prices are realistic sample data for the prototype.
// ---------------------------------------------------------------

export type Stock = {
  ticker: string;
  name: string;
  sector: string;
  price: number;
  change: number; // % change today
  marketCap: number; // ₦
  pe: number | null;
  dividendYield: number; // %
  risk: "Low" | "Medium" | "High";
  color: string; // logo swatch color
  initials: string;
  about: string;
  history1D: number[];
  history1W: number[];
  history1M: number[];
};

const wave = (base: number, spread: number, n: number, seed: number) =>
  Array.from({ length: n }, (_, i) =>
    +(base + spread * Math.sin((i + seed) * 1.7) + spread * 0.5 * Math.cos((i + seed) * 0.9)).toFixed(2)
  );

export const STOCKS: Stock[] = [
  {
    ticker: "DANGCEM",
    name: "Dangote Cement Plc",
    sector: "Industrial Goods",
    price: 542.0,
    change: 1.28,
    marketCap: 10_894_200_000_000,
    pe: 9.4,
    dividendYield: 3.2,
    risk: "Low",
    color: "#0c2d6b",
    initials: "DC",
    about:
      "Africa's largest cement producer, operating in over 10 countries. A blue-chip stock on the NGX, known for steady dividends.",
    history1D: wave(538, 4, 24, 1),
    history1W: wave(532, 8, 7, 3),
    history1M: wave(515, 24, 30, 5),
  },
  {
    ticker: "MTNN",
    name: "MTN Nigeria Communications",
    sector: "Telecommunications",
    price: 298.5,
    change: -0.83,
    marketCap: 6_134_100_000_000,
    pe: 7.8,
    dividendYield: 4.6,
    risk: "Medium",
    color: "#f5b301",
    initials: "MTN",
    about:
      "Nigeria's biggest telecom network with over 78 million subscribers. Earns from data, voice and its MoMo payment service.",
    history1D: wave(300, 3, 24, 2),
    history1W: wave(303, 5, 7, 4),
    history1M: wave(292, 12, 30, 6),
  },
  {
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company",
    sector: "Banking",
    price: 58.2,
    change: 2.15,
    marketCap: 3_421_500_000_000,
    pe: 5.1,
    dividendYield: 5.8,
    risk: "Low",
    color: "#f97316",
    initials: "GT",
    about:
      "One of Nigeria's most profitable banks, now a holding company spanning banking, payments and asset management.",
    history1D: wave(57, 0.8, 24, 3),
    history1W: wave(56.2, 1.4, 7, 5),
    history1M: wave(53.8, 3.6, 30, 7),
  },
  {
    ticker: "ZENITHBANK",
    name: "Zenith Bank Plc",
    sector: "Banking",
    price: 57.4,
    change: 0.7,
    marketCap: 3_601_000_000_000,
    pe: 4.8,
    dividendYield: 6.1,
    risk: "Low",
    color: "#dc2626",
    initials: "ZB",
    about:
      "A tier-1 Nigerian bank with strong earnings and one of the highest dividend payouts on the NGX.",
    history1D: wave(57, 0.5, 24, 4),
    history1W: wave(56.5, 1.1, 7, 6),
    history1M: wave(54.9, 2.8, 30, 8),
  },
  {
    ticker: "AIRTELAFRICA",
    name: "Airtel Africa Plc",
    sector: "Telecommunications",
    price: 1048.0,
    change: -1.1,
    marketCap: 3_940_000_000_000,
    pe: 12.6,
    dividendYield: 2.4,
    risk: "Medium",
    color: "#dc2626",
    initials: "AA",
    about:
      "Pan-African telecom and mobile money operator serving 14 countries across Africa. Dual-listed on the NGX and LSE.",
    history1D: wave(1055, 9, 24, 5),
    history1W: wave(1065, 15, 7, 7),
    history1M: wave(1090, 40, 30, 9),
  },
  {
    ticker: "BUAFOODS",
    name: "BUA Foods Plc",
    sector: "Consumer Goods",
    price: 86400.0,
    change: 3.42,
    marketCap: 15_552_000_000_000,
    pe: 21.3,
    dividendYield: 1.1,
    risk: "High",
    color: "#16a34a",
    initials: "BF",
    about:
      "Nigeria's leading food processing company — sugar, flour, rice and pasta. One of the fastest-growing stocks on the NGX.",
    history1D: wave(84800, 900, 24, 6),
    history1W: wave(83000, 2200, 7, 8),
    history1M: wave(77500, 6500, 30, 10),
  },
  {
    ticker: "BUACEMENT",
    name: "BUA Cement Plc",
    sector: "Industrial Goods",
    price: 138.75,
    change: 0.54,
    marketCap: 2_636_000_000_000,
    pe: 10.2,
    dividendYield: 3.6,
    risk: "Medium",
    color: "#0891b2",
    initials: "BC",
    about:
      "Fast-growing cement producer expanding capacity across Nigeria to meet construction demand.",
    history1D: wave(138, 1, 24, 7),
    history1W: wave(137.4, 1.8, 7, 9),
    history1M: wave(134.2, 4.2, 30, 11),
  },
  {
    ticker: "UBA",
    name: "United Bank for Africa",
    sector: "Banking",
    price: 29.1,
    change: 1.04,
    marketCap: 2_006_700_000_000,
    pe: 3.9,
    dividendYield: 7.2,
    risk: "Medium",
    color: "#dc2626",
    initials: "UBA",
    about:
      "Pan-African bank operating in 20 countries. Affordable entry price makes it popular with first-time investors.",
    history1D: wave(28.8, 0.3, 24, 8),
    history1W: wave(28.4, 0.6, 7, 10),
    history1M: wave(27.5, 1.4, 30, 12),
  },
  {
    ticker: "FBNH",
    name: "First Bank of Nigeria Holdings",
    sector: "Banking",
    price: 28.35,
    change: -0.53,
    marketCap: 1_560_300_000_000,
    pe: 4.2,
    dividendYield: 5.4,
    risk: "Medium",
    color: "#1749b8",
    initials: "FB",
    about:
      "Nigeria's oldest bank (130+ years). A stable, dividend-paying stock suitable for long-term saving.",
    history1D: wave(28.5, 0.2, 24, 9),
    history1W: wave(28.7, 0.4, 7, 11),
    history1M: wave(27.9, 0.9, 30, 13),
  },
  {
    ticker: "NESTEGG",
    name: "Nestlé Nigeria Plc",
    sector: "Consumer Goods",
    price: 142.6,
    change: 0.35,
    marketCap: 567_000_000_000,
    pe: null,
    dividendYield: 0.0,
    risk: "High",
    color: "#7c3aed",
    initials: "NE",
    about:
      "Maker of Maggi, Milo, Golden Morn and Nestlé Pure Life. A household name recovering from FX headwinds.",
    history1D: wave(142, 1.2, 24, 10),
    history1W: wave(141, 2.4, 7, 12),
    history1M: wave(138, 6, 30, 14),
  },
];

export const stockByTicker = (t: string) => STOCKS.find((s) => s.ticker === t.toUpperCase());

// ---------------------------------------------------------------
// Portfolio holdings
// ---------------------------------------------------------------
export type Holding = {
  ticker: string;
  units: number;
  avgPrice: number;
};

export const HOLDINGS: Holding[] = [
  { ticker: "GTCO", units: 240, avgPrice: 52.4 },
  { ticker: "MTNN", units: 45, avgPrice: 305.2 },
  { ticker: "DANGCEM", units: 18, avgPrice: 528.0 },
  { ticker: "UBA", units: 310, avgPrice: 27.15 },
];

// ---------------------------------------------------------------
// Wallet & savings
// ---------------------------------------------------------------
export const WALLET_BALANCE = 486_250.75;

export type SavingsPlan = {
  id: string;
  name: string;
  type: "Flexible" | "Fixed" | "Target";
  balance: number;
  interestRate: number; // % p.a.
  interestEarned: number;
  goal?: number;
  frequency: "Daily" | "Weekly" | "Monthly";
  matures?: string;
  emoji: string;
};

export const SAVINGS_PLANS: SavingsPlan[] = [
  {
    id: "flex",
    name: "Flexible Savings",
    type: "Flexible",
    balance: 125_400.0,
    interestRate: 8,
    interestEarned: 4_830.5,
    frequency: "Daily",
    emoji: "🏦",
  },
  {
    id: "rent",
    name: "Rent Fund",
    type: "Target",
    balance: 412_000.0,
    interestRate: 12,
    interestEarned: 18_640.0,
    goal: 900_000,
    frequency: "Monthly",
    matures: "Dec 2026",
    emoji: "🏠",
  },
  {
    id: "fixed",
    name: "Fixed Savings",
    type: "Fixed",
    balance: 250_000.0,
    interestRate: 13.5,
    interestEarned: 12_150.0,
    frequency: "Monthly",
    matures: "Mar 2027",
    emoji: "🔒",
  },
  {
    id: "school",
    name: "School Fees",
    type: "Target",
    balance: 86_500.0,
    interestRate: 11,
    interestEarned: 2_310.0,
    goal: 350_000,
    frequency: "Weekly",
    matures: "Sep 2027",
    emoji: "🎓",
  },
];

// ---------------------------------------------------------------
// Transactions
// ---------------------------------------------------------------
export type Txn = {
  id: string;
  title: string;
  subtitle: string;
  amount: number; // negative = debit
  date: string;
  category: "transfer" | "savings" | "invest" | "wallet";
};

export const TRANSACTIONS: Txn[] = [
  { id: "t1", title: "Wallet funded", subtitle: "Bank transfer • GTBank", amount: 50_000, date: "Today, 9:41 AM", category: "wallet" },
  { id: "t2", title: "Bought GTCO shares", subtitle: "100 units @ ₦58.20", amount: -5_820, date: "Today, 8:12 AM", category: "invest" },
  { id: "t3", title: "Auto-save to Rent Fund", subtitle: "Monthly target savings", amount: -25_000, date: "Yesterday, 6:00 PM", category: "savings" },
  { id: "t4", title: "Withdrawal to Access Bank", subtitle: "Completed • NIP transfer", amount: -30_000, date: "Yesterday, 1:24 PM", category: "transfer" },
  { id: "t5", title: "Interest earned", subtitle: "Flexible savings • 8% p.a.", amount: 1_204.35, date: "Oct 4, 2026", category: "savings" },
  { id: "t6", title: "Sold ZENITHBANK shares", subtitle: "150 units @ ₦57.10", amount: 8_565, date: "Oct 3, 2026", category: "invest" },
  { id: "t7", title: "Wallet funded", subtitle: "Debit card • •••• 4021", amount: 20_000, date: "Oct 2, 2026", category: "wallet" },
];

// ---------------------------------------------------------------
// User & KYC
// ---------------------------------------------------------------
export const USER = {
  name: "Dera",
  fullName: "Chizoba Uzoma",
  phone: "+234 803 456 7890",
  email: "chizobauzoma79@gmail.com",
  kycLevel: 2, // 0-3
  tier: "Standard",
  accountNumber: "8034567890",
  bankPartner: "Providus Bank (partner)",
};

export const KYC_LEVELS = [
  {
    level: 1,
    name: "Basic",
    color: "success" as const,
    requirements: ["Phone number", "Full name"],
    unlocks: ["Save money", "Withdraw small amounts (≤ ₦50,000/day)"],
  },
  {
    level: 2,
    name: "Standard",
    color: "warning" as const,
    requirements: ["BVN verification", "Selfie check"],
    unlocks: ["Higher limits (≤ ₦500,000/day)", "Wallet-to-wallet transfers"],
  },
  {
    level: 3,
    name: "Full Access",
    color: "apex" as const,
    requirements: ["NIN (recommended)", "Address confirmation"],
    unlocks: ["Stock investments", "Highest limits", "All features"],
  },
];

// Derived numbers used across screens
export const totalSavings = SAVINGS_PLANS.reduce((a, p) => a + p.balance, 0);
export const totalInterest = SAVINGS_PLANS.reduce((a, p) => a + p.interestEarned, 0);

export const portfolioValue = HOLDINGS.reduce(
  (a, h) => a + h.units * (stockByTicker(h.ticker)?.price ?? 0),
  0
);
export const portfolioCost = HOLDINGS.reduce((a, h) => a + h.units * h.avgPrice, 0);
export const portfolioGain = portfolioValue - portfolioCost;
export const portfolioGainPct = (portfolioGain / portfolioCost) * 100;

export const totalBalance = WALLET_BALANCE + totalSavings + portfolioValue;
