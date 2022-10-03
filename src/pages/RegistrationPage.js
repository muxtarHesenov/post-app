    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import api from "../axiosInstance";


function RegistrationPage() {


    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    async function handleFormSubmit({ username, password, fullName, file }) {
        try {
            setLoading(true);
            setError('')
            await api.post(
                '/registration', { username, password, fullName }
            );
            setMessage('Registration successfull Redirecting to login page');
            setTimeout(() => {
                navigate('/login')
            }, 2500);
            setError('');
        } catch {
            setError('Ooops! Something went wrong!')
        } finally {
            setLoading(false);
        }

    }

    return (
        <>


            <div className="container  flex-center">
                <div className="login-margin">
                    <div className="login-title">
                        <h1>Registration</h1>
                    </div>
                    <div className="login-title">
                        {message && <span className="good-register">{message}</span>} 
                        {error && <span className="login-error">{error}</span>}
                    </div>
                    <RegistrationForm onSubmit={handleFormSubmit} loading={loading} />
                </div>
            </div>
        </>
    );
}


export default RegistrationPage;