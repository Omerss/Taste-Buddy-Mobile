import {AppNavigator} from "../navigators/AppNavigator";
import {NavigationActions} from "react-navigation";
import {
    NAV_LOGIN, NAV_LOGOUT, NAV_CHALLENGE, NAV_PROFILE, SCREEN_LOGIN, NAV_ACTIVITIES,
    ACTIVITY_SELECTED, NAV_REGISTRATION, NAV_SCAN_RESTAURANT
} from "../actions/types";

// Start with two routes: The Main screen, with the Login screen on top.
const initialNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(SCREEN_LOGIN)
);

export default (state = initialNavState, action) => {
    // console.log(action);
    let nextState;
    switch (action.type) {
        case NAV_LOGIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Menu' }),
                state
            );
            break;
        case NAV_LOGOUT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: SCREEN_LOGIN }),
                state
            );
            break;
        case NAV_CHALLENGE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: NAV_CHALLENGE }),
                state
            );
            break;
        case NAV_PROFILE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            );
            break;
        case NAV_ACTIVITIES:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ActivitiesForm' }),
                state
            );
            break;
        case ACTIVITY_SELECTED:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ActivityDataForm' }),
                state
            );
            break;
        case NAV_REGISTRATION:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Registration' }),
                state
            );
            break;

        case NAV_SCAN_RESTAURANT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Registration' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
