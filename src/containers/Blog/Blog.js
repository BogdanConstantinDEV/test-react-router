import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(null)
    const [error, setError] = useState(false)


    // get posts  ============   -->>
    useEffect(() => {
        axios.get('/posts')
            .then(res => setPosts(res.data.slice(0, 4).map(el => { return { ...el, author: 'Bivolu' } })))
            .catch(() => setError(true))
    }, [])

    let newPosts
    if (posts) {
        newPosts = posts.map(el => <Post
            key={el.id}
            title={el.title.substring(0, 10)}
            author={el.author}
            click={() => setPostIdHandler(el.id)}
        />)
    }
    if (error) {
        newPosts = <h2>Some shit happened</h2>
    }

    // ===================== <<--




    // get full post  ============   -->>
    const setPostIdHandler = (id) => setPostId(id)

    // ===================== <<--


    return (
        <div>
            <section className="Posts">
                {newPosts}
            </section>
            <section>
                <FullPost id={postId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;