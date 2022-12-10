import { get } from 'lodash';
import { pxToRem } from './pxToRem';
import { FluidTheme, ThemeProps } from '../index';

enum TypeValue {
  rem = 'rem'
}

export const getTheme =
  (themeProp: Flatten<FluidTheme>, options?: { format: keyof typeof TypeValue }) =>
  ({ theme }: ThemeProps): string | number | null => {
    const parameter = get(theme, themeProp) || null;
    if(options?.format === TypeValue.rem){
      return pxToRem(parameter || 0);
    }

    return parameter;
  };
