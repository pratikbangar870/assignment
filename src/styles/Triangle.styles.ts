import { ThemeType } from '@upstox/types';
import { StyleSheet } from 'react-native';

const getTriangleStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    upTriangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderBottomWidth: 16,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: theme.color.brandSecondary,
    },
    downTriangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderTopWidth: 16,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: theme.color.brandSecondary,
    },
  });
};

export default getTriangleStyles;
