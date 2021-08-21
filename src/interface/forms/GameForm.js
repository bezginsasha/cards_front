import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm';
import { setPile } from '../../state/currentPileSlice'
import { moveCard } from "../../state/cardsSlice";
import request from "../../util/request";
import { ALL_CARDS_PILE } from '../../util/constants';

import store from '../../app/store'

function GameForm(props) {
	var dispatch = useDispatch();
	var currentPileFromRedux = useSelector(state => state.currentPile.pileName );
	var [ newIndex, setNewIndex ] = useState(0);
	var [ displayTranslate, setDisplayTranslate ] = useState(false);
	var card;
	var cardComponent;
	var selectPilesComponent;
	var moveCardButtonsComponent;
	var piles = useSelector(state => state.piles);


	// This variable needs when user selected ALL_CARDS_PILE
	// because ALL_CARDS_PILE in false pile needed to displaying in app component only
	// and in GameForm ALL_CARDS_PILE redundant
	var currentPile = currentPileFromRedux === ALL_CARDS_PILE ? piles[0] : currentPileFromRedux;
	var cards = useSelector(state => state.cards)
		.filter(card => card.pileName === currentPile);

	function selectChangeHandler(event) {
		dispatch(setPile(event.target.value));
		setNewIndex(0);
	}

	function moveCardToPile(newPile) {
		var form = new FormData();
		form.set('cardId', card.id);
		form.set('pileName', newPile);

		dispatch(moveCard({
			cardId: card.id,
			pileName: newPile
		}));

		setDisplayTranslate(false);

		// This strange constructor needs because i need generate new index
		// based on updated state.cards, but in usual situation i can access
		// to state.cards only with rerender component, therefore in beginning
		// of function. But i need to know new state.cards there. And therefore
		// i imported store object to get new state. And therefore
		// i generate new index in correct way on updated state.cards
		var tempCards = store.getState().cards.filter(card => card.pileName === currentPile);
		setNewIndex(getNewIndex(tempCards.length));

		request({
			url: 'cards/move',
			method: 'POST',
			body: form
		});
	}

	selectPilesComponent = (
		<select onChange={ selectChangeHandler } value={ currentPile } >
			{
				piles.map( pile =>
					<option
						value={ pile }
						key={ pile }
					>{ pile }</option>
				)
			}
		</select>
	);

	if (cards.length > 0) {
		card = cards[newIndex];
		cardComponent = <p>{ card.originalWord }</p>;

		moveCardButtonsComponent = (
			piles.map( pile =>
				<input
					type="button"
					value={ 'To ' + pile }
					key={ pile }
					onClick={ () => moveCardToPile(pile) }
					className="over-form-button"
				/>
			)
		);
	} else {
		cardComponent = <p>There are no words in selected pile</p>
	}

	return (
		<OverForm>
			<p>{ props.title }</p>
			{ selectPilesComponent }
			<input
				type="button"
				value={ displayTranslate ? 'Hide translate' : 'Show translate' }
				className="over-form-button"
				onClick={ () => setDisplayTranslate(!displayTranslate) }
			/>
			{ cardComponent }
			{ displayTranslate ? <p>{ card.translatedWord }</p> : null }
			{ moveCardButtonsComponent }
		</OverForm>
	);
}

var getNewIndex = function() {
	var lastIndex = 0;
	return function(cardsLength) {
		lastIndex = getRandomIndex(lastIndex, cardsLength);
		return lastIndex;
	};
}();

function getRandomIndex(currentIndex, cardsLength) {
	if (cardsLength < 2)
		return 0;

	var newIndex;
	while (true) {
		newIndex = Math.floor(Math.random() * cardsLength);
		if ((newIndex !== currentIndex) && (newIndex < cardsLength))
			return newIndex;
	}
}

export default GameForm;
