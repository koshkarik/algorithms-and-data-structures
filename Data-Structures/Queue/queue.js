
export default class Queue {
  constructor(cap = Infinity) {
    this.cap = cap;
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  count() {
    return this.tail - this.head;
  }

  enqueu(value) {
    if (this.count >= this.cap) {
      return 'Queue Overflow';
    }
    this.storage[this.tail] = value;
    this.tail += 1;
    return this.count;
  }

  dequeue() {
    const elementToDelete = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) {
      this.head += 1;
    }
    return elementToDelete;
  }
}
