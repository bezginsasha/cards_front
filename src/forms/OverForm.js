import React from 'react';

function OverForm(props) {
    return (
        <div className="over-form" onClick={ (event) => event.stopPropagation() }>{ props.children }</div>
    );
}

export default OverForm