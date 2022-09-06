import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import api from "../axiosInstance";


function RegistrationPage(username, password, fullName, file) {


    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleFormSubmit({ username, password, fullName, file }) {
        try {
            console.log(username, password, fullName)
            setLoading(true);
            const response = await api.post(
                '/registration',
                username,
                password,
                fullName,
            );
            console.log(response);
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
                        {error && <span className="login-error">{error}</span>}
                    </div>
                    <RegistrationForm onSubmit={handleFormSubmit} loading={loading} />
                </div>
            </div>
        </>
    );
}


export default RegistrationPage;