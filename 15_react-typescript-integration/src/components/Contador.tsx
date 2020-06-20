import React, { Component } from 'react'
import ContadorValor from './ContadorValor'
import './Contador.css'
import logRender from '../decorators/logRender'

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState {

}

@logRender
export default class Contador extends Component<IContadorProps, IContadorState> {
    public state = { valor: this.props.valorInicial || 0 }

    private setValor = (delta: number) => {
        //usado arrow para não variar o this, e nesse caso eu não quero pois quero que mude apenas esse componente
        this.setState({
            valor: this.state.valor + delta
        })
    }


    render() {
        return (
            <div>
                <ContadorValor contador={this.state.valor} ></ContadorValor>

                <button onClick={()=>this.setValor(+10)}>+</button>
                <button onClick={()=>this.setValor(-10)}>-</button>
            </div>
        )
    }
}