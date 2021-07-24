import React from 'react';
import './HeaderButton.css';

function HeaderButton(props) {
	function clickHandler(event) {
		props.handler(event, props.form);
	}

    return (
        <input type="button" className="header-button" value={ props.form } onClick={ clickHandler } />
    );
}

export default HeaderButton;
