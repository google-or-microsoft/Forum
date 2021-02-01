import {LOAD_USER_FAILURE, LOAD_USER_SUCCESS, START_LOAD_USER, STOP_LOAD_USER} from "./constants";

const initialState = {
    user: {},
    loading: true,
    error: null
};

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case START_LOAD_USER:
            return {
                ...state,
                loading: true,
                error: null
            };

        case STOP_LOAD_USER:
            return {
                ...state,
                loading: false,
                error: null
            };

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };

        case LOAD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Unable to fetch user at the moment.'
            }

        default:
            return state;
    }
}
