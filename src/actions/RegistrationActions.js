
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    PASSWORD_CONFIRM_CHANGED
}
    from "./types";

export const emailRegistrationChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordRegistrationChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const passwordConfirmRegistrationChanged = (text) => {
    return {
        type: PASSWORD_CONFIRM_CHANGED,
        payload: text
    };
};
export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
};

export const registrationNextStage = (firstName, lastName, email, password) => {

};