import { get } from 'lodash';
import { FluidTheme, ThemeProps } from '../index';

export const getTheme =
  (themeProp: Flatten<FluidTheme>) =>
  ({ theme }: ThemeProps): string | number => {
    return get(theme, themeProp);
  };
