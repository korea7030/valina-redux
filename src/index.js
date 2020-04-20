import { createStore } from "redux";

// store: data를 저장하는 공간
// strate: application의 상태값을 저장
const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// store에 전달할 함수 생성
const countModifier = (count = 0, action) => {  // initialize state
  // console.log(count, action); // 0 {type: "@@redux/INITl.9.7.q.0.g"}
  switch(action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// 함수를 전달받아야 한다.
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
// store의 변화 감지용
countStore.subscribe(onChange);
// console.log(countStore); // dispatch, subscribe, getState, replaceReducer, Symbol 정보

plus.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));