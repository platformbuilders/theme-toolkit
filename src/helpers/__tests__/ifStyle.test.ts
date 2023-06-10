import { ifStyle } from '../ifStyle';

describe('ifStyle()', () => {
  test('should ifStyle return primary color', () => {
    const primaryColor = '#006E1D';
    const secondaryColor = '#25362A';
    const ifColorPrimary = ifStyle('colorPrimary')(
      primaryColor,
      secondaryColor,
    )({
      colorPrimary: true,
    });
    expect(ifColorPrimary).toBe(primaryColor);
  });
  test('should ifStyle return secondary color', () => {
    const primaryColor = '#006E1D';
    const secondaryColor = '#25362A';
    const ifColorPrimary = ifStyle('colorPrimary')(
      primaryColor,
      secondaryColor,
    )({
      colorPrimary: false,
    });
    expect(ifColorPrimary).toBe(secondaryColor);
  });
});
