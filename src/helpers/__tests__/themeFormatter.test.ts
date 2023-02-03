import themeJson from './mocks/theme.json';
import themeFormattedJson from './mocks/themeFormatted.json';
import { themeFormatter } from '../themeFormatter';

test('should formatted theme.json', async () => {
  const themeFormatted = await themeFormatter(themeJson);
  expect(themeFormatted).toMatchObject(themeFormattedJson);
});
