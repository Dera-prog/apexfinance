export const naira = (value: number, decimals = 2) =>
  "₦" + value.toLocaleString("en-NG", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

export const nairaCompact = (value: number) => {
  if (value >= 1_000_000_000) return "₦" + (value / 1_000_000_000).toFixed(2) + "B";
  if (value >= 1_000_000) return "₦" + (value / 1_000_000).toFixed(2) + "M";
  if (value >= 1_000) return "₦" + (value / 1_000).toFixed(1) + "K";
  return naira(value);
};

export const pct = (value: number) =>
  (value >= 0 ? "+" : "") + value.toFixed(2) + "%";
