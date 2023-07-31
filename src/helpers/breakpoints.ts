import { BreakpointsType } from '../theme_types';

const screenSizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  xxs: 0,
  xs: 480,
  sm: 650,
  md: 810,
  lg: 1000,
  xl: 1200,
  xxl: 1600,
};

export const breakpoints = {
  inMobile: `(max-width: ${screenSizes.tablet}px)`,
  inTablet: `(min-width: ${screenSizes.tablet}px) and (max-width: ${screenSizes.desktop}px)`,
  inDesktop: `(min-width: ${screenSizes.desktop}px)`,
  inMobileAndTablet: `(max-width: ${screenSizes.desktop}px)`,
  inSmDevice: `(max-width: ${screenSizes.sm}px)`,
  inXlDevice: `(min-width: ${screenSizes.xl}px)`,
  inXxlDevice: `(min-width: ${screenSizes.xxl}px)`,
  inSmallMobile: `(min-width: ${screenSizes.xxs}px) and (max-width: ${screenSizes.xs}px)`,
  inExtraSmallMobile: `(max-width: ${screenSizes.xs}px)`,
} as BreakpointsType;
