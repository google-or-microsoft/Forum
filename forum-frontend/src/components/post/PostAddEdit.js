import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Container, Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppNavbar from '../common/AppNavbar';
import axios from "axios";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class PostAddEdit extends Component {

    emptyPost = {
        id: '',
        date: '',
        text: '',
        user: {
            "id": 1,
            "password": "admin01",
            "privilege": 0,
            "user_name": "admin1",
            "email_address": "admin1@gmail.com"
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            post: this.emptyPost
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            axios
                .get(`/api/v1/posts/${this.props.match.params.id}`)
                .then(res => {
                    this.setState({post: res.data});
                })
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let post = {...this.state.post};
        post[name] = value;
        this.setState({post});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {post} = this.state;

        axios({
            method: (post.id) ? 'PUT' : 'POST',
            url: `/api/v1/posts/${post.id}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(post)
        }).then(this.props.history.push('/posts'));
    }

    render() {
        const {post} = this.state;
        const title = <h2>{post.id ? 'Edit Post' : 'Add Post'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="text">Title</Label>
                        <Input type="text" name="title" id="title" value={post.title || ''}
                               onChange={this.handleChange} autoComplete="text"/><br/>
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
        </div>
    }
}

export default withRouter(PostAddEdit);
