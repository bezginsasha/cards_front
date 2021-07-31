import { createSlice } from '@reduxjs/toolkit'

var initialState = [
	'word',
	'test',
	'hello',
];

var pilesSlice = createSlice({
	name: 'piles',
	initialState,
	reducers: {
		deletePile: (state, action) => {
			var index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
		updatePile: (state, action) => {
			var oldName = action.payload.oldName;
			var newName = action.payload.newName;
			var index = state.indexOf(oldName);
			state[index] = newName;
		}
	}
});

export const { deletePile, updatePile } = pilesSlice.actions

export default pilesSlice.reducer
