import {CHANGE_VALUE} from "./types";

export const inputReducer = (state = 0, action) => {
    switch (action.type) {
        case CHANGE_VALUE: return state;
        default: return state
    }

}
