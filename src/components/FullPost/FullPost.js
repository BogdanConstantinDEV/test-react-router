import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './FullPost.css';

const FullPost = props => {

    const [postData, setPostData] = useState(null)

    useEffect(() => {
        if (props.id) {
            axios.get(`/posts/${props.id}`)
                .then(res => setPostData(res.data))
        }
    }, [props.id])


    const deletePost = (id) => {
        axios.delete(`/posts/${id}`)
            .then(res => console.log(res))
    }

    let post = <p>Please select a Post!</p>;

    if (postData) {
        post = (
            <div className="FullPost">
                <h1>{postData.title}</h1>
                <p>{postData.content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => deletePost(props.id)}>Delete</button>
                </div>
            </div>

        )
    }
    return post;

}

export default FullPost;