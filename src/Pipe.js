import React from 'react'
import './Pipe.css'

class Pipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="button" className="pipe" value={ this.props.value } />
        )
    }
}

export default Pipe;
