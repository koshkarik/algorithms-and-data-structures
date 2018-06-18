
export default (unsorted) => {
  const arrayToSort = [...unsorted];
  for (let i = arrayToSort.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        const temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = temp;
      }
    }
  }
  return arrayToSort;
};
