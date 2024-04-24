import React, { useEffect, useState } from 'react';

import { fetchHoldingDetails } from '@upstox/services';
import { HoldingDetailsType } from '@upstox/types';
import { HoldingDetailsCopy } from '@upstox/utility';
import Snackbar from 'react-native-snackbar';
import { HoldingScreenUI } from '@upstox/screens';

const HoldingScreen = () => {
  const [refreshing, setIsRefreshing] = useState<boolean>(false);
  const [holdingData, setHoldingData] = useState<HoldingDetailsType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const isInitialLoadingState = !holdingData.length && !error && refreshing;

  const fetchHoldingData = () => {
    setIsRefreshing(true);
    setError(null);
    fetchHoldingDetails()
      .then(data => setHoldingData(data.userHolding))
      .catch(() => {
        setError(HoldingDetailsCopy.errorMessage);
      })
      .finally(() => setIsRefreshing(false));
  };

  useEffect(() => {
    fetchHoldingData();
  }, []);

  useEffect(() => {
    if (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [error]);

  return (
    <HoldingScreenUI
      {...{ holdingData, isInitialLoadingState, refreshing, fetchHoldingData }}
    />
  );
};

export default HoldingScreen;
