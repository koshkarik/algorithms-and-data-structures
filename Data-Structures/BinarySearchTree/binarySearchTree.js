import Queue from '../Queue/queue';

export default class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
        return;
      }
      this.right.insert(value);
    }
    return this; // eslint-disable-line
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value) {
      return this.left && this.left.contains(value);
    } else if (value > this.value) {
      return this.right && this.right.contains(value);
    }
    return false;
  }

  DFSpreOrderTraversal(fn) {
    fn(this);
    if (this.left) {
      this.left.DFSpreOrderTraversal(fn);
    }
    if (this.right) {
      this.right.DFSpreOrderTraversal(fn);
    }
  }

  DFSinOrderTravesal(fn) {
    if (!this.left && !this.right) {
      fn(this);
    } else {
      if (this.left) {
        this.left.DFSinOrderTravesal(fn);
      }
      fn(this);
      if (this.right) {
        this.right.DFSinOrderTravesal(fn);
      }
    }
  }

  DFSpostOrderTraversal(fn) {
    if (this.left) {
      this.left.DFSpostOrderTraversal(fn);
    }
    if (this.right) {
      this.right.DFSpostOrderTraversal(fn);
    }
    fn(this);
  }

  BFStraversal(fn) {
    const queue = new Queue();
    queue.enqueu(this);
    while (queue.count() > 0) {
      const outElement = queue.dequeue();
      fn(outElement);
      if (outElement.left) {
        queue.enqueu(outElement.left);
      }
      if (outElement.right) {
        queue.enqueu(outElement.right);
      }
    }
  }

  checkIfFull() {
    let result = true;
    this.BFStraversal((node) => {
      if (node.left && !node.right) {
        result = false;
      } else if (!node.left && node.right) {
        result = false;
      }
    });
    return result;
  }

  checkIfBalanced() {
    const heights = [];
    const checkRecursive = (node, height) => {
      if (!node.left && !node.right) {
        heights.push(height);
      }
      node.left && checkRecursive(node.left, height + 1); // eslint-disable-line
      node.right && checkRecursive(node.right, height + 1); // eslint-disable-line
    };
    checkRecursive(this, 1);
    const max = Math.max.apply(null, heights);
    const min = Math.min.apply(null, heights);
    return max - min <= 1;
  }
}
