import './CommonForm.css'
import React, { useEffect } from 'react';

function OverForm(props) {
	// This hook need to set height of container in case - text height more than container height
	// Without it gray and blurred background's height only of monitor size
	useEffect(() => {
		var form = document.querySelector('.over-form');
		var formHeight = form.offsetHeight + 120;

		var container = document.querySelector('.over-container');
		var containerHeight = container.offsetHeight;

		if (formHeight > containerHeight)
			container.style.height = formHeight + 'px';
	});

	return (
		<div
			className="over-form"
			onMouseDown={ (event) => event.stopPropagation() }
		>
			{ props.children }
		</div>
	);
}

export default OverForm
