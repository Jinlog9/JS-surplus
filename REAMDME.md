### JS 중요하다고 생각하는 이론과 실습 끄적끄적

### 1️⃣ 1~무한대까지 인자를 받아 합을 구하는 함수를 만들어보자

- 자바스크립트는 함수가 실행되면 그 안에서 arguments라는 특별한 지역변수가 존재

- 자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있는데 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근가능  
(하지만 arguments는 배열타입이 아니므로 배열 메서드는 사용 불가해서 유사배열이라 불리움)


```javascript

// ES5
function createSum() {
    console.log(arguments);
    var value = 0;
    for(var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value;
}

// ES6
const createSum = (...arguments) => {
    let value = 0;
    for(let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}

console.log(createSum(1, 2, 3, 4, 5));
```

> ES6에서는 rest 파라미터를 사용하여 가변 인자의 목록을 배열로 전달받을 수 있다. rest파라미터를 기반으로 사용하게 되면 ES5문법 기반으로 작성할시에 유사 배열인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

** ES6의 화살표 함수에는 함수 객체의 arguments 프로퍼티가 없다. 따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 rest 파라미터를 사용해야 한다는 점을 숙지하자.

### 2️⃣ default Paraemter & rest Paraemter

ES6이전에는 rest parameter 라는 좋은 기능이 없어 default parameter를 따랐다. rest parameter문법은 매개변수 처리하는 과정을 쉽게 도와주는 역할을 하는데  매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다.  
그럼 코드를 통해서 두가지 차이점을 살펴보자

```javascript

```

### 3️⃣ Arrow Function ?

화살표 함수는 MDN에서 다음과 같이 설명으로 시작한다.  
화살표 함수 표현식은 전통적인 함수 표현식의 간략한 대안이지만 제한적이므로 모든 상황에서 사용할 수 없습니다.  

그럼 대체 어떤 상황에서 제한적인지?

1. this / super에 대한 자체 바인딩이 없으므로 메서드로 사용해서는 안됨
2. new.target 키워드가 없다.
3. 일반적으로 스코프를 설정하는데 call, apply, bind 방법에는 적합X
4. 생성자로 사용할 수 없습니다.
5. body 안에서 yield 사용불가

> 1, 3, 4번은 어느정도 아는 내용잉지만 2, 5번 내용은 아직 잘 모르겠다.

언제 화살표 함수를 사용하는게 좋을까? 살펴보고자 한다.

MDN 문서에서는 non-method 함수에 가장 적합하다고 설명한다. Why? 메소드로 사용하면 문제가 생기기 때문

### method? non-method?

```javascript
'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

MDN공식문서에서 그대로 가져온 소스다.  
브라우저환겨에서 obj.b() 호출 시 undefined, Window객체가 찍히는데 그 이유는 바로 화살표 함수는 this가 자신인 b를 바인딩 하지않고 전역객체를 바인딩하기 때문!

### new 연산자 & prototype 속성

```javascript
// new constructor
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor

var Foo = () => {};
console.log(Foo.prototype); // undefined
```

1. 화살표 함수는 생성자로서 사용될 수 없으며 new와 함께 사용하면 오류가 발생
2. 화살표 함수는 prototype 속성이 없다.

### 객체리터럴 반환

객체 리터럴 반환은 예상대로 작동하지 않는다고 한다..
```javascript
var func = () => {  foo: 1  };
// func() 호출은 undefined를 반환!

var func = () => {  foo: function() {}  };
// SyntaxError: function 문은 이름이 필요함

// 올바른 코드
var func = () => ({ foo: 1 });
```

이는 중괄호({}) 안 코드가 일련의 문(즉 foo는 라벨처럼 취급되는데, 객체 리터럴 내 키가 아니라)으로 파싱되기 때문


** 더 많은 내용이 있지만 이정도만 알아도 화살표함수를 적잘한 타이밍에 사용하는데 있어 큰 어려움은 없다 생각한다. 그리고 화살표함수 역시 IE에서는 동작을 안한다😅



### 4️⃣ express & statements 차이 ?

- Expression은 ‘수식’이라는 뜻으로 하나 이상의 값으로 표현(reduce)될 수 있는 코드를 의미(값, 변수, 연산자 조합)하며 expression은 평가가 가능해서 하나의 값으로 환원된다.

- statement는 실행가능한 최소의 독립적인 코드 조각으로 코딩을 하면서 컴파일러가 이해하고 실행할 수 있는 모든 구문은 statement인데 대표적으로 if, swtich, 반복문이 이에 해당된다.

그래서 이 둘의 관계는 ? expression은 statement의 부분집합

### 5️⃣ 여러가지 도형의 넓이를 구하는 함수를 만들어 보자

- [x]  반지름을 입력받아 **원의 넓이**를 계산하는 함수를 만든다.
- [x]  필요한 인자를 입력받아 **사각형의 넓이**를 계산하는 함수를 만든다.
- [x]  필요한 인자를 입력받아 **사다리꼴의 넓이**를 계산하는 함수를 만든다.
- [x]  필요한 인자를 입력받아 **원기둥의 넒이**를 계산하는 함수를 만든다.
- [x]  숫자가 아니면 **에러를 반환**하도록 구현한다.
- [x]  인자의갯수가 **부족하면 에러를 반환**한다.