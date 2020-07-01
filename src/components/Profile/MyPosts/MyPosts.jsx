import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = 'Fino Alla Fine' likesCount = '6'/>
                <Post message = 'Forza Juve!!!!' likesCount = '5'/>
            </div>
        </div>
    );
}

export default MyPosts;