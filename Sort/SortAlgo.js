import Box from "./Box.js";

const swap = (arr, value1, value2) => {
    let temp = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = temp;
}

// export const bubbleSort = (datas) => {
//     const arr = datas;
//     let operationNum = 0;
//     let flag = false;
    
//     for(let i = 0; i < arr.length - 1; i++) {
//         flag = true;
//         for(let j = i - 1; j < arr.length - i; j++) {
//             console.log(i, j);
//             operationNum++;
//             if(arr[j - 1] > arr[j]) {
//                 flag = false;
//                 swap(arr, j - 1, j);
//             }
//         }
//         // if(flag) break;
//     }
//     console.log(`비교 연삿횟수 : ${operationNum}`);
//     console.log(arr);
//     return arr;
// }


export const bubbleSort = (datas) => {
    const arr = datas;
    let operationNum = 0;
    let swapNum = 0;
    let flag = false;
    
    for(let i = 0; i < arr.length - 1; i++) {
        flag = true;
        for(let j = 0; j < arr.length - 1 - i; j++) {
            operationNum++;
            if(arr[j] > arr[j + 1]) {
                flag = false;
                swap(arr, j, j + 1);
                swapNum++;
            }
        }
        if(flag) break;
    }
    console.log(`비교 연삿횟수 : ${operationNum}`);
    console.log(`교환횟수 : ${swapNum}`);
    console.log(arr);
    return arr;
}

export const selectionSort = (datas) => {
    const arr = datas;
    let operationNum = 0;
    let swapNum = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            operationNum++;
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        swap(arr, i, min);
        console.log(i, min, arr);
        swapNum++;
    }
    console.log(`비교 연삿횟수 : ${operationNum}`);
    console.log(`교환횟수 : ${swapNum}`);
    console.log(arr);
    return arr;
}

export const insertionSort = (datas) => {
    const arr = datas;
    let operationNum = 0;
    let swapNum = 0;

    for(let i = 1; i < arr.length; i++) {
        let key = i;
        for(let j = i - 1; j >= 0; j--) {
            operationNum++;
            if(arr[key] < arr[j]) {
                swap(arr, j, key);
                key = j;
                swapNum++;
            } else break;
        }
    }

    console.log(`비교 연삿횟수 : ${operationNum}`);
    console.log(`교환횟수 : ${swapNum}`);
    console.log(arr);
}

// export const insertionSort = (datas) => {
//     const arr = datas;
//     let operationNum = 0;
//     let swapNum = 0;
//     let i, j, key;

//     for(i = 1; i < arr.length; i++) {
//         key = arr[i];
//         for(j = i - 1; j >= 0 && arr[j] > key; j--) {
//             operationNum++;
//             arr[j+1] = arr[j];
//             swapNum++;
//         }
//         arr[j+1] = key;
//     }

//     console.log(`비교 연삿횟수 : ${operationNum}`);
//     console.log(`교환횟수 : ${swapNum}`);
//     console.log(arr);
// }

const conquer = (arr, tmp, left, right) => {
    if(left < right) {
        const mid = parseInt((left + right) / 2);
        conquer(arr, tmp, left, mid);
        conquer(arr, tmp, mid+1, right);
        combine(arr, tmp, left, mid, right);
    }
}

const combine = (arr, tmp, left, mid, right) => {
    let start = left;
    let end = mid + 1;
    let index = left;

    while(start >= mid && end >= right) {
        console.log(start, end);
        if(arr[start] >= arr[end]) {
            tmp[index] = arr[end];
            start++;
        } else {
            tmp[index] = arr[start];
            end++;
        }
        index++;
    }
    console.log(tmp);
}

export const mergeSort = (datas) => {
    const arr = datas;
    const tmp = new Array(arr.length);
    conquer(arr, tmp, 0, arr.length - 1);
    console.log(arr);
}