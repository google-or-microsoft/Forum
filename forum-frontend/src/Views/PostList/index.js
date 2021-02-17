import React, {useEffect, useState} from 'react';
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
import {changePageAction, loadPostsAction} from "./actions";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Pagination} from "@material-ui/lab";


const PostList = () => {

    const {pagedPosts, loading, error, page} = useSelector(state => ({
        pagedPosts: state.posts.pagedPosts,
        loading: state.posts.loading,
        error: state.posts.error,
        page: state.posts.page
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(pagedPosts.number);
        dispatch(loadPostsAction(pagedPosts.number,3));
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

    const handleChange = (e,value) =>{
        e.preventDefault();
        dispatch(changePageAction(value - 1));
    }

    const renderPostList = () => {
        if (!pagedPosts.content) return null;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Username</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pagedPosts.content.map((post) => (
                            <StyledTableRow key={post.title}>
                                <TableCell component="th" scope="row">
                                    <Link to={"/posts/" + post.id} className="w-1/3">{post.title}</Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={"/users/" + post.user.name} className="w-1/3">{post.user.name}</Link>
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
    }

    return (
        <div className="mt-2">
            {loading
                ? <p>Loading Content...</p>
                : <Container>
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
            <div>
                <Pagination count={pagedPosts.totalPages} onChange={handleChange}/>
            </div>
        </div>

    );
}

export default PostList;
