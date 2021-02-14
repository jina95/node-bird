import React from "react";
import PropTypes from "prop-types";
import { Card, Popover, Button, Avatar } from "antd"
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux";

const PostImages = ({images}) => {

    return (
        <div>
            구현중
        </div>
    )   
}

PostImages.propTypes = {
    images : PropTypes.arrayOf(PropTypes.object)
}

export default PostImages