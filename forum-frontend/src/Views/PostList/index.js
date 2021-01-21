import React, {useEffect} from 'react';
import {Button, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deletePostAction, loadPostsAction} from "./actions";


const PostList = () => {

    const {posts, loading, error} = useSelector(state => ({
        posts: state.posts.posts,
        loading: state.posts.loading,
        error: state.posts.error
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPostsAction());
    }, []);

    const renderPostList = () => {
        if(!posts) return null;
        return posts.map(post => {
            return (
                <div className="flex flex-row justify-between my-4" key={post.id}>
                    <Link to={"/posts/" + post.id} className="w-1/3">{post.title}</Link>
                    <Link to={"/users/" + post.username} className="w-1/3">{post.username}</Link>
                    <div className="flex flex-row w-1/3">
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            tag={Link}
                            href={"/posts/" + post.id + "/edit"}
                            className="mx-1">Edit
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                            onClick={() => dispatch(deletePostAction(post.id))}
                            className="mx-1">
                            Delete
                        </Button>
                    </div>
                </div>
            )
        })
    }

    // ToDo: convert each title of the posts as a ref link, need to add
    //       "title" attributes first
    return (
        <div className="mt-2">
            {loading
                ? <p>Loading Content...</p>
                : <Container fluid>
                    <div className="float-right">
                        <Button
                            variant="outlined"
                            color="primary"
                            component={Link}
                            to="/posts/new/edit">Add Post</Button>
                    </div>
                    <h3>My Post List</h3>
                    <div className="flex flex-col">
                        <div id="header" className="flex flex-row justify-between">
                            <div className="w-1/3 justify-self-center">Title</div>
                            <div className="w-1/3 justify-self-center">Author</div>
                            <div className="w-1/3 justify-self-center">Actions</div>
                        </div>
                        {renderPostList()}
                    </div>
                </Container>}
        </div>
    );
}

export default PostList;
