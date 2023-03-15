import { themeFormatter } from '../themeFormatter';
import themeJson from './mocks/theme.json';
import themeFormattedJson from './mocks/themeFormatted.json';

test('should formatted theme.json', async () => {
  const themeFormatted = await themeFormatter(themeJson);
  expect(themeFormatted).toMatchObject(themeFormattedJson);
});
