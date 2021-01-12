import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import axios from '../../../axios'
import './Posts.css'

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }


    // get posts when page renders
    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4)
                    .map(el => { return { ...el, author: 'Bivolu' } })
                this.setState({ posts })
            })
            .catch(() => {
                this.setState({ error: true })
            })
    }

    // select a post
    selectPost = id => {
        // this.props.history.push({ pathname: `/${id}` })
        this.props.history.push('/posts/' + id)
    }

    render() {
        // console.log(this.props)

        let posts
        if (this.state.error) {
            posts = <p>Something went wrong!!!</p>
        } else {
            posts = this.state.posts.map(post => (
                // <Link to={`/${post.id}`} key={post.id}>
                <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    click={() => this.selectPost(post.id)} />
                // {/* </Link> */}
            ))
        }

        return <div>
            <div className='Posts'>{posts}</div>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
        </div>

    }
}

export default Posts
