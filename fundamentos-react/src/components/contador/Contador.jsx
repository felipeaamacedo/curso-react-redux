import './Contador.css'
import React from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

//Quando estamos usando uma classe em react precisamos de duas coisas: 
// (1) ao criar a classe usar o extends React.Component para poder criar um componente.
// (2) usar a função render() para poder renderizar o componente baseado em classes;

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => this.setState({ numero: this.state.numero + this.state.passo })
    dec = () => this.setState({ numero: this.state.numero - this.state.passo })

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }


    render() {
        return (
            <div className="Contador">

                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>

            </div>
        )
    }
}