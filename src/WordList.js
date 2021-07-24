import React from 'react';
import WordListItem from "./WordListItem";

function WordList(props) {

	var cards = props.cards;
	var cardsElements = null;

	if (cards != null) {
		cardsElements = cards.map( card =>
			<WordListItem value={card.original_word} key={ card.id } />
		);
	}

	return (
		<React.Fragment>
			{ cardsElements }
		</React.Fragment>
	)
}

export default WordList
