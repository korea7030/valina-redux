import { createStore } from "redux";

// store: data를 저장하는 공간
// strate: application의 상태값을 저장
const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// store에 전달할 함수 생성
const countModifier = (count = 0, action) => {  // initialize state
  // console.log(count, action); // 0 {type: "@@redux/INITl.9.7.q.0.g"}
  if (action.type === "ADD") {
    return count +1;
  } else if (action.type === "MINUS"){
    return count -1;
  } else {
    return count;
  }
};

// 함수를 전달받아야 한다.
const countStore = createStore(countModifier);
// console.log(countStore); // dispatch, subscribe, getState, replaceReducer, Symbol 정보

//call store action
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState());