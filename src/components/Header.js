import React from "react";
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    function handleLogOut() {
        localStorage.removeItem('user')
        navigate('/login')
    }
    function handleToNewPost() {
        navigate('/posts/new')
        
    }


    return (
        <header className="header">
            <div className="user">
                <img className="img" 
                    src={user.image} 
                    alt="user profile image" />
                <span>{user.username}</span>
            </div>
            <button onClick={handleToNewPost} className="new-post-button">
                New Post    
            </button>
            <button onClick={handleLogOut} className="log-out-button">
                Log Out
            </button>
        </header>
    );
}

export default Header;