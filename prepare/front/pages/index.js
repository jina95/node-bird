// next 는 pages 안에 있는 파일들을 개별적인 페이지로 만들어준다. ( 코드스플리팅 된 컴포넌트로 만들어 줌 )

import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout"
import PostForm from "../components/postForm";
import PostCard from "../components/PostCard";


const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user)
    const { mainPost } = useSelector((state) => state.post)

    // AppLayout 내에 감싸진애들이 children 이 된다.
    return (
        <AppLayout>
            { isLoggedIn &&  <PostForm />}
            { mainPost.map((post) => <PostCard key={post.id} post={post} />)}
            
        </AppLayout>
    )
}

export default Home