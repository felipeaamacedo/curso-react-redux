import React, { ReactElement } from 'react'

/* 
    ao trabalhar com componentes que recebem parâmetros, é importante criar uma interface, pois é com ela que você conseguirá dizer para o componente quais tipos de entrada ele recebe, ao usar o componente no arquivo App.tsx por exemplo.
    
    e aí, as entradas da função dentro do arquivo componente, o tipo de props é o nome dado a interface, neste caso:

    props:IProps

    outra ponto importante é os PARAMETROS SÃO READ-ONLY, então se você QUISER ALTERAR, CRIAR VAR e falar que é igual a props.
*/

interface IProps{
    titulo:string;
    aluno:string;
    nota:number;
}

export default function ComParametro(props:IProps):ReactElement{
    const status:string = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return(
        <div>
           <h2>{props.titulo}</h2>
           <p>
                <strong> { props.aluno } </strong>
                tem nota 
                <strong> { props.nota } </strong>
                e foi 
                <strong> { status } </strong>!
            </p>
        </div>
    )
}