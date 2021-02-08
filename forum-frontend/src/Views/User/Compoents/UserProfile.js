import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getUserByName, getUserPosts} from "../api";


const UserProfile = (props) => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUserByName(props.match.params.username)
            .then(user => {
                setUser(user);
                getUserPosts(user.id) //Cookies.get('username')
                    .then(posts => setPosts(posts))
                }
            )
    }, []);

    const postsList = posts.map(post => {
        return (
            <tr key={post.id}>
                <td>
                    <Link to={"/posts/" + post.id}>{post.title}</Link><br/><br/>
                </td>
            </tr>
        )
    })

    const renderUserProfile = () => {
        return <div>
            <div style={{marginLeft: "15em"}}>
                <h2>{user.name}</h2>
                <h6>{user.email}</h6>
                <h6>{user.role}</h6>
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