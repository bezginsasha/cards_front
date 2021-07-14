import React from 'react';
import './OverContainer.css';

class OverContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler = () => {
		this.props.clickHandler();
	};

	render() {
		return (
		<section className="over-container" onMouseDown={ this.clickHandler }>
			{ this.props.children }
		</section>
		);
	}
}

export default OverContainer;
