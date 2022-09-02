import React from "react";
import { Link } from 'react-router-dom';

function PostItem({ post }) {
    return (
        <>
            <div className='posts' key={post.id}>

                <Link to={`/posts/${post.id}`} >
                    <h3>{post.title}</h3>
                </Link>
                
                <br />
                <p>{post.body}</p>
                <br />

                {post.tags.map(
                    tag => (<span key={tag.id} className='tag'>{tag}</span>
                    ))}
                <span className='reactions'>
                    🧡 {" "} {post.reactions}
                </span>

            </div>
        </>
    );
}

export default PostItem