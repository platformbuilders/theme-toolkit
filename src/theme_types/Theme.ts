import { Animations } from './Animations';
import { BorderRadius } from './BorderRadius';
import { BorderWidth } from './BorderWidth';
import { BoxShadows } from './BoxShadows';
import { Colors } from './Colors';
import { Spacing } from './Spacing';
import { TypographyTheme } from './Typography';

export type ThemeType = Colors &
  Animations & {
    spacing: Spacing;
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    boxShadow: BoxShadows;
    boxShadowWeb: BoxShadows;
    typography: TypographyTheme;
  };
