import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getInvestmentFooterStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.backgroundPrimary,
      padding: theme.spacings.spacing16,
    },
    divider: {
      marginVertical: theme.spacings.spacing8,
    },
  });
};

export default getInvestmentFooterStyles;
