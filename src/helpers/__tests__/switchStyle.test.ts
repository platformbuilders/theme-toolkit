import { switchStyle } from '../switchStyle';
import theme from './mocks/themeFormated.json';

describe('switchStyle()', () => {
  const switchStatusFunc = switchStyle('status')({
    success: () => theme.success.main,
    danger: () => theme.danger.main,
  });

  test('should switchStyle to be equal theme.success.main', () => {
    expect(switchStatusFunc({ status: 'success' })).toBe(theme.success.main);
  });
  test('should switchStyle to be equal theme.danger.main', () => {
    expect(switchStatusFunc({ status: 'danger' })).toBe(theme.danger.main);
  });

  const switchStatus = switchStyle('status')({
    warning: theme.warning.main,
    info: theme.info.main,
  });
  test('should switchStyle to be equal theme.warning.main', () => {
    expect(switchStatus({ status: 'warning' })).toBe(theme.warning.main);
  });
  test('should switchStyle to be equal theme.info.main', () => {
    expect(switchStatus({ status: 'info' })).toBe(theme.info.main);
  });
});
