import React from 'react';
import './WordListItem.css';
import more from './more.svg';

function WordListItem(props) {
	return (
		<p className="word-list-item">
			{ props.value }
			<img src={ more } className="more-button" />
		</p>
	);
}

export default WordListItem;
