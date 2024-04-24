export interface HoldingDetailsType {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface HoldingDetailsPropsType extends HoldingDetailsType {}

export type HoldingDetailsSuccessResponseType = {
  userHolding: Array<HoldingDetailsPropsType>;
};
