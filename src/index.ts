export * from './helpers';
export * from './enums';

import { DefaultTheme } from 'styled-components';

import { Animations } from './theme_types/Animations';
import { BorderRadius } from './theme_types/BorderRadius';
import { BorderWidth } from './theme_types/BorderWidth';
import { Colors } from './theme_types/Colors';
import { FontSizes } from './theme_types/FontSizes';
import { LineHeight } from './theme_types/LineHeight';
import { Opacity } from './theme_types/Opacity';
import { Spacing } from './theme_types/Spacing';

export interface FluidTheme extends Colors, Animations {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  lineHeight: LineHeight;
  opacity: Opacity;
  fontSizes: FontSizes;
}

export type ThemeProps = {
  theme: DefaultTheme;
};
