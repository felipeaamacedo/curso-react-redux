import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => {
    return(
        <div>
            <h1>Fundamentos React</h1>
            <Primeiro></Primeiro>
            <ComParametro
                titulo='Situação do Aluno'
                aluno='Pedro da Silva'
                nota={ 9.3 }
            />
            <Fragmento />
            <Aleatorio min={2} max={100}/>
        </div>
    )
}