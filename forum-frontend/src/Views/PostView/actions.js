import {getPost} from "./api";
import {
    LOADING_SINGLE_POST_FAILURE,
    LOADING_SINGLE_POST_SUCCESS,
    START_LOADING_SINGLE_POST,
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

