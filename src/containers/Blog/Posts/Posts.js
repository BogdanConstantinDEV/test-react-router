import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

import Post from '../../../components/Post/Post'



const Posts = props => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    // get posts  ============   -->>
    useEffect(() => {
        setLoading(true)
        axios.get('/posts')
            .then(res => {
                setPosts(res.data.slice(0, 4).map(el => { return { ...el, author: 'Bivolu' } }))
                setLoading(false)
            }
            )
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [])


    // get full post  ============   -->>
    const setPostIdHandler = (id) => {
        props.history.replace(props.match.url + `/${id}`)
    }




    let newPosts = null
    if (posts) {
        newPosts = posts.map(el => <Post
            key={el.id}
            title={el.title.substring(0, 10)}
            author={el.author}
            click={() => setPostIdHandler(el.id)}
        />)
    }
    if (loading) newPosts = 'Loading...'
    if (error) {
        newPosts = <h2>Some shit happened</h2>
    }

    // ================



    return <React.Fragment>
        <div className='Posts'>{newPosts}</div>
        <Route path={props.match.url + '/:id'} exact component={FullPost} />
    </React.Fragment>

}

export default Posts
