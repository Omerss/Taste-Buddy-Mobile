import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';
import ToolbarAndroid, {TabBarItem} from 'react-native-vector-icons/MaterialIcons';
// import ToolbarAndroid from 'react-native-vector-icons/Ionicons';

import MenuView from '../components/MenuView';
import ProfileScreen from '../components/ProfileScreen';
import LoginForm from '../components/LoginForm';

import ScanRestaurantForm from "../components/ScanRestaurantForm";
import ActivityDataForm from "../components/ActivityDataForm";
import TabBarComponent from "../components/utils/TabBarComponent";
import RegistrationScreen from "../components/RegistrationForm";
import ActivitiesForm from "../components/ActivitiesForm";


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


const RestaurantNavigator = StackNavigator(
    {
        ScanRestaurant: {screen: ScanRestaurantForm},
        Menu: { screen: MenuView },
    },
    {
        initialRouteName: 'ScanRestaurant',
        navigationOptions: {header: null}
    }
);

const MainMenu = TabNavigator(
    {
        Profile: { screen: ProfileScreen },
        RestaurantNavigator: {screen: RestaurantNavigator},
    },
    {
        navigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'RestaurantNavigator') {
                    iconName = 'restaurant';
                } else if (routeName === 'Profile') {
                    iconName = 'person';
                }
                return <ToolbarAndroid size={25}></ToolbarAndroid>;
            },
        }),
        tabBarComponent: TabBarComponent,
        animationEnabled: false,
        swipeEnabled: false,
        showIcon: true,
        tabBarPosition: 'top',
        initialRouteName: 'RestaurantNavigator'
    }
);


export const AppNavigator = StackNavigator(
    {
        RestaurantNavigator: {screen: RestaurantNavigator},
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
