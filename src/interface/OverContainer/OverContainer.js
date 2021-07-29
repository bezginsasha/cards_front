import React from 'react';
import './OverContainer.css';

function OverContainer(props) {
	function clickHandler() {
		props.clickHandler();
	}

	return (
		<section className="over-container" onMouseDown={ clickHandler }>
			{ props.children }
		</section>
	);
}

export default OverContainer;
