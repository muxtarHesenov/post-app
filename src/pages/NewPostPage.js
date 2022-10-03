import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Header from "../components/Header";
import NewPostForm from "../components/NewPostForm";
import api from '../axiosInstance';




function NewPostPage() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleFormSubmit({ title, content, tags }) {
        try {
            setError('');
            setLoading(true);
            await api.post('posts', { title, content, tags });
            navigate('/posts');
        } catch {
            setError(' Oops! Someting went wrong.');
        } finally {
            setLoading(false);
        }
    }



    return (
        <ProtectedRoute>
            <Header />
            <Link to='/posts' >
                <h3> ⬅ Back to posts</h3>
            </Link>
            <div>
                <h1>Create New Post</h1>
            </div>
            <div className="container">
                <div className="post-container">
                    {error && <span className="error">{error}</span>}
                    <NewPostForm onSubmit={handleFormSubmit} loading={loading} />
                </div>
            </div>
        </ProtectedRoute>
    );
}




export default NewPostPage;