// Don't touch this file unless you know what you're doing.

import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';


const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");



export {
    middleware,
    addListener,
};