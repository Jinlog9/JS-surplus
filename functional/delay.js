const { reduce, add } = require("./lib.js");

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }

  return res;
};

// 느긋한 L.range
const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

const list = L.range(4);
console.log(list); // iterator 출력
console.log(reduce(add, list));
