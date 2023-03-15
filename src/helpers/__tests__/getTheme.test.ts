import { getTheme } from '../getTheme';
import theme from './mocks/themeFormatted.json';

describe('getTheme()', () => {
  test('should get brand primary color', () => {
    const brandPrimaryColor = getTheme('primary.main.value')({ theme });
    expect(brandPrimaryColor).toBe(theme.primary.main.value);
  });

  test('should get brand primary constrat color', () => {
    const brandPrimaryColor = getTheme('primary.contrast.value')({ theme });
    expect(brandPrimaryColor).toBe(theme.primary.contrast.value);
  });

  test('should get brand primary color with 10% opacity', () => {
    const brandPrimaryColor = getTheme('primary.main.opacity.10')({ theme });
    expect(brandPrimaryColor).toBe(theme.primary.main.opacity['10']);
  });

  test('should get brand secondary color', () => {
    const brandSecondaryColor = getTheme('secondary.main.value')({ theme });
    expect(brandSecondaryColor).toBe(theme.secondary.main.value);
  });

  test('should get brand secondary constrat color', () => {
    const brandSecondaryColor = getTheme('secondary.contrast.value')({ theme });
    expect(brandSecondaryColor).toBe(theme.secondary.contrast.value);
  });

  test('should get brand secondary color with 10% opacity', () => {
    const brandSecondaryColor = getTheme('secondary.main.opacity.10')({
      theme,
    });
    expect(brandSecondaryColor).toBe(theme.secondary.main.opacity['10']);
  });

  test('should get brand accent color', () => {
    const brandAccentColor = getTheme('accent.main.value')({ theme });
    expect(brandAccentColor).toBe(theme.accent.main.value);
  });

  test('should get brand accent constrat color', () => {
    const brandAccentColor = getTheme('accent.contrast.value')({ theme });
    expect(brandAccentColor).toBe(theme.accent.contrast.value);
  });

  test('should get brand accent color with 10% opacity', () => {
    const brandAccentColor = getTheme('accent.main.opacity.10')({ theme });
    expect(brandAccentColor).toBe(theme.accent.main.opacity['10']);
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
    const backgroundColorMain = getTheme('background.main')({ theme });
    expect(backgroundColorMain).toBe(theme.background.main);
  });

  test('should get opacity empty', () => {
    const opacityEmpty = getTheme('opacity.empty')({ theme });
    expect(opacityEmpty).toBe(theme.opacity.empty);
  });

  test('should get theme button radius', () => {
    const buttonRadius = getTheme('themeRadius.button')({ theme });
    expect(buttonRadius).toBe(theme.themeRadius.button);
  });
});
