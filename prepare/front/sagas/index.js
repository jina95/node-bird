import { all, fork, call, take, put, takeEvery, takeLatest, takeLeading, throttle, delay } from "redux-saga/effects"
import axios from "axios";

// 디바운싱 -> 검색창에 입력할때 주로 사용
// 쓰로틀링 -> 스크롤 할때 주로 사용 

// * 을 붙이지 않는다 !!
function logInAPI () {
    // 실제 서버에 요청을 보낸다. 
    return axios.post("/api/login")
}

function* login (action) {
    // put : dispatch 같은 역할 : 해당 객체를 dispatch 한다.
    // call , fork (함수자리, 첫번째 함수자리 이후부터는 인자자리, 인자자리, 인자자리, 인자...)
    try {
        // delay -> setTimeout 같은 역할
        // const result = yield call(logInAPI, action.data)
        yield delay(1000)
        yield put({
            type: "LOG_IN_SUCCESS",
            data: result.data
        })
    } catch(err) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: err.response.data
        })
    }
    
}   
function logOutAPI () {
    return axios.post("/api/logout")
}

function* logOut () {
    try {
        const result = yield call(logOutAPI)
        yield put({
            type: "LOG_OUT_SUCCESS",
            data: result.data
        })
    } catch(err) {
        yield put({
            type: "LOG_OUT_FAILURE",
            data: err.response.data
        })
    }
    
}   

function addPostAPI (data) {
    return axios.post("/api/post", data)
}

function* addPost (action) {
    try {
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: "ADD_POST_SUCCESS",
            data: result.data
        })
    } catch(err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data
        })
    }
    
}   

function* watchLogin() {
    // take : 로그인이라는 액션이 실행될때 까지 기다리겠다. 
    // yield 의 치명적 단점 -> 1회용
    // -> while 로 감싸면 무한하게 사용 가능 
    // while take -> 동기적으로 동작
    // take Every -> 비동기로 동작 
    // -> while 문 대체 가능 

    yield takeLatest("LOG_IN_REQUEST", login);
    
}

// takeLatest -> 마우스 두번눌리는 인식되는 경우 앞에 실수로 눌린거는 무시되고 마지막꺼만 살려준다.
// 완료되지 않은 둘다 로딩중인 상태일때 해당 
// 치명적 단점 : 요청을 취소하는게 아니라 응답을 취소하는거라 서버쪽에 똑같은 데이터가 연달아 저장되지는 않았는지 검사 필수 ( 요청까지는 취소 X ) , trottle 을 사용해야함  
// ex yield throttle("ADD_POST_REQUEST", addPost, 10000) -> 10초 동안은 1번만 실행 (시간제한)
// takeLeading -> 첫번째 이벤트만 
function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
    yield takeLatest("ADD_POST_REQUEST", addPost);
    // yield throttle("ADD_POST_REQUEST", addPost, 10000);
}

export default function* rootSaga(){
    yield all([
        // all -> 배열을 받는다 : 배열에 받은 것들을 한번에 실행된다. (동시에)
        // fork -> 해당 함수를 실행한다. 
        // call -> fork 또는 call로 함수를 실행 
        // fork : 비동기 함수호출(결과 기다리지 않고 바로 다음 실행) / call: 동기 함수 호출(await , .then 처럼 결과값을 받아올때 까지 기다려줌)

        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
    ])
}

// const gen = function*(){} -> 제너레이터 함수
// gen() -> not working
// gen().next() -> working 

// const gen = function* () { 
//     console.log(1)
//     yield;
//     console.log(2);
//     yield;
//     console.log(3);
//     yield 4;
// }
// const generator = gen();
// generator.next() -> 실행하면 console.log(1) 과 { value : unde~, done: false } 던져준다.
// -> 즉 console.log(1), yield 까지 하고 멈춘것
// 또 generator.next() 실행하면 console에 2 를 확인하고 { value : unde~, done: false } 던져준다.
// 또 다시 실행시키면 콘솔에는 3과 { value: 4, done: false} 를 확인할 수 있다.
// 한번 더 실행하게 되면 { value: undefined, done: true} 까지 확인 가능하다.

// 즉 yield 가 있는곳에서 멈춘다는 것을 알 수 있다. 

// saga 에서 절대 멈추지 않는 제너레이터 함수
// const gen = function*(){
//     while(true) {
//         yield '무한';
//     }
// }
// -> 매번 중단된다 
// const g = gen();
// g.next() -> 무한반복 되지 않고 {value: "무한", done:false} 만 던져준다.
// 제너레이터로 이벤트리스너 처럼도 사용 가능하다. 