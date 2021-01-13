import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {postReducer} from './Views/PostList/reducers';
import thunk from 'redux-thunk';
// root reducer for app
const rootReducer = combineReducers({
    posts: postReducer,
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