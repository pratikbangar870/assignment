import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getUpstoxHeaderStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.color.brandPrimary,
      padding: theme.spacings.spacing16,
    },
    tvHeaderStyle: {
      color: theme.color.alwaysLight,
      fontSize: theme.typography.heading,
      fontWeight: 'bold',
    },
  });
};

export default getUpstoxHeaderStyles;
