import React, { useEffect, useState } from 'react';
import CardListItem from "./CardListItem";

function CardList(props) {
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
			<CardListItem
				value={card.original_word}
				key={ card.id }
				id={ card.id }
				visible={ card.id === idOfVisibleContextMenu }
				contextMenuClickHandler={ contextMenuClickHandler }
				showUpdateCardForm={ props.showUpdateCardForm }
			/>
		);
	}

	return cardsElements
}

export default CardList
