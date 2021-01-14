import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import parse from 'html-react-parser';
import {loadSinglePostAction} from "./actions";
import {useDispatch, useSelector} from "react-redux";

const PostView = (props) => {
    const {post, loading, redirect, error} = useSelector(state => ({
        post: state.singlePost.post,
        loading: state.singlePost.loading,
        redirect: state.singlePost.redirect,
        error: state.singlePost.error
    }));

    const dispatch = useDispatch();

    const postId = props.match.params.id;
    useEffect(() => {
        dispatch(loadSinglePostAction(postId));
    }, [postId]);


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
            {/* <AppNavbar/> */}
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