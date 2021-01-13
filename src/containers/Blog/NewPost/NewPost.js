import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './NewPost.css';

class NewPost extends Component {
    state = {
        data: {
            title: '',
            content: '',
            author: 'Max'
        },
        redirect: false
    }

    componentDidMount() {
        // if !auth => this.props.history.replace('/posts') 
        console.log(this.props)
    }

    addPost = () => {
        const data = { ...this.state.data }
        axios.post('/posts', data)
            // .then(() => this.setState({ redirect: true }))
            // .then(() => this.props.history.push('/posts')) // let you go back to previous page
            .then(() => this.props.history.replace('/posts')) // does not let you go back to previous page
    }


    render() {
        let redirectComp = null
        if (this.state.redirect) redirectComp = <Redirect to='/posts' />
        // console.log(this.props)
        return (
            <div className="NewPost">
                {redirectComp}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.data.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.data.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.data.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Jack">Jack</option>
                    <option value="Bivolu">Bivolu</option>
                </select>
                <button onClick={this.addPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;