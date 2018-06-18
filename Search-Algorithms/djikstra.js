
/*eslint-disable */
const lowestCostNode = (costs, processed) =>
  Object.keys(costs).reduce((acc, cur) => {
    if (acc === null || costs[cur] < costs[acc]) {
      if (!processed.includes(cur)) {
        acc = cur;
      }
    }
    return acc;
  }, null);

export default (graph) => {
  const costs = Object.assign({ finish: Infinity }, graph.start);
  const parents = { finish: null };
  for (let child in graph.start) {
    parents[child] = 'start';
  }
  const processed = [];
  let node = lowestCostNode(costs, processed);
  while(node) {
    let cost = costs[node];
    let children = graph[node];
    for (let child in children) {
      let newCost = cost + children[child];
      if (!costs[child]) {
        costs[child] = newCost;
        parents[child] = node;
      }
      if (costs[child] > newCost) {
        costs[child] = newCost;
        parents[child] = node;
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }
  const optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();
  return {
    distance: costs.finish,
    path: optimalPath,
  };
};
