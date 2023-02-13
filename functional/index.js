// 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);
// console.log(add10(5));
// addMaker 함수가 왜 클로저를 사용했을까 ? 같은 코드 환경에서 이전에 저장된 a 값을 사용하기 때문에 클로저를 사용한다 라고 말할 수 있다.

// 제너레이터를 사용하여 홀수만 뽑는 로직을 만들어보자.
// function* odd(l) {
//   for (let i = 1; i <= l; i++) {
//     if (i % 2) yield i;
//   }
// }

// let oddIter = odd(10);
// console.log(oddIter.next());
// console.log(oddIter.next());

const products = [
  { name: "반팔티", price: 15000, quantity: 1 },
  { name: "긴팔티", price: 20000, quantity: 2 },
  { name: "핸드폰케이스", price: 15000, quantity: 3 },
  { name: "후드티", price: 30000, quantity: 4 },
  { name: "바지", price: 25000, quantity: 5 },
];

// name과 price만 존재한 배열을 뽑는 추상화한 map 함수를 만들어보자.
const map = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

// console.log(map((el) => el.name, products));
// console.log(map((el) => el.price, products));
// 특정 가격을 뽑을 수 있는 filter 함수를 만들어보자.
const filter = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

// console.log(filter((el) => el.price < 20000, products));
// products의 price를 모두 더하는 reduce 함수를 만들어보자.
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

// console.log(reduce((a, b) => a + b, [1, 2, 3, 4, 5]));

// 인자를 계속받아서 결과를 도출하는 go 함수를 완성시켜보자.
const go = (...args) => {
  return reduce((a, f) => f(a), args);
};

// go(
//   0,
//   (a) => a + 1,
//   (a) => a + 10,
//   (a) => a + 100,
//   console.log
// );

// 함수를 계속받아서 결과를 리턴하는 pipe 함수를 완성시켜보자.
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);
// 여러개 인자도 처리하도록 pipe 함수 수정하기
// 여러개의 인자를 다룰 수 있는 curry 함수를 만들어보자.

const total_quantity = (products) =>
  go(
    products,
    map((p) => p.quantity),
    reduce((a, b) => a + b)
  );

const total_price = pipe(
  map((p) => p.price * p.quantity),
  reduce((a, b) => a + b)
);

// console.log(total_quantity(products));
console.log(total_price(products));
