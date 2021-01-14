import {
    START_MODIFYING_POST,
    STOP_MODIFYING_POST,
    MODIFYING_POST_SUCCESS,
    MODIFYING_POST_FAILURE,
    LOADING_ORIGINAL_POST_FAILURE,
    LOADING_ORIGINAL_POST_SUCCESS,
    STOP_LOADING_ORIGINAL_POST,
    UPDATE_POST_TITLE,
    UPDATE_POST_CONTENT
} from "./constants";

const defaultUser = {
    "id": {"$oid": "5feab6d231521c7b4f43184a"},
    "password": "admin01",
    "role": "ROLE_ADMIN",
    "name": "admin1",
    "email": "rainyforest@gmail.com"
}

const initialState = {
    post:{
        id: '',
        date: '',
        text: '',
        username: defaultUser.name
    },
    error: null
};

export const modifyPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ORIGINAL_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                error:null
            };

        case LOADING_ORIGINAL_POST_FAILURE:
            return {
                ...state,
                error: "Fail to load original Post"
            };
        case STOP_LOADING_ORIGINAL_POST:
            return {
                ...state,
                error:null
            };

        case START_MODIFYING_POST:
            return {
                ...state,
                error: null
            };

        case STOP_MODIFYING_POST:
            return initialState;

        case MODIFYING_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                error: null
            };

        case MODIFYING_POST_FAILURE:
            return {
                ...state,
                error: 'Unable to add a new post at the moment.'
            }
        case UPDATE_POST_TITLE:
            return{
                ...state,
                post: {
                    ...state.post,
                    title: action.payload
                },
                error:null
            };

        case UPDATE_POST_CONTENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    text: action.payload
                },
                error:null
            };

        default:
            return state;
    }
}
