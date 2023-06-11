import themeFormattedJson from '../../example_formatted.json';
import themeJson from '../../example_theme.json';
import { themeFormatter } from '../themeFormatter';

test('should formatted theme.json', async () => {
  const themeFormatted = await themeFormatter(themeJson);
  expect(themeFormatted).toMatchObject(themeFormattedJson);
});
