import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProtectedRoute from "../components/ProtectedRoute";
import api from "../axiosInstance";
import { useParams, Link } from "react-router-dom";



function PostPage() {

    const { postId } = useParams();
    const [post, setPost] = useState({
        title: 'Loading...',
        body: 'Loading...',
        tags: [],
        reactions: '0'
    });
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPost();
        getComments();
    }, [postId]);

    async function getPost() {
        const response = await api.get(`/posts/${postId}`);
        setPost(response.data)
    }

    async function getComments() {
        const { data } = await api.get(`/posts/${postId}/comments`)
        setComments(data.comments);
    }


    return (
        <>
            <ProtectedRoute>
                <Header />
                <Link to='/posts' >
                    <h3> ⬅ Back to posts</h3>
                </Link>
                <div className="container">
                    <div className="post-container">
                        <h1>{post?.title}</h1>
                        <p>
                            {post?.body}
                        </p>
                        {post?.tags.map(
                            tag => (<span key={tag.id} className='tag'>{tag}</span>
                            ))}
                        <span className='reactions'>
                            🧡 {" "} {post?.reactions}
                        </span>
                        <div className="comments-list">
                            <h2>Comments</h2>
                            {comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    <span className="user">@{comment.user.username}</span>
                                    <p>{comment.body}</p>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </ProtectedRoute>
        </>
    );
}

export default PostPage;