import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch, useSelector} from "react-redux";
import {loadOriginalPostAction, modifyPostAction, updatePostContent, updatePostTitle} from "./actions";

const PostAddEdit = (props) => {

    const {post, error} = useSelector(state => ({
        post: state.modifyPost.post,
        error: state.modifyPost.error
    }));

    const dispatch = useDispatch();
    const postId = props.match.params.id;
    useEffect(() => {
        // if (postId !== 'new') {
        //     getPost(postId)
        //         .then(post => setPost(post))
        // }
        if (postId !== 'new') {
            dispatch(loadOriginalPostAction(postId));
        }
    }, [postId]);

    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     let newPost = {...post};
    //     newPost[name] = value;
    //     this.setState({newPost});
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (post.id) {
        //     await updatePost(post.id, post);
        // } else {
        //     await addPost(post);
        // }

        dispatch(modifyPostAction(post.id,post))

        props.history.push('/posts');
    }
    return (<div>
        <Container>
            <h2>{post.id ? 'Edit Post' : 'Add Post'}</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="text">Title</Label>
                    <Input type="text" name="title" id="title" value={post.title || ''}
                           onChange={(event) => dispatch(updatePostTitle(event.target.value))} autoComplete="text"/><br/>
                    <CKEditor
                        editor={ClassicEditor}
                        data={post.text}
                        onChange={(event, editor) =>
                            dispatch(updatePostContent(editor.getData()))
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">Save</Button>{' '}

                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link} to={'/posts'}>Cancel</Button>

                </FormGroup>
            </Form>
        </Container>
    </div>);

}

export default PostAddEdit;
