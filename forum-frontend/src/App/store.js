import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {postsReducer} from '../Views/PostList/reducers';
import thunk from 'redux-thunk';
import {singlePostReducer} from "../Views/PostView/reducers";
import {modifyPostReducer} from "../Views/NewPost/reducers";
import {userReducer} from "../Views/User/reducers";
// root reducer for app
const rootReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer,
    modifyPost: modifyPostReducer,
    storeUser: userReducer

});

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// application store
let store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;