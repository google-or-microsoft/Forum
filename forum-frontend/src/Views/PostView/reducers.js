import {
    LOADING_SINGLE_POST_FAILURE,
    LOADING_SINGLE_POST_SUCCESS,
    START_LOADING_SINGLE_POST,
    STOP_LOADING_SINGLE_POST,
    LOADING_COMMENTS_FAILURE,
    LOADING_COMMENTS_SUCCESS,
    START_LOADING_COMMENTS,
    STOP_LOADING_COMMENTS
} from "./constants";

const initialState = {
    post: {},
    loadingPost: true,
    loadingComments: true,
    redirect: false,
    error: null,
    comments:[]
};

export const singlePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING_SINGLE_POST:
            return {
                ...state,
                loadingPost: true,
                redirect: false,
                error: null
            };

        case STOP_LOADING_SINGLE_POST:
            return {
                ...state,
                loadingPost: false,
                redirect: false,
                error: null
            };

        case LOADING_SINGLE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loadingPost: false,
                redirect: false,
                error: null
            };

        case LOADING_SINGLE_POST_FAILURE:
            return {
                ...state,
                loadingPost: false,
                redirect: true,
                error: 'Unable to fetch a post at the moment.'
            }
        case START_LOADING_COMMENTS:
            return {
                ...state,
                loadingComments: true,
                error: null
            };

        case STOP_LOADING_COMMENTS:
            return {
                ...state,
                loadingComments: false,
                error: null
            };

        case LOADING_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loadingComments: false,
                error: null
            };

        case LOADING_COMMENTS_FAILURE:
            return {
                ...state,
                loadingComments: false,
                error: 'Unable to fetch comments at the moment.'
            }

        default:
            return state;
    }
}
