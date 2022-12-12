import { get } from 'lodash';
import { FluidTheme, ThemeProps } from '../index';
import { pxToRem } from './pxToRem';

enum TypeValue {
  rem = 'rem',
}

export const getTheme =
  (
    themeProp: Flatten<FluidTheme>,
    options?: { format: keyof typeof TypeValue },
  ) =>
  ({ theme }: ThemeProps): string | number | null => {
    const parameter = get(theme, themeProp) || '';
    if (
      options?.format === TypeValue.rem ||
      (!String(parameter).includes('rgb') &&
        !String(parameter).includes('#') &&
        !!document)
    ) {
      return pxToRem(parameter || 0);
    }

    return parameter;
  };
