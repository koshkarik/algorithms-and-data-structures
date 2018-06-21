import bubbleSort from '../Sorting-Algorithms/bubble';
import insertionSort from '../Sorting-Algorithms/insertion';
import mergeSort from '../Sorting-Algorithms/merge';
import quickSort from '../Sorting-Algorithms/quick';
import binarySearch from '../Search-Algorithms/binary';
import djikstra from '../Search-Algorithms/djikstra';
import ArrayList from '../Data-Structures/ArrayList/arrayList';
import Queue from '../Data-Structures/Queue/queue';
import Stack from '../Data-Structures/Stack/stack';
import BinarySearchTree from '../Data-Structures/BinarySearchTree/binarySearchTree';
import LinkedList from '../Data-Structures/LinkedList/linkedList';
import heapSort from '../Sorting-Algorithms/heap-sort';

// Sorting Algorithms

describe('Sorting algorithms', () => {
  const toSort = [5, 1, 3, 7, 8, 5, 2];
  const expected = toSort.sort();
  it('Bubble sort', () => {
    expect(bubbleSort(toSort)).toEqual(expected);
  });
  it('Insertion sort', () => {
    expect(insertionSort(toSort)).toEqual(expected);
  });
  it('Merge sort', () => {
    expect(mergeSort(toSort)).toEqual(expected);
  });
  it('Quick sort', () => {
    expect(quickSort(toSort)).toEqual(expected);
  });
  it('Heap Sort', () => {
    expect(heapSort(toSort)).toEqual(expected);
  });
});

// Search Algorithms

describe('Search Algorithms', () => {
  it('Binary search', () => {
    const toSearch = [1, 4, 6, 8, 9];
    const expected = 4;
    expect(binarySearch(toSearch, 4)).toBe(expected);
  });
  it('Djikstra Algorithm', () => {
    const graph = {
      start: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, finish: 3 },
      D: { finish: 1 },
      finish: {},
    };
    const expected = { distance: 8, path: ['start', 'A', 'D', 'finish'] };
    expect(djikstra(graph)).toEqual(expected);
  });
});

// Data Structures

describe('Data Structures - Array List', () => {
  const newList = new ArrayList();
  for (let i = 0; i < 5; i += 1) {
    newList.push(i);
  }
  it('Making new list', () => {
    const startList = {
      length: 5,
      data:
      {
        0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
      },
    };
    expect(newList).toEqual(startList);
  });
  it('Pop the value from Array List', () => {
    newList.pop();
    const listAfterPop = {
      length: 4,
      data:
      {
        0: 0, 1: 1, 2: 2, 3: 3,
      },
    };
    expect(newList).toEqual(listAfterPop);
  });
  it('Getting value from Array List', () => {
    const index = newList.get(3);
    expect(index).toBe(3);
  });
  it('Deleting element from Array List', () => {
    newList.delete(2);
    const listAfterDelete = {
      length: 3,
      data:
      {
        0: 0, 1: 1, 2: 3,
      },
    };
    expect(newList).toEqual(listAfterDelete);
  });
});

describe('Data Structures - Queue', () => {
  const testQueue = new Queue();
  testQueue.enqueu(5);
  testQueue.enqueu(7);
  it('Making new Queue', () => {
    const expected = {
      cap: Infinity, head: 0, tail: 2, storage: { 0: 5, 1: 7 },
    };
    expect(testQueue).toEqual(expected);
  });
  it('Dequeue element from queue', () => {
    testQueue.dequeue();
    const expectedAfterDequeue = {
      cap: Infinity, head: 1, tail: 2, storage: { 1: 7 },
    };
    expect(testQueue).toEqual(expectedAfterDequeue);
  });
});

describe('Data Structures - Stack', () => {
  const testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  it('Creating new Stack', () => {
    const expected = { capacity: Infinity, count: 2, container: { 0: 1, 1: 2 } };
    expect(testStack).toEqual(expected);
  });
  it('Pop element from Stack', () => {
    testStack.pop();
    const expected = { capacity: Infinity, count: 1, container: { 0: 1 } };
    expect(testStack).toEqual(expected);
  });
});

describe('Data Structures - Linked List', () => {
  const linkedList = new LinkedList();
  linkedList.push(2);
  linkedList.push(4);
  linkedList.push(6);
  it('Create new linked list', () => {
    const expected = {
      head: { value: 2, next: { value: 4, next: { value: 6, next: null } } },
      tail: { value: 6, next: null },
      length: 3,
    };
    expect(linkedList).toEqual(expected);
  });
  it('Pop value from list', () => {
    const expected = {
      head: { value: 2, next: { value: 4, next: null } },
      tail: { value: 4, next: null },
      length: 2,
    };
    linkedList.pop();
    expect(linkedList).toEqual(expected);
  });
});

describe('Data Structures - Binary Search Tree', () => {
  const testTree = new BinarySearchTree(7);
  testTree.insert(10);
  testTree.insert(4);
  testTree.insert(3);
  testTree.insert(9);
  const multTwo = obj => obj.value *= 2; // eslint-disable-line
  const divTwo = obj => obj.value = obj.value / 2; //eslint-disable-line
  it('Creating new binary tree', () => {
    const expected = {
      value: 7,
      left: {
        value: 4,
        left: { value: 3, left: null, right: null },
        right: null,
      },
      right: {
        value: 10,
        left: { value: 9, left: null, right: null },
        right: null,
      },
    };
    expect(testTree).toEqual(expected);
  });
  it('Contains method', () => {
    expect(testTree.contains(4)).toBe(true);
  });
  it('DFS pre order', () => {
    const expected = {
      value: 14,
      left: {
        value: 8,
        left: { value: 6, left: null, right: null },
        right: null,
      },
      right: {
        value: 20,
        left: { value: 18, left: null, right: null },
        right: null,
      },
    };
    testTree.DFSpreOrderTraversal(multTwo);
    expect(testTree).toEqual(expected);
  });
  it('DFS in order', () => {
    const expected = {
      value: 28,
      left: {
        value: 16,
        left: { value: 12, left: null, right: null },
        right: null,
      },
      right: {
        value: 40,
        left: { value: 36, left: null, right: null },
        right: null,
      },
    };
    testTree.DFSinOrderTravesal(multTwo);
    expect(testTree).toEqual(expected);
  });
  it('DFS post order', () => {
    const expected = {
      value: 56,
      left: {
        value: 32,
        left: { value: 24, left: null, right: null },
        right: null,
      },
      right: {
        value: 80,
        left: { value: 72, left: null, right: null },
        right: null,
      },
    };
    testTree.DFSpostOrderTraversal(multTwo);
    expect(testTree).toEqual(expected);
  });
  it('BFS traversal', () => {
    const expected = {
      value: 28,
      left: {
        value: 16,
        left: { value: 12, left: null, right: null },
        right: null,
      },
      right: {
        value: 40,
        left: { value: 36, left: null, right: null },
        right: null,
      },
    };
    testTree.DFSinOrderTravesal(divTwo);
    expect(testTree).toEqual(expected);
  });
  it('Check if tree is full', () => {
    expect(testTree.checkIfFull()).toBe(false);
  });
  it('Check if balanced', () => {
    expect(testTree.checkIfBalanced()).toBe(true);
  });
});
