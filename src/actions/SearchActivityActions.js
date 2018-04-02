import {
    LOCATION_CHANGED,
    DATETIME_CHANGED,
    CATEGORY_CHANGED,
    SEARCH_ACTIVITY,
    NAV_ACTIVITIES
}
    from "./types";

export const locationChanged = (text) => {
    return {
        type: LOCATION_CHANGED,
        payload: text
    };
};

export const datetimeChanged = (datetime) => {
    return {
        type: DATETIME_CHANGED,
        payload: datetime
    };
};

export const categoryChanged = (text) => {
    return {
        type: CATEGORY_CHANGED,
        payload: text
    };
};

export const searchActivity = ( location, datetime, category ) => {
    //console.log(`location: ${location}, datetime: ${datetime}, category: ${category}`);
    return (dispatch) =>{
        dispatch({ // This will clean the query so the search must be done before this
            type: SEARCH_ACTIVITY,
            payload: {location, datetime, category}
        });
        dispatch({ type: NAV_ACTIVITIES});
    };
};