import React from 'react'

/*
    FRAGMENTO é um Erro que é causado por um componente
    que não tem seu conteúdo envolvido por uma <div>, ou
    pela tag <React.Fragment>. 
    Caso aconteça isso você irá receber uma mensagem
    igual a abaixo.

    SyntaxError: Adjacent JSX elements must be wrapped 
    in an enclosing tag. Did you want a JSX fragment
    <>...</>?

    Para resolver basta colocar a tag <div> ou 
    <React.Fragment>
*/

export default function Fragmento(){

    //Para simular o erro tirar a tag com 
    //className=Fragment
    return(
        <div className='Fragment'>
           <h2>Fragmento</h2>
           <p>Cuidado com esse erro!</p>
        </div>
    )
}