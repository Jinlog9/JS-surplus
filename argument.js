// 1 ~ 무한대까지 인자를 받아 합을 구하는 함수를 만들어보자

function createSum() {
    console.log(arguments);
    var value = 0;
    for(var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value;
}

// const createSum = (...arguments) => {
//     let value = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         value += arguments[i];
//     }
//     return value;
// }

console.log(createSum(1, 2, 3, 4, 5));