import React from 'react';
import { useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm';

function GameForm(props) {
	var cards = useSelector(state => state.cards);
	var randomCardIndex = Math.floor(Math.random() * cards.length);
	var randomCard = cards[randomCardIndex];
	
	var piles = useSelector(state => state.piles);

	return (
		<OverForm>
			<p>{ props.title }</p>
			<select>
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
