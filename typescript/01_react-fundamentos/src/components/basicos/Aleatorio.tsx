import React, { ReactElement } from 'react'

interface IProps{
    min:number;
    max:number;
}


function randomNumber(min:number, max:number):number{
    let randomNumber = min + Math.random()*(max-min) 
    return randomNumber
}

export default (props:IProps):ReactElement=>{
    let min:number = props.min
    let max:number = props.max
    return(
        <div>
            <h2>Componente Aleatorio</h2>
            <p> o número aleatório é <strong> { randomNumber(min, max)} </strong></p>
        </div>
    )
}