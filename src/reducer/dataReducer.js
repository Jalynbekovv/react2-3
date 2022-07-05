import {types} from "../types";

const initialState = {
    data: {}
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_DATA:
            return {
                ...state, data: {
                    [action.payload.name]: action.payload.value
                }
            }
        default:
            return state
    }
}