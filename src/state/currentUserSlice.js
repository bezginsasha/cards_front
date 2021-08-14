import { createSlice } from '@reduxjs/toolkit'

var initialState = {
	name: ''
};

var currentUserSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
	}
});

export const { setName } = currentUserSlice.actions;

export default currentUserSlice.reducer
