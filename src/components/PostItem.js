import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import api from '../axiosInstance';
import en from 'javascript-time-ago/locale/en';
import TimeAgo from 'javascript-time-ago';

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US');

function PostItem({ post }) {
    const [isShow, setIsShow] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [count, setCount] = useState(+post.reactions || 0);
    const [liked, setLiked] = useState(false);

    function handleShowSetting(e) {
        setIsShow(current => !current)
    }

    async function postDelete(postId) {
        await api.delete(`/posts/${postId}`);
        setIsDelete(true)

    }


    async function handleReaction(postId) {
        if (liked) {
            setCount(count => count - 1);
        } else {
            setCount(count => count + 1);
        }
        setLiked(liked => !liked)

        await api.post(`/posts/${post.id}/reactions`);
    }


    useEffect(() => {
        const fethReactions = async () => {
            const { data } = await api.get(`/posts/${post.id}/reactions`);
            const user = JSON.parse(localStorage.getItem('user'));
            const myReaction = data.find((reactions) => reactions.user_id === user.id);
            if (myReaction) {
                setLiked(true);
            }
        }
        fethReactions()
    }, [])

    return (
        <>
            <div className={`posts ${isDelete ? 'post-delete' : ''}`} key={post.id}>

                <span onClick={handleShowSetting} className="delete">...</span>
                <ul className="setting" style={{ display: isShow ? 'block' : 'none' }} >
                    <li onClick={() => postDelete(post.id)} >Delete</li>
                    <li>Edit</li>
                </ul>
                <div className="post-header">
                    <img className="image" src={post.image} />
                    <div>
                        <h4 className="post-username" >{post.username}</h4>
                        <p className="meta">
                            {timeAgo.format(new Date(post.create_at))}
                        </p>
                    </div>
                </div>

                <h3>
                    <Link to={`/posts/${post.id}`} >
                        {post.title}
                    </Link>
                </h3>

                <br />
                <p>{post.body}</p>
                <br />

                {post.tags.map(
                    tag => (<span key={tag.id} className='tag'>{tag}</span>
                    ))}
                <span onClick={() => handleReaction(post.id)} className='reactions'>
                    {liked ? <span className="hearts"> ❤ </span> : <div className="emptyHeart"> ♡ </div>} {" "}
                    <div className="likeCount">{count}</div>
                </span>



            </div>
        </>
    );
}

export default PostItem