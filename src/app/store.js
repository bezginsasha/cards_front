import { configureStore } from '@reduxjs/toolkit'

import cardsReducer from '../state/cardsSlice'
import inputWordsSlice from '../state/inputWordsSlice'

export default configureStore({
	reducer: {
		cards: cardsReducer,
		inputWords: inputWordsSlice
	}
})
