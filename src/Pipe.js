import React from 'react'
import './Pipe.css'

function Pipe(props) {
    return (
        <input type="button" className="pipe" value={ props.value } />
    )
}

export default Pipe;
