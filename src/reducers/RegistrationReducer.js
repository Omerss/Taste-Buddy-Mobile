import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED, PASSWORD_CONFIRM_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: ''
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload } ;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case PASSWORD_CONFIRM_CHANGED:
            return { ...state, confirmPassword: action.payload };
        case FIRST_NAME_CHANGED:
            return { ...state, first_name: action.payload };
        case LAST_NAME_CHANGED:
            return { ...state, last_name: action.payload };
        default:
            return state;
    }
};