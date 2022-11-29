import { get } from 'lodash';
import { FluidTheme, ThemeProps } from '../index';

export const getTheme =
  (themeProp: Flatten<FluidTheme>) =>
  ({ theme }: ThemeProps): string | number | null => {
    return get(theme, themeProp) || null;
  };
