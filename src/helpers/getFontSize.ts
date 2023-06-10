import { toNumber } from 'lodash';
import { FontSizes } from '../theme_types';
import { getTheme } from './getTheme';

const baseFontSize = 16;

export const getFontSize = (props: any): number => {
  const fontSize: Flatten<FontSizes> = props.variant;
  const fontSizeFromTheme = getTheme(`fontSizes.${fontSize}`)(props);
  return toNumber(fontSizeFromTheme) || baseFontSize;
};
