import { createSlice } from '@reduxjs/toolkit'

var initialState = [];

var pilesSlice = createSlice({
	name: 'piles',
	initialState,
	reducers: {
		initiatePiles: (state, action) => {
			// needs when user relogins
			state.length = 0;
			state.push(...action.payload);
		},
		deletePile: (state, action) => {
			var index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
		insertPile: (state, action) => {
			var newPile = action.payload;
			state.push(newPile);
		},
		updatePile: (state, action) => {
			var oldName = action.payload.oldName;
			var newName = action.payload.newName;

			var index = state.indexOf(oldName);
			state[index] = newName;
		}
	}
});

export const { initiatePiles, deletePile, insertPile, updatePile } = pilesSlice.actions;

export default pilesSlice.reducer
