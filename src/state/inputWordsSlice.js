// This state i use to store input words of NewCardForm
// In case user close form when he didn't want it
// With reopening this form input values was remaining
import { createSlice } from '@reduxjs/toolkit'

var initialState = {
	originalWord: '',
	translatedWord: ''
};

const inputWordsSlice = createSlice({
	name: 'inputWords',
	initialState,
	reducers: {
		updateOriginalWord: (state, action) => {
			state.originalWord = action.payload;
		},
		updateTranslatedWord: (state, action) => {
			state.translatedWord = action.payload;
		},
		clearWords: (state, action) => {
			state.originalWord = '';
			state.translatedWord = '';
		}
	}
});

export const { updateOriginalWord, updateTranslatedWord, clearWords } = inputWordsSlice.actions;

export default inputWordsSlice.reducer
