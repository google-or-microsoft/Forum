import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';
import axios from 'axios';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}, posts: [], isLoading: true, redirect: false};
    }

    componentDidMount() {
        let curr = this;
        curr.setState({isLoading: true});
        axios
            .get(`/api/v1/posts/user/${curr.props.match.params.userName}`)
            .then(res => {
                curr.setState({posts: res.data, isLoading: false});
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
            return <Redirect to="/PageNotFound"/>
        }
        const userName = posts[0].username;
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
                <h2>{userName}</h2>
                <br/>
                <br/>
                <h3>All posts</h3>
                {postsList}
            </div>
        </div>
    }
}

export default UserProfile;