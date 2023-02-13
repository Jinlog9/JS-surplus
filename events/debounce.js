// 사용자가 이벤트를 발생시켰을때 설정한 시간동안 여러번 클릭해도 마지막에 클릭한 이벤트만 동작시켜 사용자 경험을 높이는 기술
let timer = null;

const debounce = (callFunc, time) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => callFunc(), time);
};
