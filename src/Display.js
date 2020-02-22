import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {

    constructor(props) {
        super(props);

        this.generateDisplay = this.generateDisplay.bind(this);
    }

    generateDisplay() {
        if(this.props.value === '') {
            return '0';
        } else {
            return this.props.value;
        }
    }

    render() {
        return <h1>{this.generateDisplay()}</h1>;
    }
}

Display.propTypes = {
    value: PropTypes.string
}