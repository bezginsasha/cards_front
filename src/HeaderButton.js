import React from 'react';
import './HeaderButton.css';

class HeaderButton extends React.Component {
	constructor(props) {
		super(props);
	}

	handler = (event) => {
		this.props.handler(event, this.props.form);
	};

	render() {
		return (
			<input type="button" className="header-button" value={ this.props.form } onClick={ this.handler } />
		);
	}
}

export default HeaderButton;
