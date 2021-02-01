import {applyMiddleware, compose, createStore} from 'redux';
import {postsReducer} from '../Views/PostList/reducers';
import thunk from 'redux-thunk';
import {singlePostReducer} from "../Views/PostView/reducers";
import {modifyPostReducer} from "../Views/NewPost/reducers";
import {loginReducer} from "../Views/Login/reducers";
import {modifyCommentReducer} from "../Views/Comments/reducers";
import {persistCombineReducers, persistStore} from 'redux-persist'
import {CookieStorage} from 'redux-persist-cookie-storage'
import Cookies from "js-cookie";
import {userReducer} from "../Views/User/reducers";

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
    login: loginReducer,
    user: userReducer
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

persistStore(store, {});

export default store;