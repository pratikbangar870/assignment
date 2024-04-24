import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getInvestmentKeyValueStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: theme.spacings.spacing8,
    },
    tvLabelStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      flex: 1,
      fontWeight: 'bold',
    },
    tvValueStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
    },
  });
};

export default getInvestmentKeyValueStyles;
