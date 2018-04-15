
import {
    UPDATE_MENU,
    UPDATE_CATEGORIES, LOAD_ALL_MENU, LOADING_MENU
} from "../actions/types";

const INITIAL_STATE = {
    categories: [],
    categoryMenu: [],
    overallMenu: [],
    isLoading: true,
};

export default (state=INITIAL_STATE, action) => {
    // console.log("restaurantReducer", state, action.type, action.payload);
    switch(action.type){
        case UPDATE_MENU:
            return { ...state, categoryMenu: state.overallMenu[state.categories[action.payload]] } ;
        case UPDATE_CATEGORIES:
            return { ...state, categories: action.payload } ;
        case LOAD_ALL_MENU:
            return { ...state, overallMenu: action.payload  } ;
        case LOADING_MENU:
            return { ...state, isLoading: action.payload  } ;
        default:
            return state;
    }

};

