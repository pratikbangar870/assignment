import { InvestmentFooterPropsType } from '@upstox/types';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { InvestmentKeyValue } from '@upstox/components';
import {
  dayPLValue,
  netCurrentValue,
  netInvestmentValue,
  netPLValue,
} from '@upstox/utility';
import { getInvestmentFooterStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';

const InvestmentFooter = (props: InvestmentFooterPropsType) => {
  const { holdings } = props;
  const { theme } = useTheme()!!;
  const styles = useMemo(() => getInvestmentFooterStyles(theme), [theme]);

  const netPL = useMemo(() => netPLValue(holdings), [holdings]);
  const currentValue = useMemo(() => netCurrentValue(holdings), [holdings]);
  const totalInvestment = useMemo(
    () => netInvestmentValue(holdings),
    [holdings],
  );
  const dayPL = useMemo(() => dayPLValue(holdings), [holdings]);

  const collapsedData = [
    {
      label: 'Profit & Loss:',
      value: `₹ ${netPL}`,
    },
  ];

  const expandedData = [
    {
      label: 'Current Value:',
      value: `₹ ${currentValue}`,
    },
    {
      label: 'Total Investment:',
      value: `₹ ${totalInvestment}`,
    },
    {
      label: "Today's Profit & Loss:",
      value: `₹ ${dayPL}`,
    },
  ];

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={isExpanded ? expandedData : []}
        renderItem={({ item }) => (
          <InvestmentKeyValue label={item.label} value={item.value} />
        )}
      />
      <View style={styles.divider} />
      <InvestmentKeyValue
        label={collapsedData[0].label}
        value={collapsedData[0].value}
      />
    </View>
  );
};

export default InvestmentFooter;
