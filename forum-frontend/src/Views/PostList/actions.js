import {getPosts} from "./api";
import {
        FETCHING_POSTS_FAILURE,
        FETCHING_POSTS_SUCCESS,
        STOP_FETCHING_POSTS
        } from "./constants";

export const loadPostsAction = () => {

    return (dispatch) => {
        getPosts()
            .then(data => {
                dispatch({type: FETCHING_POSTS_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: FETCHING_POSTS_FAILURE}))
            .finally(() => dispatch({type: STOP_FETCHING_POSTS}));
    };
}