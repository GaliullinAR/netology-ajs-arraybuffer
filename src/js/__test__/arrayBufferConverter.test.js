import ArrayBufferConverter from '../ArrayBufferConverter';

test('Проверка метода load', () => {
  const result = new ArrayBufferConverter().toString();
  expect(result).toBe('{"data":{"user":{"id":1, name: "Hitman","level":10}}}');
});
