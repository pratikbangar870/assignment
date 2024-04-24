import { HoldingDetailsType } from '@upstox/types';

export const HoldingDetailsCopy = {
  ltp: 'LTP: ',
  ltpValue: (ltp: HoldingDetailsType['ltp'], precision: number = 2) =>
    `₹ ${ltp.toFixed(precision)}`,
  pl: 'P/L: ',
  plValue: (pl: string) => `₹ ${pl}`,
  errorMessage: 'Error while fetching holding details',
  retryMessage: 'Please pull to refresh to try again',
};
