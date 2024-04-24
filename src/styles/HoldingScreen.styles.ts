import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getHoldingScreenStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    listSeparatorStyle: {
      borderBottomColor: theme.color.border,
      borderBottomWidth: 1,
      paddingHorizontal: theme.spacings.spacing16,
    },
    activityIndicatorStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    holdingDetailViewStyle: {
      paddingHorizontal: theme.spacings.spacing16,
      backgroundColor: theme.color.backgroundPrimary,
    },
    tvEmptyListStyle: {
      alignSelf: 'center',
      justifyContent: 'center',
      margin: theme.spacings.spacing16,
    },
    separatorView: {
      paddingLeft: theme.spacings.spacing16,
      backgroundColor: theme.color.backgroundPrimary,
    },
  });
};

export default getHoldingScreenStyles;
