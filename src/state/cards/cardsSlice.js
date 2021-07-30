import { createSlice } from '@reduxjs/toolkit'

var initialState = [];

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		initiateCards: (state, action) => {
			state.push(...action.payload);
		},
		insertCard: (state, action) => {
			state.push(action.payload);
		},
		deleteCard: (state, action) => {
			var card = state.find(card => card.id === action.payload);
			var index = state.indexOf(card);
			state.splice(index, 1);
		}
	}
});

export const { initiateCards, insertCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer
