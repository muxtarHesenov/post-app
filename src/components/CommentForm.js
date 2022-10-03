import React, { useState } from "react";

function CommentForm ( {onSubmit, loading = false}) {
    const [body, setBody] = useState('');


    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({ content: body });
        setBody('');
    }    

    return (
        <>
            <form onSubmit={handleFormSubmit} className="login-form">
                <div className="group ">
                    <textarea
                        id="body"
                        className="body-input"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}>

                    </textarea>
                </div>


                <button className="login-button creat-input-button" disabled={ !body || loading}>
                    {loading ? 'Loading...' : 'Comment'}
                </button>

            </form>
        </>
    );
}

export default CommentForm;