import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom'
import { Route, NavLink, Switch } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    render() {
        return (

            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/posts/'
                                    exact
                                    activeStyle={{ textDecoration: 'underline' }}>
                                    Posts
                                    </NavLink></li>
                            <li>
                                <NavLink
                                    to={{ pathname: '/new-post' }}>
                                    New Post
                                    </NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div>

                    <Switch>
                        <Route path='/posts' component={Posts} />
                        <Route path='/new-post' component={NewPost} />
                    </Switch>

                </div>

            </div>
        );
    }
}

export default Blog;