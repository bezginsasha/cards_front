import React from 'react';
import './WordListItem.css';

function WordListItem(props) {
    return (
        <p className="word-list-item">{ props.value }</p>
    );
}

export default WordListItem;
