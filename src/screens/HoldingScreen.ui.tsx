import {
  HoldingDetails,
  PageViewWrapper,
  UpstoxHeaderComponent,
} from '@upstox/components';
import { ItemSeparatorComponent } from '@upstox/components';
import InvestmentFooter from '@upstox/components/InvestmentFooter.component';
import { getHoldingScreenStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import { HoldingScreenProps } from '@upstox/types';
import { HoldingDetailsCopy } from '@upstox/utility';
import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';

const HoldingScreenUI = (props: HoldingScreenProps) => {
  const { holdingData, isInitialLoadingState, refreshing, fetchHoldingData } =
    props;

  const { theme } = useTheme()!!;
  const styles = useMemo(() => getHoldingScreenStyles(theme), [theme]);

  const emptyListMessage = useCallback(() => {
    return (
      <Text style={styles.tvEmptyListStyle}>
        {HoldingDetailsCopy.retryMessage}
      </Text>
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageViewWrapper>
      <View style={{ flex: 1 }}>
        <UpstoxHeaderComponent />
        {isInitialLoadingState ? (
          <ActivityIndicator
            size="large"
            color={theme.color.brandPrimary}
            style={styles.activityIndicatorStyle}
          />
        ) : (
          <FlatList
            data={holdingData}
            renderItem={({ item }) => (
              <View style={styles.holdingDetailViewStyle}>
                <HoldingDetails
                  symbol={item.symbol}
                  quantity={item.quantity}
                  ltp={item.ltp}
                  avgPrice={item.avgPrice}
                  close={item.close}
                />
              </View>
            )}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={item => item.symbol}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={fetchHoldingData}
                colors={[theme.color.brandPrimary]}
                tintColor={theme.color.brandPrimary}
              />
            }
            ListEmptyComponent={emptyListMessage()}
          />
        )}
      </View>
      <InvestmentFooter holdings={holdingData} />
    </PageViewWrapper>
  );
};

export default HoldingScreenUI;
