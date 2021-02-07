import {
    LOADING_COMMENTS_FAILURE,
    LOADING_COMMENTS_SUCCESS,
    START_LOADING_COMMENTS,
    STOP_LOADING_COMMENTS
} from "../PostView/constants";
import {addComment, getComments, updateComment} from "./api";
import {
    MODIFYING_COMMENT_FAILURE,
    MODIFYING_COMMENT_SUCCESS,
    STOP_MODIFYING_COMMENT,
    UPDATE_COMMENT
} from "./constants";
import Cookies from "js-cookie";

export const loadCommentsAction = (id) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_COMMENTS});
        getComments(id)
            .then(data => {
                dispatch({type: LOADING_COMMENTS_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: LOADING_COMMENTS_FAILURE}))
            .finally(() => dispatch({type: STOP_LOADING_COMMENTS}));
    };
}

export const addOrEdit = (id, comment, postId, userId) => {
    return id ? updateComment(id, comment, postId, userId) : addComment(comment, postId, userId);
};

export const modifyCommentAction = (id, comment, postId) => {
    return (dispatch) => {
        comment.postId = postId;
        comment.userId = Cookies.get('uid');
        addOrEdit(id, comment, postId, comment.userId)
            .then(data => {
                dispatch({type: MODIFYING_COMMENT_SUCCESS, payload: data})
                dispatch(loadCommentsAction(postId));
            })
            .catch(() => dispatch({type: MODIFYING_COMMENT_FAILURE}))
            .finally(() => {
                dispatch({type: STOP_MODIFYING_COMMENT})
            });
    };
}

/**
 * Handle new comment text field change
 * @param value
 * @returns {{payload: *, type: string}}
 */
export const updateCommentAction = (value) => {
    return {
        type: UPDATE_COMMENT,
        payload: value
    };
};