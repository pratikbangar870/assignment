import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

import { HoldingDetailsPropsType } from '@upstox/types';
import { getHoldingDetailsStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import { HoldingDetailsCopy, calculatedPLValue } from '@upstox/utility';

const HoldingDetails = (props: HoldingDetailsPropsType) => {
  const { symbol, quantity, ltp, avgPrice } = props;
  const { theme } = useTheme()!!;

  const styles = useMemo(() => getHoldingDetailsStyles(theme), [theme]);

  const calculatedPL = useMemo(
    () => calculatedPLValue(props),
    [quantity, ltp, avgPrice], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <View style={styles.container}>
      <View style={styles.flexHorizontal}>
        <Text style={styles.tvSymbolStyle}>{symbol}</Text>
        <Text style={styles.tvLtpLabelStyle}>{HoldingDetailsCopy.ltp}</Text>
        <Text style={styles.tvLtpValueStyle}>
          {HoldingDetailsCopy.ltpValue(ltp)}
        </Text>
      </View>
      <View style={styles.flexHorizontal}>
        <Text style={styles.tvQuantityStyle}>{quantity}</Text>
        <Text style={styles.tvPlLabelStyle}>{HoldingDetailsCopy.pl}</Text>
        <Text style={styles.tvPlValueStyle}>
          {HoldingDetailsCopy.plValue(Number(calculatedPL))}
        </Text>
      </View>
    </View>
  );
};

export default HoldingDetails;
