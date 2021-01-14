import {LOADING_POSTS_FAILURE, LOADING_POSTS_SUCCESS, START_LOADING_POSTS, STOP_LOADING_POSTS} from "./constants";

const initialState = {
    posts: [],
    loading: true,
    error: null
};

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case START_LOADING_POSTS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case STOP_LOADING_POSTS:
            return {
                ...state,
                loading: false,
                error: null
            };

        case LOADING_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            };

        case LOADING_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Unable to fetch posts at the moment.'
            }

        default:
            return state;
    }
}
