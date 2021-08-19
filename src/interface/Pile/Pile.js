import React from 'react'
import './Pile.css'

function Pile(props) {
	return (
		<input type="button" className="pile" value={ props.name } />
	)
}

export default Pile;
