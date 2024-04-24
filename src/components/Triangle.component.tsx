import { getTriangleStyles } from '@upstox/styles';
import { useTheme } from '@upstox/styles-ds';
import React, { useMemo } from 'react';
import { StyleProp, View } from 'react-native';

interface TriangleProps {
  orientation?: 'up' | 'down';
  customStyles?: StyleProp<any>;
}

const Triangle = (props: TriangleProps) => {
  const { theme } = useTheme()!!;
  const styles = useMemo(() => getTriangleStyles(theme), [theme]);

  const { customStyles, orientation = 'up' } = props ?? {};
  return (
    <View
      style={[
        orientation === 'up' ? styles.upTriangle : styles.downTriangle,
        { ...customStyles },
      ]}
    />
  );
};

export default Triangle;
