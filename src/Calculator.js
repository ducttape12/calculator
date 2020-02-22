import React from 'react';
import CalculatorButton from './CalculatorButton';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(value) {
        alert(`Button clicked.  Value: ${value}`);
    }

    render() {
        return <CalculatorButton display="Favorite Drink" value="Coffee" onClick={this.buttonClicked} />;
    }
}