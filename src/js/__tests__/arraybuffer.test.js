import ArrayBufferConverter from '../arraybuffer';
import getBuffer from '../funGetBuffer';

test('test ArrayBufferConverter', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());
  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
