// I hate this swap function... It's too dirty... Those side effects.

const swap = (arr, ind1, ind2) => {
  const temp = arr[ind1];
  arr[ind1] = arr[ind2]; // eslint-disable-line
  arr[ind2] = temp; // eslint-disable-line
};

// It can be done much easier
// You can create new arrays - with lower and bigger nums than pivot. And just push there nums...
// But it will take much more memory

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let pivotInd = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      swap(arr, i, pivotInd);
    }
    if (pivot > arr[i] && i > pivotInd) {
      swap(arr, i, pivotInd);
      pivotInd += 1;
    } else if (pivot > arr[i]) {
      pivotInd += 1;
    }
  }
  const left = quickSort(arr.slice(0, pivotInd));
  const right = quickSort(arr.slice(pivotInd + 1));
  return [...left, pivot, ...right];
};

export default quickSort;
