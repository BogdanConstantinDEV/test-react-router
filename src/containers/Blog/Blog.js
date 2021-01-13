import React, { Component, Suspense } from 'react';
// import { Route, Link } from 'react-router-dom'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
const NewPost = React.lazy(() => import('./NewPost/NewPost'))

class Blog extends Component {

    state = {
        auth: true
    }

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
                        {this.state.auth ?
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Route path='/new-post' component={NewPost} />
                            </Suspense>
                            : null}
                        <Redirect from='/' to='/posts' /> // redirects everything to /posts
                        {/* <Route render={() => <h1>Not Found</h1>} /> */} // sends you to not found page
                    </Switch>

                </div>

            </div>
        );
    }
}

export default Blog;