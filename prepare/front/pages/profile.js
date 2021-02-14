import React from "react";
import Head from "next/head"
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm"
import FollowList from "../components/FollowList"

const Profile = () => {
    const followerList = [
        {nickname: "알렉산더"},
        {nickname: "빌"},
        {nickname: "구스타프"},
    ]
    const follwingList = [
        {nickname: "알렉산더"},
        {nickname: "빌"},
        {nickname: "구스타프"},
    ]
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={follwingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    )
}

export default Profile;