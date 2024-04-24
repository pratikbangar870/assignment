import { getHoldingScreenStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import React, { useMemo } from 'react';
import { View } from 'react-native';

const ItemSeparatorComponent = () => {
  const { theme } = useTheme()!!;
  const styles = useMemo(() => getHoldingScreenStyles(theme), [theme]);

  return (
    <View style={styles.separatorView}>
      <View style={styles.listSeparatorStyle} />
    </View>
  );
};

export default ItemSeparatorComponent;
