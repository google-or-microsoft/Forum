import {deletePost, getPosts} from "./api";
import {LOADING_POSTS_FAILURE, LOADING_POSTS_SUCCESS, STOP_LOADING_POSTS} from "./constants";
import history from "../../history";

export const loadPostsAction = () => {

    return (dispatch) => {
        getPosts()
            .then(data => {
                dispatch({type: LOADING_POSTS_SUCCESS, payload: data})
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