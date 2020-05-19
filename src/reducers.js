import { combineReducers } from "redux";

import { reducer as userReducer } from "./container/users/slice";

export default combineReducers({
	userReducer,
});
