import {deletePost, getPagedPosts} from "./api";
import {LOADING_POSTS_FAILURE, LOADING_POSTS_SUCCESS, STOP_LOADING_POSTS} from "./constants";
import history from "../../history";

export const loadPostsAction = () => {

    return (dispatch) => {
        getPagedPosts()
            .then(data => {
                dispatch({type: LOADING_POSTS_SUCCESS, payload: data.content})
            })
            .catch(() => dispatch({type: LOADING_POSTS_FAILURE}))
            .finally(() => dispatch({type: STOP_LOADING_POSTS}));
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