import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';
import {getUserPosts} from "../../api/userService";

class UserProfile extends Component {

    state = {
        username: "",
        posts: [],
        isLoading: true,
        redirect: false
    };

    componentDidMount() {
        let curr = this;
        curr.setState({isLoading: true});

        getUserPosts(curr.props.match.params.username)
            .then(posts => {
                curr.setState({posts: posts, isLoading: false});
            })
            .catch(err => {
                curr.setState({redirect: true, isLoading: false});
            });

    }

    render() {
        const {posts, isLoading, redirect} = this.state;
        if (isLoading) {
            return <p>Loading detailed page....</p>;
        }
        if (redirect) {
            return <Redirect to="/PageNotFound"/>;
        }
        const username = posts[0].username;
        const postsList = posts.map(post => {
            return <tr key={post.id}>
                <td>
                    <Link to={"/posts/" + post.id}>{post.title}</Link><br/><br/>
                </td>
            </tr>
        })


        return <div>
            <AppNavbar/>
            <div style={{marginLeft: "15em"}}>
                <h2>{username}</h2>
                <br/>
                <br/>
                <h3>All posts</h3>
                {postsList}
            </div>
        </div>
    }
}

export default UserProfile;