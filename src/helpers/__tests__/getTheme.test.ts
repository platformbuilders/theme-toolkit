import themeFormattedJson from '../../example_formatted.json';
import { getTheme } from '../getTheme';

const theme: any = themeFormattedJson;

describe('getTheme()', () => {
  test('should get brand primary color', () => {
    const brandPrimaryColor = getTheme('brand.primary.main')({ theme });
    expect(brandPrimaryColor).toBe(theme.brand.primary.main);
  });

  test('should get brand primary constrat color', () => {
    const brandPrimaryColor = getTheme('brand.primary.contrast')({ theme });
    expect(brandPrimaryColor).toBe(theme.brand.primary.contrast);
  });

  test('should get brand secondary color', () => {
    const brandSecondaryColor = getTheme('brand.secondary.main')({
      theme,
    });
    expect(brandSecondaryColor).toBe(theme.brand.secondary.main);
  });

  test('should get brand secondary constrat color', () => {
    const brandSecondaryColor = getTheme('brand.secondary.contrast')({ theme });
    expect(brandSecondaryColor).toBe(theme.brand.secondary.contrast);
  });

  test('should get brand accent color', () => {
    const brandAccentColor = getTheme('brand.accent.main')({ theme });
    expect(brandAccentColor).toBe(theme.brand.accent.main);
  });

  test('should get brand accent constrat color', () => {
    const brandAccentColor = getTheme('brand.accent.contrast')({ theme });
    expect(brandAccentColor).toBe(theme.brand.accent.contrast);
  });

  test('should get spacing medium', () => {
    const spacingMd = getTheme('spacing.md')({ theme });
    expect(spacingMd).toBe(theme.spacing.md);
  });

  test('should get border radius medium', () => {
    const borderRadiusMd = getTheme('borderRadius.md')({ theme });
    expect(borderRadiusMd).toBe(theme.borderRadius.md);
  });

  test('should get borderWidth medium', () => {
    const borderWidthMd = getTheme('borderWidth.md')({ theme });
    expect(borderWidthMd).toBe(theme.borderWidth.md);
  });

  test('should get boxShadow z1', () => {
    const boxShadowZ1 = getTheme('boxShadow.z1')({ theme });
    expect(boxShadowZ1).toBe(theme.boxShadow.z1);
  });

  test('should get background color main', () => {
    const backgroundColorMain = getTheme('background.z0')({ theme });
    expect(backgroundColorMain).toBe(theme.background.z0);
  });

  test('should get theme button radius', () => {
    const buttonRadius = getTheme('themeRadius.button')({ theme });
    expect(buttonRadius).toBe(theme.themeRadius.button);
  });
});
