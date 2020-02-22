import React from 'react';
import CalculatorButton from './CalculatorButton';
import Display from './Display';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
        this.operationClicked = this.operationClicked.bind(this);
        this.allClear = this.allClear.bind(this);
        this.clear = this.clear.bind(this);

        this.operations = {
            ADDITION: Symbol('+'),
            SUBTRACTION: Symbol('-'),
            MULTIPLICATION: Symbol('*'),
            DIVISION: Symbol('/'),
            EQUALS: Symbol('=')
        };

        this.state = {
            previous: 0,
            total: 0,
            current: '',
            operation: this.operations.ADDITION,
            waitingForInput: true
        };
    }

    buttonClicked(value) {
        if (this.state.current === '' && value === '0') {
            return;
        }

        if (this.state.current.includes('.') && value === '.') {
            return;
        }

        if (this.state.waitingForInput) {
            this.setState({ current: `${value}`, waitingForInput: false });
        } else {
            this.setState({ current: `${this.state.current}${value}` });
        }
    }

    operationClicked(operation) {
        let current = Number(this.state.current);
        let nextOperation = operation;

        switch (this.state.operation) {
            case this.operations.ADDITION:
                current = this.state.total + current;
                break;

            case this.operations.DIVISION:
                current = this.state.total / current;
                break;

            case this.operations.MULTIPLICATION:
                current = this.state.total * current;
                break;

            case this.operations.SUBTRACTION:
                current = this.state.total - current;
                break;
        }

        if(operation === this.operations.EQUALS) {
            nextOperation = this.state.operation;
        }

        this.setState({
            operation: nextOperation,
            previous: Number(this.state.current),
            total: current,
            current: current.toString(),
            waitingForInput: true
        });
    }

    allClear() {
        this.setState({
            previous: 0,
            total: 0,
            current: '',
            operation: this.operations.ADDITION,
            waitingForInput: true
        });
    }

    clear() {
        this.setState({
            current: '',
        });
    }

    render() {

        let operation;
        switch (this.state.operation) {
            case this.operations.ADDITION:
                operation = '+';
                break;
            case this.operations.DIVISION:
                operation = '/';
                break;
            case this.operations.MULTIPLICATION:
                operation = '*';
                break;
            case this.operations.SUBTRACTION:
                operation = '-';
                break;
            case this.operations.EQUALS:
                operation = '=';
                break;
        }

        return (
            <div>
                <p>previous: {this.state.previous}</p>
                <p>total: {this.state.total}</p>
                <p>current: {this.state.current}</p>
                <p>operation: {operation}</p>
                <p>waitingForInput: {this.state.waitingForInput}</p>
                <Display value={this.state.current}></Display>
                <br />
                <CalculatorButton display="0" value="0" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="1" value="1" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="2" value="2" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="3" value="3" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="4" value="4" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="5" value="5" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="6" value="6" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="7" value="7" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="8" value="8" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="9" value="9" onClick={this.buttonClicked} /><br />
                <CalculatorButton display="." value="." onClick={this.buttonClicked} /><br />
                <CalculatorButton display="+" value={this.operations.ADDITION} onClick={this.operationClicked} /><br />
                <CalculatorButton display="-" value={this.operations.SUBTRACTION} onClick={this.operationClicked} /><br />
                <CalculatorButton display="/" value={this.operations.DIVISION} onClick={this.operationClicked} /><br />
                <CalculatorButton display="*" value={this.operations.MULTIPLICATION} onClick={this.operationClicked} /><br />
                <CalculatorButton display="=" value={this.operations.EQUALS} onClick={this.operationClicked} /><br />
                <CalculatorButton display="AC" value="AC" onClick={this.allClear} /><br />
                <CalculatorButton display="C" value="C" onClick={this.clear} /><br />
            </div>
        );
    }
}