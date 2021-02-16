import {getUser} from "./api";
import {LOAD_USER_FAILURE, LOAD_USER_SUCCESS, START_LOAD_USER, STOP_LOAD_USER} from "./constants";

export const loadUserAction = (username) => {

    return (dispatch) => {
        dispatch({type: START_LOAD_USER});
        getUser(username)
            .then(data => {
                dispatch({type: LOAD_USER_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOAD_USER_FAILURE}))
            .finally(() => dispatch({type: STOP_LOAD_USER}));
    };
}