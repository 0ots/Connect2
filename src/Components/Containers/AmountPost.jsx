// import style from './AmountPost.module.css'
import { useEffect, useState } from 'react';
import Post from '../Inputs/Post';
import { getPost } from '../../Services/postService';

export default function AmountPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost()
            .then((result) => {
                setPosts(result)
            });
    }, []);

    return (
        <div>
            {
                posts ? posts.map((post) => {
                    return <Post post={post}></Post>
                }) : <></>
            }
        </div>
    )
}