import { toOnlyNumbers } from '@platformbuilders/helpers';
import { FontSizes, LineHeight } from '../theme_types';
import { getTheme } from './getTheme';

export const getLineHeight = (props: any): number => {
  const fontSize: Flatten<FontSizes> = props.variant;
  const lineHeight: Flatten<LineHeight> = props.lineHeightVariant;
  const fontSizeFromTheme = getTheme(`fontSizes.${fontSize}`)(props);
  const lineHeightVariant = getTheme(`lineHeight.${lineHeight}`)(props);
  console.log('teste codewall');
  const lineHeightPercentage = lineHeightVariant
    ? toOnlyNumbers(lineHeightVariant as string)
    : '120';
  return (Number(fontSizeFromTheme) * Number(lineHeightPercentage)) / 100;
};
