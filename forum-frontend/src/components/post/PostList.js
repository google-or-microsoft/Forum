import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Container, Table} from '@material-ui/core';
import AppNavbar from '../common/AppNavbar';
import {Link} from 'react-router-dom';
import {deletePost, getPosts} from "../../services/postService";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts()
            .then(posts => setPosts(posts))
            .finally(() => setLoading(false));
    });



    const renderPostList = posts.map(post => {
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
                    <Button size="small" variant="outlined" color="secondary" onClick={() => remove(post.id)}>
                        Delete
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    const remove = (id) => {
        deletePost(id)
            .then(() => {
                let filteredPosts = [...posts].filter(i => i.id !== id);
                setPosts(filteredPosts);
            });
    }

    //ToDo: convert each title of the posts
    //            as a ref link, need to add
    //            "title" attributes first
    return (
        <div>
            <AppNavbar/>
            {loading ? <p>Loading Content...</p> : <Container fluid>
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
                    {renderPostList}
                    </tbody>
                </Table>
            </Container>}
        </div>
    );
}

export default PostList;
