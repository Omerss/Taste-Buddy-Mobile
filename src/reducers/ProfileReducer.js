import {DIET_CHANGED} from "../actions/types";

const INITIAL_STATE = {
    diet: ""
};

export default (state=INITIAL_STATE, action) => {
    // console.log(action);
    switch(action.type){
        case DIET_CHANGED:
            return { ...state, diet: action.payload } ;
        default:
            return state;
    }
};