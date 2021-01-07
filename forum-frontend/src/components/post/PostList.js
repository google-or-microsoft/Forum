import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from '@material-ui/core';
import AppNavbar from '../common/AppNavbar';
import {Link} from 'react-router-dom';
import {deletePost, getPosts} from "../../api/postService";

class PostList extends Component {
    state = {posts: [], isLoading: true};


    componentDidMount() {
        this.setState({isLoading: true});

        getPosts()
            .then(posts => {
                this.setState({posts: posts, isLoading: false});
            })
    }

    remove(id) {
        deletePost(id)
            .then(() => {
                let updatedPosts = [...this.state.posts].filter(i => i.id !== id);
                this.setState({posts: updatedPosts});
            });
    }

    render() {
        const {posts, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading Content...</p>;
        }
        //ToDo: convert each title of the posts
        //            as a ref link, need to add
        //            "title" attributes first
        const postList = posts.map(post => {
            return <tr key={post.id}>
                <td>
                    <Link to={"/posts/" + post.id}>{post.title}</Link><br/>
                </td>
                <td>
                    <Link to={"/users/" + post.username}>{post.username}</Link><br/>
                    {post.date}
                </td>
                <td>

                    <ButtonGroup>
                        <Button size="small" variant="outlined" color="primary" tag={Link}
                                href={"/posts/" + post.id + "/edit"}>Edit
                        </Button>
                        &nbsp;
                        <Button size="small" variant="outlined" color="secondary" onClick={() => this.remove(post.id)}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button variant="outlined" color="primary" component={Link} to="/posts/new/edit">Add
                            Post</Button>
                    </div>
                    <h3>My Post List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Title</th>
                            <th width="50%">Author</th>
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
