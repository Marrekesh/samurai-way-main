import React from 'react';

import Post from "../post/Post";

import c from './posts.module.css'


const Posts = () => {

    return (
        <div className={c.posts}>
            <Post/>
            <Post/>
        </div>
    );
};

export default Posts;