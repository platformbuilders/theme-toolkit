import themeFormattedJson from '../../example_formatted.json';
import { getFontSize } from '../getFontSize';
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
});
