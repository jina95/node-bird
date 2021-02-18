import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

import reducer from "../reducers"
import rootSaga from "../sagas";





const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    // 배포용일때는 devtool 을 연결 안하고, 개발모드일때만 히스토리가 남는 devtool 연결
    const middlewares = [sagaMiddleware]
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)): composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store;
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === "development"})

export default wrapper;


// reducer -> retrun { ...state, ...etc} -> 새로운 객체 반환 ( 변경 내역이 추적 가능하다. -> 이전 기록과 현재 기록이 있기때문에 (현재기록을 변경시켜버리면 추적할 수 없다. ))
// ...state-> 참조관계 유지 , 메모리를 아낀다 ( 안바뀌는 애들 )
// { } -> 새로운 객체인것 