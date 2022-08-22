import theme from './mocks/themeFormated.json';
import { getTheme } from '../getTheme';

describe('getTheme()', () => {
  test('should get brand primary color', () => {
    const brandPrimaryColor = getTheme('brand.primary.main')({ theme });
    expect(brandPrimaryColor).toBe(theme.brand.primary.main);
  });

  test('should get brand secondary color', () => {
    const brandSecondaryColor = getTheme('brand.secondary.main')({ theme });
    expect(brandSecondaryColor).toBe(theme.brand.secondary.main);
  });

  test('should get brand tertiary color', () => {
    const brandTertiaryColor = getTheme('brand.tertiary.main')({ theme });
    expect(brandTertiaryColor).toBe(theme.brand.tertiary.main);
  });

  test('should get spacing medium', () => {
    const spacingMd = getTheme('spacing.md')({ theme });
    expect(spacingMd).toBe(theme.spacing.md);
  });
});
