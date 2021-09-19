import { POST } from "./types";

export const postToRedux = (payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: POST.SET_POST,
                payload
            });

            resolve();
        })
    }
}