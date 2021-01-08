import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import AppNavbar from '../common/AppNavbar';
import parse from 'html-react-parser';
import {getPost} from "../../services/postService";

const PostView = (props) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        getPost(props.match.params.id)
            .then(post => setPost(post))
            .catch(() => setRedirect(true))
            .finally(() => setLoading(false));
    });


    const renderPostView = () => {
        if (loading) {
            return <p>Loading detailed page....</p>;
        }
        if (redirect) {
            return <Redirect to="/PageNotFound"/>
        }
        const title = <h2>{post.title}</h2>;
        const text = <p>{parse(post.text)}</p>;

        // const commentsList = post.comments.map(comment =>{
        //     return <tr key={comment.id}>
        //                 <td>
        //                     {comment.text}<br/>
        //                     {comment.user.user_name}
        //                 </td>
        //            </tr>
        //     })

        return <div>
            <AppNavbar/>
            <div style={{marginLeft: "15em"}}>
                {title}
                {text}
                <br/>
                <br/>
                <p>Comments of this post</p>
                {/*{commentsList}*/}
            </div>
        </div>
    }

    return renderPostView();
}

export default PostView;