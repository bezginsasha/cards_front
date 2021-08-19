import { createSlice } from "@reduxjs/toolkit";

var initialState = {
	pileName: ''
};

var currentPileSlice = createSlice({
	name: 'currentPile',
	initialState,
	reducers: {
		setPile: (state, action) => {
			state.pileName = action.payload;
		}
	}
});

export const { setPile } = currentPileSlice.actions;

export default currentPileSlice.reducer
