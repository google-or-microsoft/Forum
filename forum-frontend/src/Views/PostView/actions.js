import {getPost} from "./api";
import {
    LOADING_SINGLE_POST_FAILURE,
    LOADING_SINGLE_POST_SUCCESS,
    STOP_LOADING_SINGLE_POST
} from "./constants";

export const loadSinglePostAction = (id) => {

    return (dispatch) => {
        getPost(id)
            .then(data => {
                dispatch({type: LOADING_SINGLE_POST_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOADING_SINGLE_POST_FAILURE}))
            .finally(() => dispatch({type: STOP_LOADING_SINGLE_POST}));
    };
}
