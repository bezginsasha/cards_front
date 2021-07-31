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
		props.contextMenuClickHandler(props.id);
		setLeft(event.clientX);
	}

	var contextMenuElement = (
		<ContextMenu
			left={ left }
			cardId={ props.id }
		/>
	);

	return (
		<div className="card-list-item">
			{ props.value }
			{ props.visible ? { contextMenuElement } : null }
			<img src={ more } className="more-button" onClick={ contextMenuClickHandler } />
		</div>
	);
}

export default CardListItem;
