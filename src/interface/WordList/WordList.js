import React, { useEffect, useState } from 'react';
import WordListItem from "./WordListItem";

function WordList(props) {
	var cards = props.cards;
	var cardsElements = null;

	var [ idOfVisibleContextMenu, setId ] = useState('');

	function contextMenuClickHandler(id) {
		setId(id);
	}

	useEffect(() => {
		document.addEventListener('click', () => setId('') );
	}, []);

	if (cards != null) {
		cardsElements = cards.map( card =>
			<WordListItem
				value={card.original_word}
				key={ card.id }
				id={ card.id }
				visible={ card.id === idOfVisibleContextMenu }
				contextMenuClickHandler={ contextMenuClickHandler }
			/>
		);
	}

	return cardsElements
}

export default WordList
