## 객체 탐색 방법

1. for-in : 객체의 모든 열거 가능한 속성들을 반복하여 작업을 수행

- for-in은 ES6에 새롭게 도입된 문법으로 for-of와 많이 비교대상이 되어진다. 그러면 for-in과 for-of는 각각 언제 사용하는게 좋을까?

예제는 구글링을 통해 여러 글을 읽으면서 내가 이해하기 수월했던 MDN과 StackOverFlow에서 가져왔다.

#### for-in & for-of Example
```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`); 
  // a: 1
  // b: 2
  // c: 3
}

// StackOverFlow Example
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];

for (let i in iterable) {
  console.log(i); // logs: 0, 1, 2, "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs: 0, 1, 2,
  }
}

for (let i of iterable) {
  console.log(i); // logs: 3, 5, 7
}
```

> for-in문은 열거 가능한 속성에 대해 임의의 순서로 반복된다. 따라서 순서에 상관없이 속성/키에 접근해야 하는 경우에 사용해야한다. 순서와 관련하여 접근하려면 for-of를 사용하자.  

> for-of는 반복 가능한 객체인 array, Map, Set, String 객체등에서 사용된다.



2. 객체 탐색과 관련한 Object 여러 메서드

** MDN문서 참고 

1. Object.keys() : 객체의 키만 담은 배열을 반환
2. Object.values() : 객체의 값만 담은 배열을 반환
3. entries() : 객체의 키,값 쌍을 담은 배열을 반환

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// "c: false"
```


## 배열 탐색 관련 메서드

javascript의 Array 내장 메서드들을 MDN문서를 통해 정리해보자

1. forEach

> arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

- forEach 메서드는 위처럼 명세되어 있으며 callback함수에 세가지 매개변수를 받는다.(현재 처리 요소, 처리할 현재 인덱스, forEach를 호출한 배열)  

- thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰인다.

- 배열에 적용되는 함수로 배열 각 요소에 callback함수를 적용할 수 있도록 하는 메서드다. 객체를 순회할수 없음

** forEach는 throw(예외)를 발생시키지 않으면 중간에 반복을 종료할 수 없다. 중간에 종료하는 반복문을 만들기 위해서는 forEach가 아닌 다른 반복문을 사용하자
 

2. map

- map 메소드는 호출 배열의 모든 요소에 제공된 함수를 호출한 결과로 채워진 새로운 배열을 만든다.

```javascript
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

MDN에 여러 예제들이 있는데 그 중에서 배열안에 객체들을 내가 원하는 형식으로 포맷팅하여 사용할때 유용할것 같아 위 예제를 가져왔다.  

kvArray를 사용하면서 동시에 해당 배열안의 데이터들을 다른 형식으로 사용할때 유용하다.

** 반환된 배열을 사용하지 않을 때 map함수를 사용하는 것이 아닌 forEach, for-of구문을 사용하자

3. filter

- filter 메소드는 특정 조건에 통과한 모든 요소들을 다시 배열로 만들때 사용한다.

```javascript
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
```

- filter메서드로 특정 문자를 가지고 있는지 체크후 반환하는 함수인데 위 예제는 뭔가 정규식으로 데이터를 가공하는게 더 편해보인다.

4. some

- some 메서드는 배열에서 제공된 함수가 true를 반환하는 요소를 찾으면 true를 반환하고 그렇지 않으면 false를 반환하며 제공된 배열을 수정하지 않는다.

```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // true
```

- callback함수를 전달받아 전달받은 함수 내에서 조건 처리후 불린값을 리턴해준다.

** 불린값을 리턴한다는 점에서 includes함수와 비슷하지만 some메서드는 callback함수를 전달받기 때문에 callback 함수에 조건을 추가하여 배열의 값을 테스팅 할 수 있는게 includes함수와의 큰 차이점이다.

5. every

- some 메서드와 대비되는 함수로 제공된 함수에서 모든 요소가 true를 반환 시 true를 반환하고 하나라도 false를 반환하면 false리턴

6. reduce

- 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고, 하나의 결과값을 반환

> arr.reduce(callback[, initialValue])

- 콜백 함수는 네 개의 인자를 가진다.

1. accumulator : 콜백의 반환값을 누적, 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값

2. currentValue : 처리할 현재 요소

3. currentIndex : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작

4. reduce()를 호출한 배열.

initialValue : callback의 최초 호출에서 첫 번째 인수에 제공하는 값, 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용 But, 보통 초기값을 주는 것이 더 안전

```javascript
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}); // result return 10

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 10); // result return 20
```

** reduce는 javascript 내장메서드 중에서 꽃이라고 불리운다. 그만큼 사용용도가 다양하고 좋은 메서드다. 앞으로 자유자재로 사용할 줄 알게되면 정말 유용하다고 하니 앞으로 많이 사용하는 습관을 가지자.