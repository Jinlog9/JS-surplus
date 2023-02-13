// 사용자가 이벤트를 발생시켰을때 일정시간동안에 첫 번째 함수 한 번만 호출되도록 동작하는 기술
let timer = null;

const throttling = (callFunc, time) => {
  if (timer) return;

  timer = setTimeout(() => {
    callFunc();
    timer = null;
  }, time);
};
