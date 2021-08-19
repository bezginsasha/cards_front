import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm';
import { setPile } from '../../state/currentPileSlice'

function GameForm(props) {
	var dispatch = useDispatch();
	var cards = useSelector(state => state.cards);
	var randomCardIndex = Math.floor(Math.random() * cards.length);
	var randomCard = cards[randomCardIndex];
	var piles = useSelector(state => state.piles);
	var currentPileFromRedux = useSelector(state => state.currentPile.pileName );

	function selectChangeHandler(event) {
		dispatch(setPile(event.target.value));
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

export default GameForm;
