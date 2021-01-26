import React, {useEffect} from 'react';
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deletePostAction, loadPostsAction} from "./actions";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";


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

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();

    const renderPostList = () => {
        if (!posts) return null;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <StyledTableRow key={post.title}>
                                <TableCell component="th" scope="row">
                                    <Link to={"/posts/" + post.id} className="w-1/3">{post.title}</Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/users/" + post.username} className="w-1/3">{post.username}</Link>
                                </TableCell>
                                <TableCell className="flex flex-row w-1/3" align="right">
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
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
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
                        {renderPostList()}
                    </div>
                </Container>}
        </div>
    );
}

export default PostList;
