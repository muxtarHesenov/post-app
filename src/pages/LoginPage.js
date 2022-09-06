import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from '../axiosInstance';
import LoginForm from "../components/LoginForm";

function LoginPage() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleFormSubmit({ username, password, }) {
        setLoading(true)
        setError('')
        try {
            const response = await api.post('/auth/login', { username, password })
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/posts');
        } catch (error) {
            setError('Username or Password wrong!')
        } finally {
            setLoading(false)
        }
    }

    return (

        <>
            <div className="container  flex-center">
                <div className="login-margin">
                    <div className="login-title">
                        <h1>Login</h1>
                    </div>
                    <div className="login-title">
                    {error && <span className="login-error">{error}</span>}
                    </div>
                    <LoginForm onSubmit={handleFormSubmit} loading={loading} />
                </div>
            </div>
        </>
    );
}
export default LoginPage;