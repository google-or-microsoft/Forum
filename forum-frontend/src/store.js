import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './Views/PostList/reducers';

// root reducer for app
const rootReducer = combineReducers({
    post: postReducer,
});

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// application store
let store = createStore(
    rootReducer,
    /* preloaded state, */
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;