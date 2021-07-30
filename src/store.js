import { configureStore } from '@reduxjs/toolkit'

import cardsReducer from './state/cards/cardsSlice'
import inputWordsSlice from './state/inputWords/inputWordsSlice'

export default configureStore({
	reducer: {
		cards: cardsReducer,
		inputWords: inputWordsSlice
	}
})
