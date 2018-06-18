
export default (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
  return arr;
};
