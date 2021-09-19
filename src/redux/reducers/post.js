import { POST } from "../actions/types";
import { initialState } from "../initialState";

export const postReducer = (state = initialState.post, action) => {
    switch (action.type) {
        case POST.SET_POST:
            return action.payload
        default:
            return state;
    }
}