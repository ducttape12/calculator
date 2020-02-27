import React from 'react';
import CalculatorButton from '../ClaculatorButton/CalculatorButton';
import Display from '../Display/Display';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Calculator.css';

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

            default:
                return;
        }

        if (operation === this.operations.EQUALS) {
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
        return (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} md={6}>
                        <Card bg="primary">
                            <Card.Header>
                                <Row>
                                    <Col xs={12}>
                                        <Display value={this.state.current}></Display>
                                    </Col>
                                </Row></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={3}><CalculatorButton display="AC" value="AC" variant="danger" onClick={this.allClear} /></Col>
                                    <Col xs={3}><CalculatorButton display="C" value="C" variant="danger" onClick={this.clear} /></Col>
                                    <Col xs={3}></Col>
                                    <Col xs={3}><CalculatorButton display="&#247;" value={this.operations.DIVISION} variant="secondary" onClick={this.operationClicked} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={3}><CalculatorButton display="7" value="7" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="8" value="8" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="9" value="9" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="&#215;" value={this.operations.MULTIPLICATION} variant="secondary" onClick={this.operationClicked} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={3}><CalculatorButton display="4" value="4" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="5" value="5" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="6" value="6" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="-" value={this.operations.SUBTRACTION} variant="secondary" onClick={this.operationClicked} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={3}><CalculatorButton display="1" value="1" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="2" value="2" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="3" value="3" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="+" value={this.operations.ADDITION} variant="secondary" onClick={this.operationClicked} /></Col>
                                </Row>
                                <Row>
                                    <Col xs={6}><CalculatorButton display="0" value="0" variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="." value="." variant="secondary" onClick={this.buttonClicked} /></Col>
                                    <Col xs={3}><CalculatorButton display="=" value={this.operations.EQUALS} variant="secondary" onClick={this.operationClicked} /></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}