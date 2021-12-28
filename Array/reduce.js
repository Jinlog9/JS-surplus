// Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.
// const result = myReduce(arr, (next,prev) => {...}, []);


const myReduce = (arr, callback, initialValue) => {
    let acc = 0;
    // 초기값 빈배열 체크
    //여기에 구현
    if(initialValue !== undefined) {
        if(initialValue.length !== 0) acc += initialValue;

        arr.forEach((element) => {
            acc = callback(element, acc);
        })
    }
    else {
        acc += arr[0];
        for(let i = 1; i < arr.length; i++) {
            acc = callback(arr[i], acc);
        }
    }
    return acc;
}

const result = myReduce([0, 1, 3, 5], (next, prev) => {
    return next + prev;
}, 0);

console.log(result);