import React from 'react';
import './HeaderButton.css';

class HeaderButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input type="button" className="header-button" value={ this.props.buttonValue } />
		);
	}
}

export default HeaderButton;
