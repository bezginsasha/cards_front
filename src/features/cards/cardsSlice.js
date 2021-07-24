import { createSlice } from '@reduxjs/toolkit'

var initialState = [];

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        initiateCards: (state, action) => {
            state.push(...action.payload);
        }
    }
});

export const { initiateCards } = cardsSlice.actions;

export default cardsSlice.reducer