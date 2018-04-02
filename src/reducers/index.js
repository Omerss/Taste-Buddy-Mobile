import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import SearchActivityReducer from './SearchActivityReducer';
import ActivityDataReducer from './ActivityDataReducer';
import RegistrationReducer from "./RegistrationReducer";
import ProfileReducer from "./ProfileReducer";
import RestaurantReducer from "./RestaurantReducer";


const AppReducer = combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    queryActivity: SearchActivityReducer,
    activityData: ActivityDataReducer,
    registration: RegistrationReducer,
    diet: ProfileReducer,
    restaurantData: RestaurantReducer
});

export default AppReducer;
