import {deletePost, getPagedPosts} from "./api";
import {CHANGING_PAGE, LOADING_POSTS_FAILURE, LOADING_POSTS_SUCCESS, STOP_LOADING_POSTS} from "./constants";
import history from "../../history";

export const loadPostsAction = () => {

    return (dispatch, getState) => {
        getPagedPosts(getState().posts.pagedPosts.number,3)
            .then(data => {
                dispatch({type: LOADING_POSTS_SUCCESS, payload: data});
            })
            .catch(() => dispatch({type: LOADING_POSTS_FAILURE}))
            .finally(() => {
                dispatch({type: STOP_LOADING_POSTS});
            });
    };
}

export const deletePostAction = (id) => {
    return (dispatch) => {
        deletePost(id)
            .then(() => {
                dispatch(loadPostsAction());
                history.push('/posts')
            })
            .catch();
    }
}

export const changePageAction = (pageIndex) => {
    return (dispatch) => {
        dispatch({type:CHANGING_PAGE, payload: pageIndex});
        dispatch(loadPostsAction());
    }
}