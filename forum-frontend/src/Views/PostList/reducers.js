import {
    FETCHING_POSTS_FAILURE,
    FETCHING_POSTS_SUCCESS,
    START_FETCHING_POSTS,
    STOP_FETCHING_POSTS
} from "./constants";

const initialState = {
    posts: [],
    loading: true,
    error: null
};

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case START_FETCHING_POSTS:
            return {
                ...state,
                loading:true,
                error: null
            };

        case STOP_FETCHING_POSTS:
            return {
                ...state,
                loading: false,
                error: null
            };

        case FETCHING_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            };

        case FETCHING_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Unable to fetch posts at the moment.'
            }

        default:
            return state;
    }
}
