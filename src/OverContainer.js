import React from 'react';
import './OverContainer.css';

class OverContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<section class="over-container">
			{ this.props.children }
		</section>
		);
	}
}

export default OverContainer;
