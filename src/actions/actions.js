import {types} from "../types";

export const changeNumberAction = () => {
    return {
        type: types.CHANGE_NUMBER
    }
}

export const changeDataAction = (userName) => {
    return {
        type: types.CHANGE_DATA,
        payload: userName
    }
}

export const addNumberAction = (number) => {
    return {
        type: types.ADD_NUMBER,
        payload: number
    }
}