import {
    LOAD_ALL_MENU,
    NAV_PROFILE, UPDATE_CATEGORIES,
    UPDATE_MENU
}
    from "./types";


export const ScanRestaurant  = () => {
    return {
        type: NAV_PROFILE,

    };
};


export const updateMenuItems = ( menuType ) => {
    // console.log("updateMenuItems", menuType);
    return (dispatch) => {
        dispatch({
            type: UPDATE_MENU,
            payload: menuType
        });
    };
};

export const getMenuCategories = (categories) => {
    // console.log("getMenuCategories", categories);
    return {
        type: UPDATE_CATEGORIES,
        payload: categories
    };
};

export const updateMenu = (profile) => {


    let menu = require('../assets/menus/menu.json');
    switch(profile['allergy']){
        case 0:
            break;
        case 1:
            menu = require('../assets/menus/menu.json');
            break;
        case 2:
            menu = require('../assets/menus/menu.json');
            break;
        case 3:
            menu = require('../assets/menus/menu.json');
            break;
        case 4:
            menu = require('../assets/menus/menu_seashell.json');
            break;
        case 5:
            menu = require('../assets/menus/menu.json');
            break;
        case 6:
            menu = require('../assets/menus/menu_vegetarian.json');
            break;
        default:
            break;
    }

    console.log("Updating menu", menu);

    var array = [];
    for (let prop in menu) {
        array.push(prop);
    }

    return (dispatch) => {
        dispatch({
            type: UPDATE_CATEGORIES,
            payload: array
        });
        dispatch({
            type: LOAD_ALL_MENU,
            payload: menu
        });
    };
};

async function getItemsInMenu(menu, userProfile){



}