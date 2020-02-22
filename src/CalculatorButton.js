import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {

    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.onClick(this.props.value);
    }

    render() {
        return <button onClick={this.buttonClicked}>{this.props.display}</button>;
    }
}

CalculatorButton.propTypes = {
    display: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};