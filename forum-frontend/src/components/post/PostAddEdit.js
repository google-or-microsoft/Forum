import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppNavbar from '../common/AppNavbar';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {addPost, getPost, updatePost} from "../../services/postService";

const PostAddEdit = (props) => {

    const defaultUser = {
        "id": {"$oid": "5feab6d231521c7b4f43184a"},
        "password": "admin01",
        "privilege": "1",
        "name": "admin1",
        "email": "rainyforest@gmail.com"
    }

    const emptyPost = {
        id: '',
        date: '',
        text: '',
        username: defaultUser.name
    }

    const [post, setPost] = useState(emptyPost);

    useEffect(() => {
        let id = props.match.params.id;
        if (id !== 'new') {
            getPost(id)
                .then(post => setPost(post))
        }
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let newPost = {...post};
        newPost[name] = value;
        setPost(newPost);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (post.id) {
            await updatePost(post.id, post);
        } else {
            await addPost(post);
        }
        props.history.push('/posts');
    }

    return (<div>
        <AppNavbar/>
        <Container>
            <h2>{post.id ? 'Edit Post' : 'Add Post'}</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="text">Title</Label>
                    <Input type="text" name="title" id="title" value={post.title || ''}
                           onChange={handleChange} autoComplete="text"/><br/>
                    <CKEditor
                        editor={ClassicEditor}
                        data={post.text}
                        onChange={(event, editor) => {
                            post.text = editor.getData();
                        }}
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
