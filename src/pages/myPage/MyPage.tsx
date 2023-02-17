import React from 'react';
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import MediaBlock from "../../components/mediaBlock/MediaBlock";
import Group from '../../components/groupBlock/Group'
import PostAddForm from "../../components/postAddForm/PostAddForm";
import Posts from "../../components/posts/Posts";


import c from './myPage.module.css'

const MyPage = () => {
    return (
        <div className={c.myPage}>
            <ProfileHeader/>
            <div className={c.photoAndFriendsBlock}>
                <MediaBlock/>
                <Group/>
            </div>
            <div className={c.posts}>
                <PostAddForm/>
                <Posts/>
            </div>

        </div>
    );
};

export default MyPage;