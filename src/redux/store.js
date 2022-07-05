import {combineReducers} from "redux";
import {dataReducer} from "../reducer/dataReducer";
import {numbersReducer} from "../reducer/numbersReducer";

export const rootReducer = combineReducers({
    numbersReducer: numbersReducer,
    dataReducer: dataReducer,
})