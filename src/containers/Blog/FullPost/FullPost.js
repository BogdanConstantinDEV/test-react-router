import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './FullPost.css';

const FullPost = props => {

    const [postData, setPostData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (props.match.params.id) {
            axios.get(`/posts/${props.match.params.id}`)
                .then(res => {
                    setPostData(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err.message)
                    setLoading(false)
                })
        }
    }, [props.match.params.id])


    const deletePost = (id) => {
        axios.delete(`/posts/${id}`)
            .then(res => console.log(res))
    }

    let post = <p>Please select a Post!</p>;
    if (loading) post = 'Loading...'
    else if (postData) {
        post = (
            <div className="FullPost">
                <h1>{postData.title}</h1>
                <p>{postData.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => deletePost(props.id)}>Delete</button>
                </div>
            </div>

        )
    }
    return post;

}

export default FullPost;