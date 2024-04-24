import { HoldingDetailsSuccessResponseType } from '@upstox/types';
import Snackbar from 'react-native-snackbar';

const API_ENDPOINTS = {
  fetchHoldingDetails:
    'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
};

export const fetchHoldingDetails =
  async (): Promise<HoldingDetailsSuccessResponseType> => {
    try {
      const response = await fetch(API_ENDPOINTS.fetchHoldingDetails);
      return response.json();
    } catch (error: any) {
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_SHORT,
      });
      throw error;
    }
  };
