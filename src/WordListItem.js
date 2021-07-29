import React, { useState, useEffect } from 'react';
import './WordListItem.css';
import more from './more.svg';
import ContextMenu from './ContextMenu'

function WordListItem(props) {
	// left is x coordinate of ContextMenu
	// because this word using in css
	var [ left, setLeft ] = useState(0);

	function contextMenuClickHandler(event) {
		event.stopPropagation();
		props.contextMenuClickHandler(props.id);
		setLeft(event.clientX);
	}

	return (
		<div className="word-list-item">
			{ props.value }
			{ props.visible ? <ContextMenu left={ left }/> : null }
			<img src={ more } className="more-button" onClick={ contextMenuClickHandler } />
		</div>
	);
}

export default WordListItem;
