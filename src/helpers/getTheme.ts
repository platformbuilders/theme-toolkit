import { get } from 'lodash';
import { FluidTheme } from '../index';

export const getTheme =
  (themeProp: (theme: FluidTheme) => string | number) =>
  ({ theme }: { theme: FluidTheme }): string | number => {
    return typeof themeProp === 'function'
      ? themeProp(theme)
      : get(theme, themeProp);
  };
