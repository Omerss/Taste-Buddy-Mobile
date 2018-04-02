import { LOCATION_CHANGED,
    DATETIME_CHANGED,
    CATEGORY_CHANGED,
    SEARCH_ACTIVITY} from "../actions/types";

const INITIAL_STATE = {
    location: "",
    datetime: "",
    category: "",
    queryLocation: null,
    queryDatetime: null,
    queryCategory: null
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOCATION_CHANGED:
            return { ...state, location: action.payload};
        case DATETIME_CHANGED:
            return { ...state, datetime: action.payload};
        case CATEGORY_CHANGED:
            return { ...state, category: action.payload};
        case SEARCH_ACTIVITY:
            return {
                INITIAL_STATE,
                queryLocation:action.payload.location,
                queryDatetime:action.payload.datetime,
                queryCategory:action.payload.category};
        default:
            return state;
    }
};