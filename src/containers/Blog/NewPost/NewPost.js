import React, { Component } from 'react';
import axios from 'axios'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    addPost = () => {
        const data = { ...this.state }
        axios.post('/posts', data)
            .then(res => console.log(res))
    }


    render() {
        // console.log(this.props)
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Jack">Jack</option>
                    <option value="Bivolu">Bivolu</option>
                </select>
                <button onClick={this.addPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;