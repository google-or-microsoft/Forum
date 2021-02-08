import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import parse from 'html-react-parser';
import {loadSinglePostAction} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import CommentList from "../Comments/Components/CommentList";
import {loadCommentsAction} from "../Comments/actions";
import AddComment from "../Comments/Components/AddComment";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {deletePostAction} from "../PostList/actions";
import Link from "@material-ui/core/Link";
import Cookies from 'js-cookie';

const PostView = (props) => {
    const {post, loadingPost, loadingComments, redirect, error, comments} = useSelector(state => ({
        post: state.singlePost.post,
        loadingPost: state.singlePost.loadingPost,
        loadingComments: state.singlePost.loadingComments,
        redirect: state.singlePost.redirect,
        error: state.singlePost.error,
        comments: state.singlePost.comments,
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

        return (
            <div>
                <div style={{marginLeft: "15em"}}>
                    {title}
                    {text}
                </div>
                {post.userId === Cookies.get('uid') ?
                    <div>
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            tag={Link}
                            href={"/posts/" + post.id + "/edit"}
                            className="mx-1">
                            Edit
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            onClick={() => dispatch(deletePostAction(post.id))}
                            className="mx-1">
                            Delete
                        </Button>
                    </div> : <br/>}
            </div>
        );
    }

    const renderCommentList = () => {
        return loadingComments ?
            <p>Loading Comments...</p> :
            <CommentList comments={comments}/>;
    }

    const renderAddComment = () => {
        return (
            <AddComment postId={postId}/>
        )
    }

    return (
        <Container>
            {renderPostView()} <br/>
            {renderCommentList()} <br/>
            {renderAddComment()} <br/>
        </Container>
    )
}

export default PostView;