import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {postsReducer} from '../Views/PostList/reducers';
import thunk from 'redux-thunk';
import {singlePostReducer} from "../Views/PostView/reducers";
import {modifyPostReducer} from "../Views/NewPost/reducers";
import {userReducer} from "../Views/User/reducers";
import {modifyCommentReducer} from "../Views/Comments/reducers";
import { persistStore, persistCombineReducers } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from "js-cookie";

const persistConfig = {
    key: "root",
    storage: new CookieStorage(Cookies/*, options */)
}

// root reducer for app
const rootReducer = persistCombineReducers(persistConfig, {
    posts: postsReducer,
    singlePost: singlePostReducer,
    modifyPost: modifyPostReducer,
    modifyComment: modifyCommentReducer,
    storeUser: userReducer
});

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// application store
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store, {});

export default store;