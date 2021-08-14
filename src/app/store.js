import { configureStore } from '@reduxjs/toolkit'

import cardsReducer from '../state/cardsSlice'
import inputWordsSlice from '../state/inputWordsSlice'
import pilesSlice from '../state/pilesSlice'
import currentUserSlice from '../state/currentUserSlice'

export default configureStore({
	reducer: {
		cards: cardsReducer,
		inputWords: inputWordsSlice,
		piles: pilesSlice,
		currentUser: currentUserSlice
	}
})
