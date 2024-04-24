import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getPageViewWrapperStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme?.color.backgroundPrimary,
      flex: 1,
    },
    pageViewStyle: {
      backgroundColor: theme?.color.backgroundSecondary,
      flex: 1,
    },
  });
};

export default getPageViewWrapperStyles;
