import React, { useState } from "react";

function LoginForm({ onSubmit, loading=false }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({ username, password })
    }

    return (

        <>
            <div className="container h-full flex-center">
                <div className="posts">
                    <form onSubmit={handleFormSubmit} className="login-form">
                        <div className="group">
                            <label htmlFor="username">Username  </label>
                            <input type='text'
                                id="username"
                                placeholder="Enter username..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="Password">Password  </label>
                            <input type='Password'
                                id="Password"
                                placeholder="Enter password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button disabled={!username || !password || loading} className="login-button" >
                            {loading ? 'Loading...' : 'Log In'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default LoginForm;