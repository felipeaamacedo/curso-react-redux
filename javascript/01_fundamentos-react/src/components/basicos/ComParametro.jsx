import React from 'react'

export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota) //Math.ceil arredonda valor para cima.

    return (
        <div>
            <h2>{props.titulo} </h2>
            <p>{props.aluno} tem nota {notaInt} e foi <strong>{status}</strong></p>
        </div>
    )
}