import {login, logout} from "./api";
import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS} from "./constants";
import history from "../../history";
import Cookies from "js-cookie";

export const loginAction = (username, password) => {
    return (dispatch) => {
        login(username, password)
            .then(() => {
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
            .then(() => {
                dispatch({type: LOGOUT_SUCCESS, payload: userId});
                history.push('/');
            })
            .catch(() => dispatch({type: LOGOUT_FAILURE}))
    }
}

