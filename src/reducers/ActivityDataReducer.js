import { ACTIVITY_SELECTED } from "../actions/types";

const INITIAL_STATE = {
    activity: ''
};

export default (state=INITIAL_STATE, action) => {
    // console.log(action);
    switch(action.type){
        case ACTIVITY_SELECTED:
            {
                return { ...state, activity: action.payload};
            }

        default:
            return state;
    }
};