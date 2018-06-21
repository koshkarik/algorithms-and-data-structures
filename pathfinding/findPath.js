/* eslint-disable */
const test = [[0, 0, 0, 0],
              [0, 0, 1, 1],
              [0, 0, 0, 0],
              [0, 1, 1, 1]];
/* eslint-enable */

const makeStrFromCoords = ([y, x]) => `${y}-${x}`;
const makeCoordsFromStr = (str) => {
  const splitted = str.split('');
  const result = [];
  let workingStr = '';
  for (let i = 0; i < splitted.length; i += 1) {
    if (splitted[i] === '-') {
      result.push(Number(workingStr));
      workingStr = '';
    } else {
      workingStr += splitted[i];
    }
    if (i === splitted.length - 1) {
      result.push(Number(workingStr));
    }
  }
  return result;
};
const findAllNeighbs = (matrix, [spotY, spotX]) => {
  const result = [];
  const north = spotY - 1;
  const south = spotY + 1;
  if (matrix[north] && matrix[north][spotX] === 0) {
    result.push(makeStrFromCoords([north, spotX]));
  }
  if (matrix[south] && matrix[south][spotX] === 0) {
    result.push(makeStrFromCoords([south, spotX]));
  }
  if (matrix[spotY][spotX - 1] !== undefined && matrix[spotY][spotX - 1] === 0) {
    result.push(makeStrFromCoords([spotY, spotX - 1]));
  }
  if (matrix[spotY][spotX + 1] !== undefined && matrix[spotY][spotX + 1] === 0) {
    result.push(makeStrFromCoords([spotY, spotX + 1]));
  }
  return result;
};

export default (matrix, [beginY, beginX], [endY, endX]) => {
  const visited = [makeStrFromCoords([beginY, beginX])];
  const parents = {};
  const queue = [];
  queue.push(makeStrFromCoords([beginY, beginX]));
  while (queue.length > 0) {
    const target = queue.shift();
    visited.push(target);
    const [targetY, targetX] = makeCoordsFromStr(target);
    if (targetY === endY && targetX === endX) {
      break;
    }
    const neighbs = findAllNeighbs(matrix, [targetY, targetX]);
    neighbs.forEach((neighb) => {
      if (!visited.includes(neighb)) {
        if (!parents[neighb]) {
          parents[neighb] = target;
        }
        queue.push(neighb);
      }
    });
  }
  let current = makeStrFromCoords([endY, endX]);
  if (!parents[current]) {
    return 'There is no path';
  }
  const path = [current];
  while (current) {
    if (parents[current]) {
      path.push(parents[current]);
    }
    current = parents[current];
  }
  return path.reverse();
};
