import { DefaultTheme } from 'styled-components';
import FormattedThemeExample from './example_formatted.json';
import FluidThemeExample from './example_theme.json';

export { FluidThemeExample, FormattedThemeExample };

import {
  AnimationObject,
  BorderRadius,
  BorderWidth,
  DefaultColor,
  Depth,
  FontSizes,
  LineHeight,
  Opacity,
  Spacing,
  StatusBarStyle,
  ThemeRadius,
} from './theme_types';

export interface FluidTheme {
  statusBar?: StatusBarStyle;
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  boxShadow: Depth;
  opacity: Opacity;
  themeRadius: ThemeRadius;
  fontSizes: FontSizes;
  lineHeight: LineHeight;
  background: Depth;
  text: {
    main: string;
    light: string;
    contrast: string;
    link: {
      primary: string;
      accent: string;
    };
  };
  brand: {
    primary: DefaultColor;
    secondary: DefaultColor;
    accent: DefaultColor;
  };
  danger: DefaultColor;
  warning: DefaultColor;
  success: DefaultColor;
  info: DefaultColor;
  circularLoading?: string | AnimationObject | { uri: string };
  contrastCircularLoading?: string | AnimationObject | { uri: string };
  linearLoading?: string | AnimationObject | { uri: string };
  contrastLinearLoading?: string | AnimationObject | { uri: string };
  buttonLoading?: string | AnimationObject | { uri: string };
  contrastButtonLoading?: string | AnimationObject | { uri: string };
}

export type ThemeProps = {
  theme: DefaultTheme;
};
