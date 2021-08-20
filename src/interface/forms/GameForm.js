import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm';
import { setPile } from '../../state/currentPileSlice'
import { moveCard } from "../../state/cardsSlice";
import request from "../../util/request";

function GameForm(props) {
	var dispatch = useDispatch();
	var currentPileFromRedux = useSelector(state => state.currentPile.pileName );
	var cards = useSelector(state => state.cards)
				.filter(card => card.pileName === currentPileFromRedux);

	var [ randomIndex, setRandomIndex ] = useState(0);
	var randomCard;
	var randomCardComponent;
	var selectPilesComponent;
	var moveCardButtonsComponent;
	var piles = useSelector(state => state.piles);

	function selectChangeHandler(event) {
		dispatch(setPile(event.target.value));
	}

	function moveCardToPile(newPile) {
		var form = new FormData();
		form.set('cardId', randomCard.id);
		form.set('pileName', newPile);
		setRandomIndex(getRandomIndex(randomIndex, cards.length));

		request({
			url: 'cards/move',
			method: 'POST',
			body: form,
			callback: data => {
				dispatch(moveCard({
					cardId: randomCard.id,
					pileName: newPile
				}));
			}
		});
	}

	selectPilesComponent = (
		<select onChange={ selectChangeHandler } value={ currentPileFromRedux } >
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
		randomCard = cards[randomIndex];
		randomCardComponent = <p>{ randomCard.originalWord }</p>;

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
		randomCardComponent = <p>There are no words in selected pile</p>
	}

	return (
		<OverForm>
			<p>{ props.title }</p>
			{ selectPilesComponent }
			{ randomCardComponent }
			{ moveCardButtonsComponent }
		</OverForm>
	);
}

function getRandomIndex(currentIndex, cardsLength) {
	var newIndex;
	while (true) {
		newIndex = Math.floor(Math.random() * cardsLength);
		if (newIndex !== currentIndex)
			return newIndex;
	}
}

export default GameForm;
