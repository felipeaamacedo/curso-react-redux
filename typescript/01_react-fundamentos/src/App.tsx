import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default () => {
    return(
        <div>
            <h1>Fundamentos React</h1>
            <Primeiro></Primeiro>
            <ComParametro 
                titulo='Situação do Aluno' 
                aluno='Pedro Silva'
                nota={ 9.3 }
            />
            <Fragmento />
        </div>
    )
}