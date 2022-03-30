import Box from "./Box.js";

const swap = (arr, value1, value2) => {
  let temp = arr[value1];
  arr[value1] = arr[value2];
  arr[value2] = temp;
};

export const bubbleSort = (datas) => {
  const arr = _.cloneDeep(datas);
  let operationNum = 0;
  let swapNum = 0;
  let flag = false;
  for (let i = 0; i < arr.length - 1; i++) {
    flag = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      operationNum++;
      if (arr[j] > arr[j + 1]) {
        flag = false;
        swap(arr, j, j + 1);
        swapNum++;
        (function () {
          setTimeout(() => {
            Box.swapBox(j, j + 1);
          }, 500 * i);
        })();
      }
    }
    if (flag) break;
  }
  console.log(`비교 연삿횟수 : ${operationNum}`);
  console.log(`교환횟수 : ${swapNum}`);
  console.log(arr);
  return arr;
};

export const selectionSort = (datas) => {
  const arr = _.cloneDeep(datas);
  let operationNum = 0;
  let swapNum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      operationNum++;
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, i, min);
    console.log(i, min, arr);
    swapNum++;
    (function () {
      setTimeout(() => {
        Box.swapBox(i, min);
      }, 500 * i);
    })();
  }
  console.log(`비교 연삿횟수 : ${operationNum}`);
  console.log(`교환횟수 : ${swapNum}`);
  console.log(arr);
  return arr;
};

export const insertionSort = (datas) => {
  const arr = _.cloneDeep(datas);
  let operationNum = 0;
  let swapNum = 0;

  for (let i = 1; i < arr.length; i++) {
    let key = i;
    for (let j = i - 1; j >= 0; j--) {
      operationNum++;
      if (arr[key] < arr[j]) {
        swap(arr, j, key);
        // (function () {
        //   setTimeout(() => {
        //     Box.swapBox(j, key);
        //   }, 500 * i);
        // })();
        key = j;
        swapNum++;
      } else break;
    }
  }

  console.log(`비교 연삿횟수 : ${operationNum}`);
  console.log(`교환횟수 : ${swapNum}`);
  console.log(arr);
};

// export const insertionSort = (datas) => {
//   const arr = datas;
//   let operationNum = 0;
//   let swapNum = 0;
//   let i, j, key;

//   for (i = 1; i < arr.length; i++) {
//     key = arr[i];
//     for (j = i - 1; j >= 0 && arr[j] > key; j--) {
//       operationNum++;
//       arr[j + 1] = arr[j];
//       swapNum++;
//     }
//     arr[j + 1] = key;
//   }

//   console.log(`비교 연삿횟수 : ${operationNum}`);
//   console.log(`교환횟수 : ${swapNum}`);
//   console.log(arr);
// };

const conquer = (arr) => {
  if (arr.length === 1) return arr;
  const mid = parseInt(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return combine(conquer(leftArr), conquer(rightArr));
};

const combine = (left, right) => {
  const tmp = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      tmp.push(left[leftIndex]);
      leftIndex++;
    } else {
      tmp.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return tmp.concat(left.slice(leftIndex), right.slice(rightIndex));
};

export const mergeSort = (datas) => {
  const arr = _.cloneDeep(datas);
  const sortedArr = conquer(arr);
  console.log(sortedArr);
};

const partition = (arr, start, end) => {
  console.log(arr, start, end);
  const pivot = arr[parseInt((start + end) / 2)];
  while (start <= end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  return start;
};

const _quickSort = (arr, start, end) => {
  const index = partition(arr, start, end);
  console.log(index);
  if (start < index - 1) {
    _quickSort(arr, start, index - 1);
  }
  if (index < end) {
    _quickSort(arr, index, end);
  }
};

export const quickSort = (datas) => {
  const arr = _.cloneDeep(datas);
  _quickSort(arr, 0, arr.length - 1);
  console.log(arr);
};
