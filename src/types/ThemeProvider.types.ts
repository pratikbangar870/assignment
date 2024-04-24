import { spacings, themeDark, themeLight, typography } from '@upstox/styles-ds';

export interface ThemeProviderPropsType {
  children: React.ReactNode;
}

export type ThemeType = {
  color: typeof themeDark | typeof themeLight;
  spacings: typeof spacings;
  typography: typeof typography;
};
