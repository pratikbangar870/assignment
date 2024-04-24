import React, { useContext, useState } from 'react';
import { themeDark, themeLight, spacings, typography } from '@upstox/styles-ds';
import { ThemeProviderPropsType, ThemeType } from '@upstox/types';

const ThemeContext = React.createContext<{
  theme: ThemeType;
  switchTheme: () => void;
} | null>(null);

export const ThemeProvider = (props: ThemeProviderPropsType) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const color = isDarkMode ? themeDark : themeLight;

  const switchTheme = () => {
    setDarkMode(currTheme => !currTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: { color, spacings, typography }, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
