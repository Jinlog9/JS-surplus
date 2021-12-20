// 팩토리얼 재귀로 구현하기
function factorial(n) {
    // 10! = 3628800

    // 반복문
    // let sum = 1;
    // for(let i = 1; i <= n; i++) {
    //     sum *= i;
    // }
    // return sum;

    // 재귀
    if(n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

// console.log(factorial(10));

// 피보나치 수열 재귀로 구현하기

function fibonacci(n) {
    // 피보나치 수열(10) = 55
    // 1 1 2 3 5 8 13 21 34 55
    // 반복문
    // let firstValue = 1;
    // let secondValue = 1;
    // if(n === 1 || n ===2) {
    //     return 1;
    // }

    // let temp = 1;
    // for(let i = 3; i <= n; i++) {
    //     temp = firstValue + secondValue;
    //     firstValue = secondValue;
    //     secondValue = temp;
    // }

    // return temp;

    // 재귀
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));