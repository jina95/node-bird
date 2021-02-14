import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components"
import { Row, Col, Input, Menu } from "antd"
import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import UserProfile from "./UserProfile"

// 인라인 스타일링 하면 리랜더링 할때 최적화가 안되기 때문에 아래와 같은 방법 사용
// {} === {} -> false 이기 때문에 인라인스타일을 보고 리랜더링 하게 된다.
// 만약 이렇게 따로 빼는게 싫다 -> useMemo : 값을 캐싱 / useCallback : 함수를 캐싱
const SearcInput = styled(Input.Search)`
    vertical-align = middle;
`

const AppLayout = ({children}) => {
    // const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    // const style = useMemo(() => ({ verticalAlign:  "middle"}), [])

    return (
        <div>
            <Menu mode="horizontal">
                {/* a -> href 가 아닌 link -> href */}
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>  
                </Menu.Item>
                <Menu.Item>
                    {/* <Input.Search style={style} /> */}
                    <SearcInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* gutter -> 컬럼간의 간격 */}
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/jina95" target="_blank" rel="noreferrer noopener">Jina Github</a>
                </Col>
            </Row>
        </div>
    )
}



export default AppLayout