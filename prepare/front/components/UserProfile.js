import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd"
import { useDispatch } from "react-redux";

import { logoutAction }from "../reducers/user"

const UserProfile = () => {
    const dispatch = useDispatch()
    const onLogOut = useCallback(() => {
        dispatch(logoutAction())
    }, [])
    return (
        <Card
            actions={[
                <div key="twit">트윗<br /> 0</div>,
                <div key="following">팔로잉<br /> 0</div>,
                <div key="follwer">팔로워<br /> 0</div>
            ]}>
            <Card.Meta
                avatar={<Avatar>SK</Avatar>}
                title="SkarsGrad" 
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;