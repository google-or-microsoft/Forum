import {
    CLOSE_REGISTER_MODAL,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    OPEN_REGISTER_MODAL
} from "./constants";

const initialState = {
    showRegisterModal: false,
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
                showRegisterModal: false,
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
        case OPEN_REGISTER_MODAL:
            return {
                ...state,
                showRegisterModal: true,
            };
        case CLOSE_REGISTER_MODAL:
            return {
                ...state,
                showRegisterModal: false,
            };
        default:
            return state
    }
}