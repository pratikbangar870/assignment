import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getHoldingDetailsStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      paddingVertical: theme.spacings.spacing16,
    },
    containerWithSeparator: {
      paddingVertical: theme.spacings.spacing16,
      borderBottomColor: theme.color.border,
    },
    flexHorizontal: {
      flexDirection: 'row',
    },
    tvSymbolStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      fontWeight: 'bold',
      flex: 1,
    },
    tvLtpLabelStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
    },
    tvLtpValueStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      fontWeight: 'bold',
    },
    tvPlLabelStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      marginTop: theme.spacings.spacing8,
    },
    tvPlValueStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      marginTop: theme.spacings.spacing8,
      fontWeight: 'bold',
    },
    tvQuantityStyle: {
      color: theme.color.textPrimary,
      fontSize: theme.typography.base,
      marginTop: theme.spacings.spacing8,
      flex: 1,
    },
  });
};

export default getHoldingDetailsStyles;
