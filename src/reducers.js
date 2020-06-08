import { combineReducers } from "redux";

import { reducer as userReducer } from "./containers/users/slice";

export default combineReducers({
	userReducer,
});