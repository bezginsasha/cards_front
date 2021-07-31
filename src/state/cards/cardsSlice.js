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
		updateCard: (state, action) => {
			var argumentCard = action.payload;
			var card = state.find(card => card.id === argumentCard.id);
			card.original_word = argumentCard.originalWord;
			card.translated_word = argumentCard.translatedWord;
		},
		deleteCard: (state, action) => {
			var card = state.find(card => card.id === action.payload);
			var index = state.indexOf(card);
			state.splice(index, 1);
		}
	}
});

export const { initiateCards, insertCard, updateCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer
