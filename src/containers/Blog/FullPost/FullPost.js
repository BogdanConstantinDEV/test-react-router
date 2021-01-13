import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadedData()
    }

    componentDidUpdate() {
        this.loadedData()
        // console.log('didUpdate')
    }

    loadedData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost ||
                (this.state.loadedPost && this.props.match.params.id !== JSON.stringify(this.state.loadedPost.id))) {
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then(res => {
                        this.setState({ loadedPost: res.data })
                    })
            }
        }
    }



    deletePost = () => {
        axios.delete(`/posts/${this.props.postId}`)
            .then(res => console.log(res))
    }

    render() {



        // console.log(this.props.match.params.id)
        let post = <p className='postIntro'>Please select a Post!</p>
        // if (this.props.match.params.id) {
        //     post = <p className='postIntro'>Loading...</p>
        // }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;