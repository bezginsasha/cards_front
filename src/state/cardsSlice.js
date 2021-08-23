import { createSlice } from '@reduxjs/toolkit'

var initialState = [];

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		initiateCards: (state, action) => {
			// needs when user relogins
			state.length = 0;
			state.push(...action.payload);
		},
		insertCard: (state, action) => {
			state.push(action.payload);
		},
		updateCard: (state, action) => {
			var argumentCard = action.payload;
			var card = state.find(card => card.id === argumentCard.id);
			card.originalWord = argumentCard.originalWord;
			card.translatedWord = argumentCard.translatedWord;
		},
		deleteCard: (state, action) => {
			var card = state.find(card => card.id === action.payload);
			var index = state.indexOf(card);
			state.splice(index, 1);
		},
		moveCard: (state, action) => {
			var cardId = action.payload.cardId;
			var pileName = action.payload.pileName;
			var card = state.find(card => card.id === cardId);
			card.pileName = pileName;
		},
		setDefaultPileInCardsWithDeletingPile: (state, action) => {
			var deletingPileName = action.payload;
			state.forEach(card => {
				if (card.pileName === deletingPileName)
					card.pileName = 'default';
			});
		}
	}
});

export const { initiateCards, insertCard, updateCard, deleteCard, moveCard, setDefaultPileInCardsWithDeletingPile } = cardsSlice.actions;

export default cardsSlice.reducer
