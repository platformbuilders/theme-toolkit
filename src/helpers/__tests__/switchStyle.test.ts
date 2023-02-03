import { switchStyle } from '../switchStyle';
import theme from './mocks/themeFormatted.json';

describe('switchStyle()', () => {
  const switchStatusFunc = switchStyle('status')({
    success: () => theme.success.main.value,
    danger: () => theme.danger.main.value,
  });

  test('should switchStyle to be equal theme.success.main.value', () => {
    expect(switchStatusFunc({ status: 'success' })).toBe(
      theme.success.main.value,
    );
  });

  test('should switchStyle to be equal theme.danger.main.value', () => {
    expect(switchStatusFunc({ status: 'danger' })).toBe(
      theme.danger.main.value,
    );
  });

  const switchStatus = switchStyle('status')({
    warning: theme.warning.main.value,
    info: theme.info.main.value,
  });
  test('should switchStyle to be equal theme.warning.main', () => {
    expect(switchStatus({ status: 'warning' })).toBe(theme.warning.main.value);
  });
  test('should switchStyle to be equal theme.info.main', () => {
    expect(switchStatus({ status: 'info' })).toBe(theme.info.main.value);
  });
});
