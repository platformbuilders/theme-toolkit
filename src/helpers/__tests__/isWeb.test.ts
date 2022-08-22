import isWeb from '../isWeb';

test('should isWeb() to be falsy', () => {
  expect(isWeb()).toBeFalsy();
});
