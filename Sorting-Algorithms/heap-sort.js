const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j]; // eslint-disable-line
  arr[j] = temp;  // eslint-disable-line
  return arr;
};

const heapify = (arr, heapSize, i) => {
  let largest = i;
  const left = (i * 2) + 1;
  const right = (i * 2) + 2;
  if (left < heapSize && arr[left] > arr[i]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, largest, i);
    heapify(arr, heapSize, largest);
  }
};

const buildHeap = (arr) => {
  const heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
    heapify(arr, heapSize, i);
  }
};

export default (arr) => {
  let heapSize = arr.length;
  buildHeap(arr);
  while (heapSize > 0) {
    heapSize -= 1;
    swap(arr, 0, heapSize);
    heapify(arr, heapSize, 0);
  }
  return arr;
};
