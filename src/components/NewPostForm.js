import React, { useState } from "react";

function NewPostForm( {onSubmit, loading = false}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);


    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({ title, content: body, tags });
    }

    function handleAddTag(e) {
        e.preventDefault();
        tags.push(tag);
        setTag('')
    }

    function removeTag(index) {
        const tagsCopy = tags.slice();
        tagsCopy.splice(index, 1);
        setTags(tagsCopy);
      }
    

    return (
        <>
            <form onSubmit={handleFormSubmit} className="login-form">
                <div className="group">
                    <label htmlFor="username">Title  </label>
                    <input className="creat-input" type='text'
                        id="title"
                        placeholder="Enter title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                </div>
                <div className="group ">
                    <label htmlFor="text">Body  </label>
                    <textarea
                        id="body"
                        className="body-input"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}>

                    </textarea>
                </div>
                <div className="group">
                    <label htmlFor="text">Tags  </label>
                    <input className="creat-input" type='text'
                        id="tags"
                        placeholder="Enter max 3 tags..."
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                    <button className="tag-button" onClick={handleAddTag}>Add tag</button>
                </div>
                <div className="group">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="tag pointer"
                            tabIndex={0}
                            onClick={() => removeTag(index)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>


                <button className="login-button creat-input-button" disabled={!title || !body || loading}>
                    {loading ? 'Loading...' : 'Create Post'}
                </button>

            </form>
        </>
    );
}

export default NewPostForm;