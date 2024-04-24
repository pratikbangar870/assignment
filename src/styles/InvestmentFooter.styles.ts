import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getInvestmentFooterStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.backgroundPrimary,
      paddingHorizontal: theme.spacings.spacing16,
      paddingTop: theme.spacings.spacing4,
      paddingBottom: theme.spacings.spacing16,
    },
    divider: {
      marginVertical: theme.spacings.spacing8,
    },
    centerAlign: {
      alignSelf: 'center',
    },
  });
};

export default getInvestmentFooterStyles;
