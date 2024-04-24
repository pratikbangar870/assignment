import React, { useMemo } from 'react';
import { SafeAreaView, View } from 'react-native';

import { PageViewWrapperPropsType } from '@upstox/types';
import { useTheme } from '@upstox/styles-ds/ThemeProvider';
import { getPageViewWrapperStyles } from '@upstox/styles';

const PageViewWrapper = (props: PageViewWrapperPropsType) => {
  const { theme } = useTheme()!!;

  const styles = useMemo(() => getPageViewWrapperStyles(theme), [theme]);

  return (
    <SafeAreaView style={[styles.container, props.customStyles]}>
      <View style={styles.pageViewStyle}>{props.children}</View>
    </SafeAreaView>
  );
};

export default PageViewWrapper;
