import { HoldingDetailsType } from '@upstox/types';

export const calculatedPLValue = (
  holding: HoldingDetailsType,
  precision: number = 2,
) => {
  const currentValue = holding.quantity * holding.ltp;
  const investedValue = holding.quantity * holding.avgPrice;
  const pl = currentValue - investedValue;
  //   return pl;
  return Math.floor(pl) === pl ? pl : Number(pl.toFixed(precision));
};
