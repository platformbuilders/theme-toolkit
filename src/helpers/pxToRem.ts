import { get, isNumber } from 'lodash';
import { FluidTheme, ThemeProps } from '../index';

export const pxToRem = (
  param: Flatten<FluidTheme> | number,
  baseline = 16,
): any =>
  isNumber(param)
    ? `${param / baseline}rem`
    : ({ theme }: ThemeProps): string => {
        const pixel = get(theme, param) || 0;
        return `${pixel / baseline}rem`;
      };
