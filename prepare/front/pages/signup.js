import React, { useCallback, useState } from "react";
import Head from "next/head"
import AppLayout from "../components/AppLayout"
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components"
import useInput from "../components/hooks/useInput";

const ErroMessage = styled.div`
    color: red;
`

const Signup = () => {
    const [ id, onChangeId ] = useInput("")
    const [ nickname, onChangeNickname ] = useInput("")
    const [ password, onChangePassword ] = useInput("")

    const [ passwordCheck, setPasswordCheck ] = useState("")
    const [ passwordError, setPasswordError ] = useState(false)

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password)
    }, [password])

    const [ term, setTerm ] = useState("")
    const [ termError, setTermError ] = useState(false)

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked)
        setTermError(false)
    }, [term])

    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true)
        }
        if(!term){
            return setTermError(true)
        }
        console.log(id, password, nickname)
    }, [ password, passwordCheck, term])

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">패스워드</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">패스워드 체크</label>
                    <br />
                    <Input 
                        name="user-password-check" 
                        type="password"
                        value={passwordCheck} 
                        required 
                        onChange={onChangePasswordCheck} />
                    {passwordError && <ErroMessage>비밀번호가 일치하지 않습니다.</ErroMessage>}
                </div>
                <div>
                    <Checkbox name="user-team" checked={term} onChange={onChangeTerm}>
                        해당 내용을 동의합니다.
                    </Checkbox> 
                    { termError && <ErroMessage>약관에 동의하셔야 합니다.</ErroMessage>}
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}

export default Signup