import React from 'react';
import './WordListItem.css';

class WordListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p className="word-list-item">{ this.props.value }</p>
		);
	}
}

export default WordListItem;
