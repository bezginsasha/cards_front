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
		updateOrInsertPile: (state, action) => {
			var oldName = action.payload.oldName;
			var newName = action.payload.newName;

			if (!newName) {
				return;
			}

			if (oldName) {
				var index = state.indexOf(oldName);
				state[index] = newName;
			} else {
				state.push(newName);
			}
		}
	}
});

export const { deletePile, updateOrInsertPile } = pilesSlice.actions

export default pilesSlice.reducer
