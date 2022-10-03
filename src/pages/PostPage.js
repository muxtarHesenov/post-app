import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProtectedRoute from "../components/ProtectedRoute";
import api from "../axiosInstance";
import { useParams, Link } from "react-router-dom";
import CommentForm from "../components/CommentForm";



function PostPage() {
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([]);

    const { postId } = useParams();
    const [post, setPost] = useState({
        title: 'Loading...',
        body: 'Loading...',
        tags: [],
        reactions: '0'
    });

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

    async function addComment({content}) {
        await api.post(`posts/${postId}/comments`, {content})
        getComments()
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
                                    <span className="user">@{comment.username}</span>
                                    <p>{comment.body}</p>
                                </div>

                            ))}
                        </div>
                    <CommentForm onSubmit={addComment} loading={loading } />

                    </div>
                </div>
            </ProtectedRoute>
        </>
    );
}

export default PostPage;