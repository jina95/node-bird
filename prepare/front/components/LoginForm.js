import React, { useCallback } from "react";
import { Button, Form , Input} from "antd"
import Link from "next/link";
import styled from "styled-components"
import useInput from "./hooks/useInput";
import { useDispatch, useSelector } from "react-redux";

import { loginRequestAction } from "../reducers/user"


// styled.div 하게되면 ButtonWrapper 는 div 가 된다.
// css 적듯이 
const ButtonWrapper = styled.div`
    margin-top: 10px;
`
const FormWrapper = styled(Form)`
    padding: 10px;
`


const LoginForm = () => {
    const dispatch = useDispatch();

    const { logInLoading } = useSelector((state) => state.user)

    const [ email, onChangeEmail ] = useInput("")
    const [ password, onChangePassword ] = useInput("")

    // onFinish -> e.preventDefault 적용되어있다.
    const onSubmitForm = useCallback(() => {
        dispatch(loginRequestAction({ email, password }))
    }, [email, password])
    
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br/>
                {/* 컴포넌트에 props로 넘겨주는 값은 useCallback 사용 */}
                <Input name="user-email" type={email} value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>

        </FormWrapper>
    )
}

export default LoginForm;