import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './CalculatorButton.css';

export default class CalculatorButton extends React.Component {

    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.onClick(this.props.value);
    }

    render() {
        return <Button className="calculator-button" variant={this.props.variant} onClick={this.buttonClicked} block>{this.props.display}</Button>;
    }
}

CalculatorButton.propTypes = {
    display: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string
};