import {FETCHING_POSTS_SUCCESS, START_FETCHING_POSTS, STOP_FETCHING_POSTS} from "./constants";

const initialState = {
    fetchingDiscussions: true,
    discussions: null,
    error: null,
};

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case START_FETCHING_POSTS:
            return {
                ...state,
                fetchingDiscussions: true,
                error: null,
            };

        case STOP_FETCHING_POSTS:
            return {
                ...state,
                fetchingDiscussions: false,
            };

        case FETCHING_POSTS_SUCCESS:
            return {
                ...state,
                discussions: action.payload,
                fetchingDiscussions: false,
                error: null,
            };

        default:
            return state;
    }
}
