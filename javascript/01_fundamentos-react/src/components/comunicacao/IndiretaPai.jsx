import React from 'react'
import IndiretaFilho from './IndiretaFilho'
import { useState } from 'react'


export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // nome idade nerd (passados pelo filho)

    function fornecerInformações(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <div>
                    Pai
                </div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}