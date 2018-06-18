
export default class Stack {
  constructor(capacity = Infinity) {
    this.capacity = capacity;
    this.count = 0;
    this.container = {};
  }

  push(value) {
    if (this.count >= this.capacity) {
      return 'Stack Overflow';
    }
    this.container[this.count] = value;
    this.count += 1;
    return this.count;
  }

  pop() {
    const toPop = this.container[this.count - 1];
    this.count -= 1;
    delete this.container[this.count];
    if (this.count < 0) {
      this.count = 0;
    }
    return toPop;
  }

  peek() {
    return this.container[this.count - 1];
  }
}
