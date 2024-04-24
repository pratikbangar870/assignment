import { HoldingDetailsType } from '@upstox/types';

export interface HoldingScreenProps {
  holdingData: HoldingDetailsType[];
  isInitialLoadingState: boolean;
  refreshing: boolean;
  fetchHoldingData: () => void;
}
