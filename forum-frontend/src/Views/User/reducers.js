import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_SUCCESS, SET_PASSWORD, SET_USERNAME} from "./constants";

const initialState = {
    loginStatus: false,
    username: null,
    password: null,
    error: null
}

export const userReducer = (state = initialState, action) => {
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
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
                error: null
            };

        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
                error: null
            };

        default:
            return state
    }
}