import { HoldingDetailsType } from '@upstox/types';

export const HoldingDetailsCopy = {
  ltp: 'LTP: ',
  ltpValue: (ltp: HoldingDetailsType['ltp'], precision: number = 2) =>
    `₹ ${Math.floor(ltp) === ltp ? ltp : ltp.toFixed(precision)}`,
  pl: 'P/L: ',
  plValue: (pl: number) => `₹ ${pl}`,
  errorMessage: 'Error while fetching holding details',
  retryMessage: 'Please pull to refresh to try again',
};
