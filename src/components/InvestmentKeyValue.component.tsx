import { getInvestmentKeyValueStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import { InvestmentKeyValuePropsType } from '@upstox/types';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

const InvestmentKeyValue = (props: InvestmentKeyValuePropsType) => {
  const { label, value } = props;
  const { theme } = useTheme()!!;
  const styles = useMemo(() => getInvestmentKeyValueStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.tvLabelStyle}>{label}</Text>
      <Text style={styles.tvValueStyle}>{value}</Text>
    </View>
  );
};

export default InvestmentKeyValue;
