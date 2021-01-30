import {getComments, getPost} from "./api";
import {
    LOADING_COMMENTS_FAILURE,
    LOADING_COMMENTS_SUCCESS,
    LOADING_SINGLE_POST_FAILURE,
    LOADING_SINGLE_POST_SUCCESS, START_LOADING_COMMENTS, START_LOADING_SINGLE_POST, STOP_LOADING_COMMENTS,
    STOP_LOADING_SINGLE_POST
} from "./constants";

export const loadSinglePostAction = (id) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_SINGLE_POST});
        getPost(id)
            .then(data => {
                dispatch({type: LOADING_SINGLE_POST_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOADING_SINGLE_POST_FAILURE}))
            .finally(() => dispatch({type: STOP_LOADING_SINGLE_POST}));
    };
}
export const loadCommentsAction = (id) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_COMMENTS});
        getComments(id)
            .then(data => {
                dispatch({type: LOADING_COMMENTS_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOADING_COMMENTS_FAILURE}))
            .finally(() => dispatch({type: STOP_LOADING_COMMENTS}));
    };
}


