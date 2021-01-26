import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch, useSelector} from "react-redux";
import {loadOriginalPostAction, modifyPostAction, updatePostContent, updatePostTitle} from "./actions";
import TextField from "@material-ui/core/TextField";

const PostAddEdit = (props) => {

    const {post, error} = useSelector(state => ({
        post: state.modifyPost.post,
        error: state.modifyPost.error,
    }));

    const dispatch = useDispatch();
    const postId = props.match.params.id;

    useEffect(() => {
        if (postId !== 'new') {
            dispatch(loadOriginalPostAction(postId));
        }
    }, [postId]);
    const renderNewPost = () => {

        return (
            <div>
                <Container>
                    <h2>{post.id ? 'Edit Post' : 'Add Post'}</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(modifyPostAction(post.id, post));
                    }}>
                        <TextField label="Title"
                                   variant="outlined"
                                   fullWidth="true"
                                   value={post.title || ''}
                                   onChange={(event) => dispatch(updatePostTitle(event.target.value))}
                        />
                        <br/>
                        <br/>
                        <CKEditor
                            editor={ClassicEditor}
                            data={post.text}
                            onChange={(event, editor) =>
                                dispatch(updatePostContent(editor.getData()))
                            }
                        />
                        <br/>
                        <div>
                            <Button
                                variant="contained"
                                type="submit">Save</Button>
                            {' '}
                            <Button
                                variant="contained"
                                component={Link} to={'/posts'}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </div>)
    };
    return renderNewPost();
}

export default PostAddEdit;
