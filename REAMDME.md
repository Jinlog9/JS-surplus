### JS 중요하다고 생각하는 이론과 실습 끄적끄적

### 1~무한대까지 인자를 받아 합을 구하는 함수를 만들어보자

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

### default Paraemter & rest Paraemter

### Arrow Function ?

### express & statements 차이 ?

### 여러가지 도형의 넓이를 구하는 함수를 만들어 보자

- [ ]  반지름을 입력받아 **원의 넓이**를 계산하는 함수를 만든다.
- [ ]  필요한 인자를 입력받아 **사각형의 넓이**를 계산하는 함수를 만든다.
- [ ]  필요한 인자를 입력받아 **사다리꼴의 넓이**를 계산하는 함수를 만든다.
- [ ]  필요한 인자를 입력받아 **원기둥의 넒이**를 계산하는 함수를 만든다.
- [ ]  숫자가 아니면 **에러를 반환**하도록 구현한다.
- [ ]  인자의갯수가 **부족하면 에러를 반환**한다.