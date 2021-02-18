// 페이지별 공통 처리
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head"
import "antd/dist/antd.css"
import withReduxSaga from "next-redux-saga"
import wrapper from "../store/configureStore"

const NodeBird = ({Component}) => {
    return(
        // index.js 의 return 부분이 컴포넌트에 들어간다 -> index.js의 부모인것.
        // 모든페이지에서 공통인경우는 -> _app.js
        // 특정컴포넌트 끼리 공통인 경우는 -> AppLayout 
        <> 
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
        // 예전 버전에서는 <Provider store={store}> 로 감싸줬어야 했지만, 현재는 알아서 감싸줌 
        // 그래서 현재는 오히려 감싸주면 에러 발생 !
    )
}

NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired
}

export default wrapper.withRedux(withReduxSaga(NodeBird));