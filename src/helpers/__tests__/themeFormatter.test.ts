import themeJson from './mocks/theme.json';
import themeFormatedJson from './mocks/themeFormated.json';
import { themeFormatter } from '../themeFormatter';

test('should formated theme.json', async () => {
  const themeFormated = await themeFormatter(themeJson);
  expect(themeFormated).toMatchObject(themeFormatedJson);
});
