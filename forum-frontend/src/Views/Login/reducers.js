import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS} from "./constants";

const initialState = {
    loginStatus: false,
    username: null,
    password: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginStatus: true,
                username: action.payload,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginStatus: false,
                username: null,
                password: null,
                error: "Login procedure failed"
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loginStatus: false,
                username: null,
                password: null,
                error: null
            };
        case LOGOUT_FAILURE:
            return {
                ...state
            };
        default:
            return state
    }
}