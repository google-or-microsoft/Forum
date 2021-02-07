import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getUserPosts} from "./api";
import {useDispatch, useSelector} from "react-redux";
import {loadUserAction} from "./actions";
import Cookies from "js-cookie";

const UserProfile = (props) => {
    const [posts, setPosts] = useState([]);

    const {user, loading, error} = useSelector(state => ({
        user: state.user.user,
        loading: state.user.loading,
        error: state.user.error
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserAction(props.match.params.username))
        getUserPosts(user.id) //Cookies.get('username')
            .then(posts => setPosts(posts))
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
            {/* <AppNavbar/> */}
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