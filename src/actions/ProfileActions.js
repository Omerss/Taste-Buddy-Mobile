
import {
    DIET_CHANGED
}
    from "./types";

export const dietChanged = (dietValue) => {
    return (dispatch) => {
        dispatch({
            type: DIET_CHANGED,
            payload: dietValue
        });
    };
};