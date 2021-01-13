import React, { Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';

import Posts from '../../containers/Blog/Posts/Posts';
const NewPost = React.lazy(() => import('./NewPost/NewPost'))


const Blog = () => {

    // const [posts, setPosts] = useState([])
    // const [postId, setPostId] = useState(null)
    // const [error, setError] = useState(false)

    return (
        <div>
            <nav>
                <ul>

                    <NavLink
                        to='/posts'
                        activeClassName='selected'
                        activeStyle={{ textDecoration: 'underline' }}>
                        <li>Posts</li></NavLink>
                    <NavLink
                        to='/new-post'
                        activeClassName='selected'>
                        <li>New Post</li></NavLink>
                </ul>
            </nav>


            <Switch>
                <Route path='/posts' component={Posts} />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route path='/new-post' exact component={NewPost} />
                </Suspense>
                <Redirect from='/' to='/posts' />
            </Switch>
        </div>
    );
}

export default Blog;