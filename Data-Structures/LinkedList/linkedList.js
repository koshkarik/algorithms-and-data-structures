class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length += 1;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (test(value, current.value)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  findByIndex(index) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (index === i) {
        return current;
      }
      i += 1;
      current = current.next;
    }
    return null;
  }

  get(index) {
    const node = this.findByIndex(index);
    if (!node) {
      return null;
    }
    return node.value;
  }

  delete(index) {
    if (index === 0) {
      const { head } = this;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length -= 1;
      return head.value;
    }
    const node = this.findByIndex(index - 1);
    const excise = node.next;
    if (!excise) {
      return null;
    }
    node.next = excise.next;
    if (node.next && !node.next.next) {
      this.tail = node.next;
    } else {
      this.tail = node;
    }
    this.length -= 1;
    return excise.value;
  }
}
