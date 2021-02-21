import { all, fork, takeLatest, delay, put, call } from "redux-saga/effects";
import axios from "axios";

import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_REQUEST} from "../reducers/user"


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
            type: LOG_IN_SUCCESS,
            data: action.data
        })
    } catch(err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }
    
}   
function logOutAPI () {
    return axios.post("/api/logout")
}

function* logOut () {
    try {
        // const result = yield call(logOutAPI)
         yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            // data: result.data
        })
    } catch(err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
    
}   

function signUpAPI () {
    return axios.post("/api/logout")
}

function* signUp () {
    try {
        // const result = yield call(logOutAPI)
         yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data
        })
    } catch(err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
    
}   


function* watchLogIn() {
    // take : 로그인이라는 액션이 실행될때 까지 기다리겠다. 
    // yield 의 치명적 단점 -> 1회용
    // -> while 로 감싸면 무한하게 사용 가능 
    // while take -> 동기적으로 동작
    // take Every -> 비동기로 동작 
    // -> while 문 대체 가능 

    yield takeLatest(LOG_IN_REQUEST, login);
    
}

// takeLatest -> 마우스 두번눌리는 인식되는 경우 앞에 실수로 눌린거는 무시되고 마지막꺼만 살려준다.
// 완료되지 않은 둘다 로딩중인 상태일때 해당 
// 치명적 단점 : 요청을 취소하는게 아니라 응답을 취소하는거라 서버쪽에 똑같은 데이터가 연달아 저장되지는 않았는지 검사 필수 ( 요청까지는 취소 X ) , trottle 을 사용해야함  
// ex yield throttle("ADD_POST_REQUEST", addPost, 10000) -> 10초 동안은 1번만 실행 (시간제한)
// takeLeading -> 첫번째 이벤트만 
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}
// combine reducer 는 필요 없음