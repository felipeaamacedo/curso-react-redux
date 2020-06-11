import React from 'react'

export default props => {
    return (
        <div>
            <span>{props.nome} - </span>
            <span><strong>{props.idade}</strong> anos - </span>
            <span>{props.nerd ? 'É nerd' : 'Não, vai ser pobre mesmo'}!</span>
        </div>
    )
}