import {getUser} from "./api";
import {LOAD_USER_FAILURE, LOAD_USER_SUCCESS, START_LOAD_USER, STOP_LOAD_USER} from "./constants";
import Cookies from "js-cookie";

export const loadUserAction = () => {

    return (dispatch) => {
        const uid = Cookies.get('uid');
        dispatch({type: START_LOAD_USER});
        getUser(uid)
            .then(data => {
                dispatch({type: LOAD_USER_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOAD_USER_FAILURE}))
            .finally(() => dispatch({type: STOP_LOAD_USER}));
    };
}