export * from './helpers';
export * from './enums';

import { DefaultTheme } from 'styled-components';

import { Animations, AnimationObject } from './theme_types/Animations';
import { BorderRadius } from './theme_types/BorderRadius';
import { BorderWidth } from './theme_types/BorderWidth';
import { Colors } from './theme_types/Colors';
import { FontSizes } from './theme_types/FontSizes';
import { LineHeight } from './theme_types/LineHeight';
import { Opacity } from './theme_types/Opacity';
import { Spacing } from './theme_types/Spacing';
import { TypographyType, TypographyVariants } from './theme_types/Typography';
import { Depth } from './theme_types/Depth';
import { ButtonVariants } from './theme_types/Button';
import { LoadingVariants } from './theme_types/Loading';

interface FluidTheme extends Colors, Animations {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  lineHeight: LineHeight;
  opacity: Opacity;
  fontSizes: FontSizes;
  background: Depth;
}

export type ThemeProps = {
  theme: DefaultTheme;
};

export {
  FluidTheme,
  Animations,
  BorderRadius,
  BorderWidth,
  Colors,
  FontSizes,
  LineHeight,
  Opacity,
  Spacing,
  Depth,
  TypographyType,
  AnimationObject,
  ButtonVariants,
  TypographyVariants,
  LoadingVariants,
};
