
const merge = (arr1, arr2) => {
  const newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    const toPush = arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift();
    newArr.push(toPush);
  }
  if (arr1.length > 0) {
    return [...newArr, ...arr1];
  } else if (arr2.length > 0) {
    return [...newArr, ...arr2];
  }
  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const middle = arr.length / 2;
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

export default mergeSort;
