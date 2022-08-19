import { pxToRem } from '../pxToRem';

describe('getTheme()', () => {
  test('should pxToRem(30) to be 1.875rem', () => {
    expect(pxToRem(30)).toBe('1.875rem');
  });
  test('should pxToRem(50) to be 3.125rem', () => {
    expect(pxToRem(50)).toBe('3.125rem');
  });
});
