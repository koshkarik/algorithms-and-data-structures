
export default (arr, item) => {
  const binary = (begin, end) => {
    if (begin > end) {
      return 'item not found';
    }
    const middle = Math.floor((begin + end) / 2);
    if (arr[middle] === item) {
      return arr[middle];
    }
    return item < arr[middle] ? binary(begin, middle - 1) : binary(middle + 1, end);
  };
  return binary(0, arr.length - 1);
};
