import type { Token } from "@/store/swap/types.ts";

export const PAIR_ID_RUB_USDT = 133; // ID для пары RUB/USDT

export const PAIRS: Record<number, { token1: Token; token2: Token }> = {
  [PAIR_ID_RUB_USDT]: {
    token1: { symbol: "RUB", name: "Российский рубль" },
    token2: { symbol: "USDT", name: "Tether" },
  },
  // можно добавить другие пары
};
