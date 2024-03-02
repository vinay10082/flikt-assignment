import { combineReducers } from "redux";
import authReducer from './Auth'
import currentUserReducer from './CurrentUser'

export default combineReducers({
    authReducer, currentUserReducer
})