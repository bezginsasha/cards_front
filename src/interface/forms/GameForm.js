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
	var cards = useSelector(state => state.cards);

	var [ randomIndex, setRandomIndex ] = useState(0);
	var randomCard = cards[randomIndex];

	var piles = useSelector(state => state.piles);
	var currentPileFromRedux = useSelector(state => state.currentPile.pileName );

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

	return (
		<OverForm>
			<p>{ props.title }</p>
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
			<p>{ randomCard.originalWord }</p>
			{
				piles.map( pile =>
					<input
						type="button"
						value={ 'To ' + pile }
						key={ pile }
						onClick={ () => moveCardToPile(pile) }
						className="over-form-button"
					/>
				)
			}
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
