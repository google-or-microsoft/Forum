import {SET_PASSWORD, SET_USER, SET_USER_FAILURE, SET_USERNAME} from "./constants";

const initialState = {
    loginStatus: false,
    username: null,
    password: null,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                loginStatus: true,
                username: action.payload,
                error: null
            };
        case SET_USER_FAILURE:
            return {
                ...state,
                loginStatus: false,
                username: null,
                password: null,
                error: "Login procedure failed"
            };
        case "LOG_OUT":
            localStorage.clear()
            return {
                ...state,
                loginStatus: false,
                username: null,
                password: null,
                error: null
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