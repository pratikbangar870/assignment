import { InvestmentFooterPropsType } from '@upstox/types';
import React, { useMemo } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { InvestmentKeyValue } from '@upstox/components';
import {
  InvestmentFooterCopy,
  dayPLValue,
  netCurrentValue,
  netInvestmentValue,
  netPLValue,
} from '@upstox/utility';
import { getInvestmentFooterStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import { Triangle } from '@upstox/components';

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
      label: InvestmentFooterCopy.pnl,
      value: InvestmentFooterCopy.value(netPL),
    },
  ];

  const expandedData = [
    {
      label: InvestmentFooterCopy.currentValue,
      value: InvestmentFooterCopy.value(currentValue),
    },
    {
      label: InvestmentFooterCopy.totalInvestment,
      value: InvestmentFooterCopy.value(totalInvestment),
    },
    {
      label: InvestmentFooterCopy.todayPL,
      value: InvestmentFooterCopy.value(dayPL),
    },
  ];

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsExpanded(value => !value)}>
        <Triangle
          customStyles={styles.centerAlign}
          orientation={isExpanded ? 'down' : 'up'}
        />
      </Pressable>
      <FlatList
        data={isExpanded ? expandedData : []}
        renderItem={({ item }) => (
          <InvestmentKeyValue label={item.label} value={item.value} />
        )}
        scrollEnabled={false}
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
