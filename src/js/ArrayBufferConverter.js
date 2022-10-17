import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load() {
    return new Int16Array(this.buffer);
  }

  toString() {
    return this.load().reduce((str, item) => str + String.fromCharCode(item), "");
  }
}
