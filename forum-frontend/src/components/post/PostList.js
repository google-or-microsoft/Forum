import React, { Component } from 'react';
import {  ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../common/AppNavbar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [], isLoading: true };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/api/v1/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, isLoading: false }));
    }

     remove(id) {
         fetch(`/api/v1/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPosts = [...this.state.posts].filter(i => i.id !== id);
            this.setState({ posts: updatedPosts });
        });
    }

    render() {
        const { posts, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading Content...</p>;
        }
        //To be done: convert each title of the posts
        //            as a ref link, need to add
        //            "title" attributes first
        const postList = posts.map(post => {
            return <tr key={post.id}>
                <td>
                    <Link to={"/posts/"+post.id}>{post.title}</Link><br/>
                </td>
                <td>
                    {post.user.user_name}
                    {post.date}
                </td>
                <td>

                <ButtonGroup>
                        <Button size="sm" variant="outlined" color="primary"  tag={Link} href={"/posts/" + post.id + "/edit"}>Edit
                        </Button>
                          &nbsp;
                        <Button size="sm" variant="outlined" color="secondary" onClick={() => this.remove(post.id)}>
                            Delete
                        </Button>
                  </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        <Button variant="outlined" color="primary" component={Link} to="/posts/new/edit">Add Post</Button>
                    </div>
                    <h3>My Post List</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Title</th>
                                <th width="50%">Text</th>
                                <th width="10%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

}


export default PostList;
