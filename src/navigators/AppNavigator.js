import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';
import ToolbarAndroid, {TabBarItem} from 'react-native-vector-icons/MaterialIcons';


import MenuView from '../components/MenuView';
import ProfileScreen from '../components/ProfileScreen';
import LoginForm from '../components/LoginForm';
import SearchActivity from '../components/SearchActivity';
import ActivitiesForm from "../components/ActivitiesForm";
import ActivityDataForm from "../components/ActivityDataForm";
import TabBarComponent from "../components/utils/TabBarComponent";
import RegistrationScreen from "../components/RegistrationForm";
import {BackHandler, Platform} from "react-native";
import ScanRestaurantForm from "../components/ScanRestaurantForm";


const Activities = StackNavigator(
    {
        ActivitiesForm: {screen: ActivitiesForm},
        ActivityDataForm: {screen: ActivityDataForm}
    },
    {
        initialRouteName: 'ActivitiesForm',
        navigationOptions: {header: null}
    }
);

const MainMenu = TabNavigator(
    {
        ScanRestaurant: {screen: ScanRestaurantForm},
        // FindLocation: {screen: SearchActivity},
        Profile: { screen: ProfileScreen },
        Menu: { screen: MenuView },

    },
    {
        navigationOptions: ({ navigation }) => ({
            // See https://material.io/icons/#ic_build for more icons

            tabBarIcon: ({ }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'ScanRestaurant') {
                    iconName = 'search';
                } else if (routeName === 'Profile') {
                    iconName = 'person';}
                // }else if (routeName === 'FindLocation') {
                //     iconName = 'pets';
                // }
                return <ToolbarAndroid size={20}>{iconName}</ToolbarAndroid>;
            },
        }),
        tabBarComponent: TabBarComponent,
        animationEnabled: false,
        swipeEnabled: false,
        showIcon: true,
        tabBarPosition: 'top',
        initialRouteName: 'ScanRestaurant'
    }
);


export const AppNavigator = StackNavigator(
    {
        Activities: { screen: Activities },
        Login: { screen: LoginForm },
        Menu: { screen: MainMenu },
        Registration: { screen: RegistrationScreen }
    },
    {
        navigationOptions: {header: null},
        initialRouteName: 'Menu'
    }
);

class AppWithNavigationState extends React.Component {


    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener,
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
