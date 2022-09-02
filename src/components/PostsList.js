import React from "react";
import PostsItem from "./PostItem";

function PostsList({ loading, error, posts, total }) {
    return (
        <>
            <div className="">
                <small>Total post is {total}</small>
                {
                    loading && (<span className='loading'> Loading...</span>)
                }
                {
                    error && (<span className='error'>{error}</span>)
                }

                {

                    posts.map(post => (
                        <>
                            <PostsItem post={post} />
                        </>
                    ))
                }
            </div>
        </>
    );
}

export default PostsList;