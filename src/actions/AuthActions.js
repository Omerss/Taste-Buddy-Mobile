import firebase from 'firebase';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED, NAV_LOGIN, NAV_REGISTRATION,
}
    from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const registerUser = () => {
    // console.log("dispatching loginUserFailed");
    return (dispatch) => {
        dispatch({type: NAV_REGISTRATION});
    };

    //     return (dispatch) => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(user => {
//                 loginUserSuccess(dispatch, user);
//                 console.log("registered user");
//             })
//             .catch((error) => {
//                 loginUserFailed(dispatch);
//                 console.log(`Very bad - ${error}`);
//             });
//     };
};

export const loginUser = ({ email, password }) => {
    // allows us to run asynchronous action
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});
        console.log("Check credentials");
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user );
                console.log("Good");
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const loginUserGoogle = ( ) => {
    // This doesnt actually sign you up through google
    return (dispatch) => {
        loginUserSuccess(dispatch, {} );
    };
};

const loginUserSuccess = (dispatch, user) => {
    //console.log("dispatching loginUserSuccess");
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    dispatch({
        type: NAV_LOGIN
    });
};

const loginUserFailed = (dispatch) => {
   // console.log("dispatching loginUserFailed");
    dispatch({ type: LOGIN_USER_FAILED });
};