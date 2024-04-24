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

export const netCurrentValue = (
  holdings: HoldingDetailsType[],
  precision: number = 2,
) => {
  return Number(
    holdings
      .reduce((accumulatedValue, holding) => {
        return accumulatedValue + holding.quantity * holding.ltp;
      }, 0)
      .toFixed(precision),
  );
};

export const netInvestmentValue = (
  holdings: HoldingDetailsType[],
  precision: number = 2,
) => {
  return Number(
    holdings
      .reduce((accumulatedValue, holding) => {
        return accumulatedValue + holding.quantity * holding.avgPrice;
      }, 0)
      .toFixed(precision),
  );
};

export const netPLValue = (
  holdings: HoldingDetailsType[],
  precision: number = 2,
) => {
  return Number(
    (netCurrentValue(holdings) - netInvestmentValue(holdings)).toFixed(
      precision,
    ),
  );
};

export const dayPLValue = (
  holdings: HoldingDetailsType[],
  precision: number = 2,
) => {
  return Number(
    holdings
      .reduce((accumulatedValue, holding) => {
        return (
          accumulatedValue + holding.quantity * (holding.close - holding.ltp)
        );
      }, 0)
      .toFixed(precision),
  );
};
