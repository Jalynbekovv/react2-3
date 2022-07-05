import {types} from "../types";

const initialState = {
    numbers: []
}

export const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NUMBER:
            return {...state, numbers: [...state.numbers, 10 + +action.payload]}
        default:
            return state
    }
}
