import { StatusBarStyle as RNBarStyle } from 'react-native';

interface ColorOpacity {
  '10': string;
  '20': string;
  '30': string;
  '40': string;
  '50': string;
  '60': string;
  '70': string;
  '80': string;
  '90': string;
}

interface ColorWithOpacity {
  value: string;
  opacity: ColorOpacity;
}

interface BaseColor {
  contrast: ColorWithOpacity;
}

interface DefaultColors extends BaseColor {
  light: ColorWithOpacity;
  main: ColorWithOpacity;
  dark: ColorWithOpacity;
}

interface BackgroundColors {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}

interface TextColors {
  default: ColorWithOpacity;
  link: string;
}

export interface StatusBarStyle {
  style: RNBarStyle;
  backgroundColor: string; // Android only
}

// Theme dark/light
export interface Colors {
  background: BackgroundColors;
  text: TextColors;
  primary: DefaultColors;
  secondary: DefaultColors;
  tertiary: DefaultColors;
  accent: DefaultColors;
  danger: DefaultColors;
  warning: DefaultColors;
  success: DefaultColors;
  info: DefaultColors;
}
