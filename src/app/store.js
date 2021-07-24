import { configureStore } from '@reduxjs/toolkit'

import cardsReducer from '../features/cards/cardsSlice'
import inputWordsSlice from '../features/inputWords/inputWordsSlice'

export default configureStore({
	reducer: {
		cards: cardsReducer,
		inputWords: inputWordsSlice
	}
})
