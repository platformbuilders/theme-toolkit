export * from './helpers';
export * from './enums';

import { DefaultTheme } from 'styled-components';

import { AnimationObject, Animations } from './theme_types/Animations';
import { BorderRadius } from './theme_types/BorderRadius';
import { BorderWidth } from './theme_types/BorderWidth';
import { ButtonVariants } from './theme_types/Button';
import { Colors } from './theme_types/Colors';
import { Depth } from './theme_types/Depth';
import { FontSizes } from './theme_types/FontSizes';
import { LineHeight } from './theme_types/LineHeight';
import { LoadingVariants } from './theme_types/Loading';
import { Opacity } from './theme_types/Opacity';
import { Spacing } from './theme_types/Spacing';
import { ThemeRadius } from './theme_types/ThemeRadius';
import { TypographyType, TypographyVariants } from './theme_types/Typography';

interface FluidTheme extends Colors, Animations {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  boxShadow: Depth;
  opacity: Opacity;
  themeRadius: ThemeRadius;
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
