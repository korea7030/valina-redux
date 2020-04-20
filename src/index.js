import { createStore } from "redux";

// store: data를 저장하는 공간
// strate: application의 상태값을 저장
const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// store에 전달할 함수 생성
const countModifier = (state = 0) => {  // initialize state
  console.log(state);
  return state;
};

// 함수를 전달받아야 한다.
const countStore = createStore(countModifier);
// console.log(countStore); // dispatch, subscribe, getState, replaceReducer, Symbol 정보
console.log(countStore.getState());