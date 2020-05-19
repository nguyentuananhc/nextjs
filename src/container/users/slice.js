import { createSlice } from "@reduxjs/toolkit";

const REDUCER_NAME = "userReducer";

const userReducer = createSlice({
	name: REDUCER_NAME,
	initialState: {
		userInfo: {},
	},
	reducers: {
		// get user
		getUserRequest: () => {},
		getUserSuccess: (state, actions) => {
			const { data } = actions?.payload || {};
			state.userInfo = data;
		},
		getUserError: () => {},
		setUserRequest: (state, actions) => {
			state.userInfo = {
				name: "tuan anh",
				age: "19",
			};
		},
	},
});

const { reducer, actions, selectors } = userReducer;
export { reducer, actions, selectors, userReducer, REDUCER_NAME };
