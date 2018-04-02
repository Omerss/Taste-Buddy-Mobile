import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { Platform, BackHandler } from 'react-native';
import {NavigationActions} from "react-navigation";

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import { middleware } from './utils/redux';
import ReduxThunk from 'redux-thunk';



const store = createStore(
    AppReducer,
    applyMiddleware(middleware, ReduxThunk),
);

class FlexityApp extends React.Component {
    initBackButton() {
        console.log(Platform.OS);
        if (Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.onBackButton);
        }
    }
    // Fix android back button bug
    onBackButton() {
        const state = store.getState();
        const navigationState = state.nav;   // < the name of your reducer

        if(navigationState && navigationState.index) {
            store.dispatch(NavigationActions.back());
            return true;  // will not exit, just go back
        }
        else {
            return false;   // will exit
        }
    }


    //Initialize Firebase - This will be removed once we start using normal auth in GCP
    componentWillMount(){
        this.initBackButton();
        const config = {
            apiKey: 'AIzaSyAFQidg4SBfzEl8Hqmp0xdutxEe-fWrgWU',
            authDomain: 'phone-challenge-a0935.firebaseapp.',
            databaseURL: 'https://phone-challenge-a0935.firebaseio.com',
            projectId: 'phone-challenge-a0935',
            storageBucket: 'phone-challenge-a0935.appspot.com',
            messagingSenderId: '458834278107'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default FlexityApp;