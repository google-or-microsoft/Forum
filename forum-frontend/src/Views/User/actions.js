import {login} from "../Auth/api";
import {SET_PASSWORD, SET_USER, SET_USER_FAILURE, SET_USERNAME} from "./constants";
import history from "../../history";

export const setUser = (username, password) => {
    return (dispatch) => {
        login(username, password)
            .then(data => {
                dispatch({type: SET_USER, payload: data.username})
            })
            .catch(() => dispatch({type: SET_USER_FAILURE}))
            .finally(() => {
                history.push('/');
            });
    }
}

export const updateUsername = (value) => {
    return {
        type: SET_USERNAME,
        payload: value
    };
};

export const updatePassword = (value) => {
    return {
        type: SET_PASSWORD,
        payload: value
    };
};