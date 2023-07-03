import themeFormattedJson from '../../examples/example_formatted.json';
import { baseFontSize, getFontSize } from '../getFontSize';
import { getTheme } from '../getTheme';

const theme: any = themeFormattedJson;

describe('getFontSize()', () => {
  test('should get fontSizes.min', () => {
    const variant = 'min';
    const themeFontSize = getTheme(`fontSizes.${variant}`)({ theme });

    const size = getFontSize({
      variant,
      theme,
    });
    expect(size).toBe(themeFontSize);
  });
  test('should get fontSizes.max', () => {
    const variant = 'max';
    const themeFontSize = getTheme(`fontSizes.${variant}`)({ theme });

    const size = getFontSize({
      variant,
      theme,
    });
    expect(size).toBe(themeFontSize);
  });
  test('should get baseFontSize', () => {
    const variant = 'wrongValue';

    const size = getFontSize({
      variant,
      theme,
    });
    expect(size).toBe(baseFontSize);
  });
});
