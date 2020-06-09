import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div>
        <h1>Fundamentos React (Arrow_)</h1>
        <Aleatorio 
            maxNumber = {12} 
            minNumber = {2}/>
        <Fragmento />
        <ComParametro
            titulo='Situação Aluno' aluno='Pedro'
            nota={9.3} />
        <Primeiro></Primeiro>
    </div>