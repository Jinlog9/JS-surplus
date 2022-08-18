const randomData = [1, 7, 5, 3, 4, 2, 6, 10, 9, 8];

const conquer = (arr) => {
  if (arr.length === 1) return arr;

  const mid = parseInt(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return combine(conquer(left), conquer(right));
};

const combine = (left, right) => {
  let tmp = [];
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

const mergeSort = (datas) => {
  const arr = datas;
  const sortedArr = conquer(arr);
  console.log(sortedArr);
};

mergeSort(randomData);
