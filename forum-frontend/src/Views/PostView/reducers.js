import {
    LOADING_SINGLE_POST_FAILURE,
    LOADING_SINGLE_POST_SUCCESS,
    START_LOADING_SINGLE_POST,
    STOP_LOADING_SINGLE_POST
} from "./constants";

const initialState = {
    post: {},
    loading: true,
    redirect: false,
    error: null
};

export const singlePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING_SINGLE_POST:
            return {
                ...state,
                loading: true,
                redirect: false,
                error: null
            };

        case STOP_LOADING_SINGLE_POST:
            return {
                ...state,
                loading: false,
                redirect: false,
                error: null
            };

        case LOADING_SINGLE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false,
                redirect: false,
                error: null
            };

        case LOADING_SINGLE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                redirect: true,
                error: 'Unable to fetch a post at the moment.'
            }

        default:
            return state;
    }
}
