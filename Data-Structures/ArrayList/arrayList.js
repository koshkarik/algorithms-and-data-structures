export default class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length += 1;
  }

  pop() {
    const ans = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return ans;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ans = this.data[index];
    this.collapseTo(index);
    return ans;
  }

  collapseTo(index) {
    for (let i = index; i < this.length; i += 1) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}
