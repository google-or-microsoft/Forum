import {login, logout} from "../Auth/api";
import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS, SET_PASSWORD, SET_USERNAME} from "./constants";
import history from "../../history";
import Cookies from "js-cookie";

export const loginAction = (username, password) => {
    return (dispatch) => {
        login(username, password)
            .then(data => {
                dispatch({type: LOGIN_SUCCESS, payload: Cookies.get("username")})
            })
            .catch(() => dispatch({type: LOGIN_FAILURE}))
            .finally(() => {
                history.push('/');
            });
    }
}

export const logoutAction = () => {
    return (dispatch) => {
        const userId = Cookies.get('uid');
        logout(userId)
            .then(data => {
                dispatch({type: LOGOUT_SUCCESS, payload: Cookies.get("uid")});
                history.push('/');
            })
            .catch(() => dispatch({type: LOGOUT_FAILURE}))
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