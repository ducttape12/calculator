import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export default class Display extends React.Component {

    constructor(props) {
        super(props);

        this.generateDisplay = this.generateDisplay.bind(this);
    }

    generateDisplay() {
        if(this.props.value === undefined || this.props.value === null || this.props.value === '') {
            return '0';
        } else {
            return this.props.value;
        }
    }

    render() {
        return <Alert variant="info" className="text-right"><h1>{this.generateDisplay()}</h1></Alert>;
    }
}

Display.propTypes = {
    value: PropTypes.string
}