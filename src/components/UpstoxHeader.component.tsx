import { getUpstoxHeaderStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import { UpstoxHeaderCopy } from '@upstox/utility';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

const UpstoxHeaderComponent = () => {
  const { theme } = useTheme()!!;
  const styles = useMemo(() => getUpstoxHeaderStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.tvHeaderStyle}>{UpstoxHeaderCopy.headerText}</Text>
    </View>
  );
};

export default UpstoxHeaderComponent;
