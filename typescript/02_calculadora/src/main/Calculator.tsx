import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

interface State {
    displayValue: string,
    clearDisplay: boolean,
    operation: string,
    values: number[],
    current: number
}

const initialState: State = {
    displayValue: '0',
    clearDisplay: false,
    operation: '',
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props: State) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperator = this.setOperator.bind(this)
    }

    clearMemory(): void {
        this.setState({ ...initialState })
        console.log(this.state)
    }

    addDigit(n: string): void {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay === true
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i: number = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
        console.log(this.state)
    }

    setOperator(operation: string): void {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            console.log(equals)
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            switch (currentOperation) {
                case '/':
                    values[0] = values[0] / values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? '' : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values
            })
        }
        console.log(this.state)
    }



    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue}></Display>
                <Button label='AC' clear triple click={this.clearMemory}></Button>
                <Button label='+' operator click={this.setOperator}></Button>
                <Button label='7' click={this.addDigit}></Button>
                <Button label='8' click={this.addDigit}></Button>
                <Button label='9' click={this.addDigit}></Button>
                <Button label='-' operator click={this.setOperator}></Button>
                <Button label='4' click={this.addDigit}></Button>
                <Button label='5' click={this.addDigit}></Button>
                <Button label='6' click={this.addDigit}></Button>
                <Button label='*' operator click={this.setOperator}></Button>
                <Button label='1' click={this.addDigit}></Button>
                <Button label='2' click={this.addDigit}></Button>
                <Button label='3' click={this.addDigit}></Button>
                <Button label='/' operator click={this.setOperator}></Button>
                <Button label='.' click={this.addDigit}></Button>
                <Button label='0' double click={this.addDigit}></Button>
                <Button label='=' operator click={this.setOperator}></Button>
            </div>
        )

    }

}
