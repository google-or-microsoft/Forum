import {addPost, updatePost} from "./api";
import history from "../../history";
import {
    LOADING_ORIGINAL_POST_FAILURE,
    LOADING_ORIGINAL_POST_SUCCESS,
    MODIFYING_POST_FAILURE,
    MODIFYING_POST_SUCCESS,
    STOP_LOADING_ORIGINAL_POST,
    STOP_MODIFYING_POST,
    UPDATE_POST_AUTHOR,
    UPDATE_POST_CONTENT,
    UPDATE_POST_TITLE
} from "./constants";
import {getPost} from "../PostView/api";
import Cookies from "js-cookie";

export const loadOriginalPostAction = (id) => {
    return (dispatch) => {
        if (id) {
            getPost(id)
                .then(data => {
                    dispatch({type: LOADING_ORIGINAL_POST_SUCCESS, payload: data});
                })
                .catch(() => dispatch({type: LOADING_ORIGINAL_POST_FAILURE}))
                .finally(() => dispatch({type: STOP_LOADING_ORIGINAL_POST}));
        }
    }
}

export const addOrEdit = (id, post) => {
    return id ? updatePost(id, post) : addPost(post);
};

export const modifyPostAction = (id, post) => {
    return (dispatch) => {
        // assign username from userReducer to the post
        post.username = Cookies.get('username');
        addOrEdit(id, post)
            .then(data => {
                dispatch({type: MODIFYING_POST_SUCCESS, payload: data})
            })
            .catch(() => dispatch({type: MODIFYING_POST_FAILURE}))
            .finally(() => {
                dispatch({type: STOP_MODIFYING_POST})
                history.push('/posts');
            });
    };
}

export const updatePostTitle = (value) => {
    return {
        type: UPDATE_POST_TITLE,
        payload: value
    };
};

export const updateAuthor = (value) => {
    return {
        type: UPDATE_POST_AUTHOR,
        payload: value
    };
};

export const updatePostContent = (value) => {
    return {
        type: UPDATE_POST_CONTENT,
        payload: value
    };
};
