import {ACTIVITY_SELECTED} from "./types";

export const activitySelected = (activityData) => {
    return {
        type: ACTIVITY_SELECTED,
        payload: activityData
    };
};
