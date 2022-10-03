import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationForm({ onSubmit, loading = false }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [file, setFile] = useState(null);

    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({ username, password, fullName, file })
    }

    return (

        <>
            <div className="container h-full flex-center">
                <div className="posts-login">
                    <form onSubmit={handleFormSubmit} className="login-form">
                        <div className="group">
                            <label htmlFor="fullName">Full Name  </label>
                            <input type='text'
                                id="fullName"
                                placeholder="Enter full name..."
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="username">Username  </label>
                            <input type='text'
                                id="username"
                                placeholder="Enter username..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="password">Password  </label>
                            <input type='Password'
                                id="Password"
                                placeholder="Enter password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="profilePhoto">Profile photo  </label>
                            <input 
                                type='file'
                                id="profilePhoto"
                                accept='image/gif, image/png, image/jpeg'
                                onChange={(e) => setFile(e.target.files[0])} />

                        <p> &nbsp; Already have an account? <Link to='/posts'>Sing in</Link> </p>
                        </div>
                        <button disabled={!username || !password || loading} className="login-button" >
                            {loading ? 'Loading...' : 'Sing up'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default RegistrationForm;