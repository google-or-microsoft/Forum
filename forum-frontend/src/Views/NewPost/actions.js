import {addPost,updatePost} from "./api";
import {
    MODIFYING_POST_FAILURE,
    MODIFYING_POST_SUCCESS,
    STOP_MODIFYING_POST,
    LOADING_ORIGINAL_POST_SUCCESS,
    LOADING_ORIGINAL_POST_FAILURE,
    STOP_LOADING_ORIGINAL_POST, UPDATE_POST_CONTENT, UPDATE_POST_TITLE
} from "./constants";
import {getPost} from "../PostView/api";

export const loadOriginalPostAction = (id) =>{
    return (dispatch) => {
        if (id){
            getPost(id)
                .then(data => {
                    console.log(data);
                    dispatch({type:LOADING_ORIGINAL_POST_SUCCESS, payload: data})
                })
                .catch(() => dispatch({type: LOADING_ORIGINAL_POST_FAILURE}))
                .finally(() => dispatch({type: STOP_LOADING_ORIGINAL_POST}));
        }
    }
}

export const modifyPostAction = (id,post) => {
    return (dispatch) => {
        if (id){
            updatePost(id,post)
                .then(data => {
                    dispatch({type:MODIFYING_POST_SUCCESS, payload: data})
                })
                .catch(() => dispatch({type: MODIFYING_POST_FAILURE}))
                .finally(() => dispatch({type: STOP_MODIFYING_POST}));
        } else {
            addPost(post)
                .then(data => {
                    dispatch({type:MODIFYING_POST_SUCCESS, payload: data})
                })
                .catch(() => dispatch({type: MODIFYING_POST_FAILURE}))
                .finally(() => dispatch({type: STOP_MODIFYING_POST}));
        }
        // getPost(id)
        //     .then(data => {
        //         dispatch({type: LOADING_SINGLE_POST_SUCCESS, payload: data})
        //     })
        //     .catch(() => dispatch({type: LOADING_SINGLE_POST_FAILURE}))
        //     .finally(() => dispatch({type: STOP_LOADING_SINGLE_POST}));
    };
}

export const updatePostTitle = (value) => {
    return {
        type: UPDATE_POST_TITLE,
        payload: value
    };
};

export const updatePostContent = (value) => {
    return {
        type: UPDATE_POST_CONTENT,
        payload: value
    };
};
