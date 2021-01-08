import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';
import {getUserPosts} from "../../services/userService";

const UserProfile = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        getUserPosts(props.match.params.username)
            .then(posts => setPosts(posts))
            .catch(() => setRedirect(true))
            .finally(() => setLoading(false));
    });

    const renderUserProfile = () => {
        if (loading) {
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
            {/* <AppNavbar/> */}
            <div style={{marginLeft: "15em"}}>
                <h2>{username}</h2>
                <br/>
                <br/>
                <h3>All posts</h3>
                {postsList}
            </div>
        </div>
    }
    return renderUserProfile();
}

export default UserProfile;