import React, { useState } from 'react';
import './WordListItem.css';
import more from './more.svg';
import ContextMenu from '../ContextMenu/ContextMenu'

function CardListItem(props) {
	// left is x coordinate of ContextMenu
	// because this word using in css
	var [ left, setLeft ] = useState(0);

	function contextMenuClickHandler(event) {
		event.stopPropagation();
		props.contextMenuClickHandler(props.card.id);
		setLeft(event.clientX);
	}

	var contextMenuElement = (
		<ContextMenu
			left={ left }
			card={ props.card }
			showUpdateCardForm={ props.showUpdateCardForm }
		/>
	);

	return (
		<div className="card-list-item">
			{ props.card.originalWord }
			{ props.visible ? contextMenuElement : null }
			<img src={ more } className="more-button" onClick={ contextMenuClickHandler } />
		</div>
	);
}

export default CardListItem;
