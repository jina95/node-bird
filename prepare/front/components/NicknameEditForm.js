import React, { useMemo } from "react";
import { Form, Input } from "antd"

const NicknameEditForm = () => {
    const style = useMemo(() => ({
        marginBotton: "20px",
        border: "1px solid #D9D9D9",
        padding: "30px"
    }, []))
    return (
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    )
}

export default NicknameEditForm