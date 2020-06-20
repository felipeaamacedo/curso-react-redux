import React from 'react'

export default function Aleatorio(props) {
    function randomNumber() {
        let varRandomNumber = parseInt((Math.random() * (props.maxNumber - props.minNumber) + props.minNumber))

        return document.getElementById('randomNumber').innerText = varRandomNumber
    }
    return (
        <div>
            <h1>Sorteando os números aleatórios!</h1>
            <p>O número sorteado foi...</p>
            <p id='randomNumber'>0</p>
            <button onClick={randomNumber}>roll the dices</button>
        </div>
    )
}