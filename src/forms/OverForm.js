import './CommonForm.css'
import React from 'react';

function OverForm(props) {
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