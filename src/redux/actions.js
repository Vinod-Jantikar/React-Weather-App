import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./actionType";

export const getData = (payload) => ({
    type : FETCH_DATA_SUCCESS,
    payload
})

