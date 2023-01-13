import { combineReducers } from "redux";
import userReducer from "./user/user";
import formSVReducer from './formSV/formsv'
const rootReducer = combineReducers({
    userReducer,
    formSVReducer,
})

export default rootReducer;