import {
    LOADING_ORIGINAL_COMMENT_FAILURE,
    LOADING_ORIGINAL_COMMENT_SUCCESS,
    MODIFYING_COMMENT_FAILURE,
    MODIFYING_COMMENT_SUCCESS,
    START_MODIFYING_COMMENT,
    STOP_LOADING_ORIGINAL_COMMENT,
    STOP_MODIFYING_COMMENT,
    UPDATE_COMMENT
} from "./constants";

export const initialState = {
    comment: {
        id: '',
        text: '',
        date: '',
        postId: '',
        username: ''
    },
    error: null
};

export const modifyCommentReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOADING_ORIGINAL_COMMENT_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                error: null
            };

        case LOADING_ORIGINAL_COMMENT_FAILURE:
            return {
                ...state,
                error: "Fail to load original comment."
            };

        case STOP_LOADING_ORIGINAL_COMMENT:
            return {
                ...state,
                error: null
            };

        case START_MODIFYING_COMMENT:
            return {
                ...state,
                error: null
            };

        case STOP_MODIFYING_COMMENT:
            return initialState;

        case MODIFYING_COMMENT_SUCCESS:
            return {
                ...state,
                error: null
            };

        case MODIFYING_COMMENT_FAILURE:
            return {
                ...state,
                error: 'Unable to add or edit a new comment at the moment.'
            }

        case UPDATE_COMMENT:
            return {
                ...state,
                comment: {
                    ...state.comment,
                    text: action.payload
                },
                error: null
            };

        default:
            return state;
    }
}