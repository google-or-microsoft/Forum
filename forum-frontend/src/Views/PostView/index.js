import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import parse from 'html-react-parser';
import {loadCommentsAction, loadSinglePostAction} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import CommentList from "../../Components/CommentList";

const PostView = (props) => {
    const {post, loadingPost,loadingComments,redirect, error, comments} = useSelector(state => ({
        post: state.singlePost.post,
        loadingPost: state.singlePost.loadingPost,
        loadingComments: state.singlePost.loadingComments,
        redirect: state.singlePost.redirect,
        error: state.singlePost.error,
        comments: state.singlePost.comments
    }));

    const dispatch = useDispatch();

    const postId = props.match.params.id;

    useEffect(() => {
        dispatch(loadSinglePostAction(postId));
        dispatch(loadCommentsAction(postId));
    }, [postId]);


    const renderPostView = () => {
        if (loadingPost) {
            return <p>Loading Post Content...</p>;
        }
        if (redirect) {
            return <Redirect to="/PageNotFound"/>
        }
        const title = <h2>{post.title}</h2>;
        const text = <p>{parse(post.text)}</p>;

        return(
            <div>
                <div style={{marginLeft: "15em"}}>
                    {title}
                    {text}
                </div>
            </div>
        );
    }

    const renderCommentList = () => {
        if (loadingComments) {
            return <p>Loading Comments...</p>;
        }
        console.log(comments);
        return(
            <div style={{marginLeft: "15em"}}>
                <p>Comments of this post</p>
                <CommentList comments={comments}/>
            </div>
        )
    }

    return [renderPostView(),renderCommentList()];
}

export default PostView;