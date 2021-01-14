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

        id: '',
        date: '',
        title: '',
        text: '',
        username: defaultUser.name,
        error: null
};

export const modifyPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ORIGINAL_POST_SUCCESS:
            return {
                ...state,
                // post:action.payload,
                id:action.payload.id,
                date:action.payload.date,
                title:action.payload.title,
                text:action.payload.text,
                username:action.payload.username,
                error:null
            };
        case LOADING_ORIGINAL_POST_FAILURE:
            return {
                ...state,
                error:"Fail to load original Post"
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
            return {
                ...state,
                error: null
            };

        case MODIFYING_POST_SUCCESS:
            return {
                ...state,
                // post: action.payload,
                id:action.payload.id,
                date:action.payload.date,
                title:action.payload.title,
                text:action.payload.text,
                username:action.payload.username,
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
                title: action.payload.title,
                error:null
            };

        case UPDATE_POST_CONTENT:
            return {
                ...state,
                text: action.payload.text,
                error:null
            };

        default:
            return state;
    }
}
