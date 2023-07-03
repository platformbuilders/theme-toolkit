import themeFormattedJson from '../../examples/example_formatted.json';
import themeJson from '../../examples/example_theme.json';
import { themeFormatter } from '../themeFormatter';

test('should formatted theme.json', async () => {
  const themeFormatted = await themeFormatter(themeJson);
  expect(themeFormatted).toMatchObject(themeFormattedJson);
});
