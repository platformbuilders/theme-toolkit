import { StatusBarStyle as RNBarStyle } from 'react-native';

export interface StatusBarStyle {
  style: RNBarStyle;
  backgroundColor: string; // Android only
}
