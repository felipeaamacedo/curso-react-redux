import React, { useState } from 'react'
import './calculosMega'
// REQUISITOS

// (1) usuario consegue escolher quantos números quer, de 6 a 15
// (2) cada número pode variar de 1 até 60
// (3) quando um número é sorteado, ele não aparecer novamente.
// (4) o array de números deve aparecer de forma numérica no display.

export default props => {

    function sortearNumeroNaoContido(min, max, array) {
        const numeroSorteado = parseInt(Math.random() * (max + 1 - min) + min);
        return array.includes(numeroSorteado) ? sortearNumeroNaoContido(min, max, array) : numeroSorteado
    }


    function gerarNumeros(qtd) {
        let numerosGerados = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = sortearNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numerosGerados
    }

    const [quantidade, setQuantidade] = useState(props.qtde || 6)
    const [numeros, setNumeros] = useState(gerarNumeros(props.quantidade))


    return (
        <div>
            <h1>NÚMEROS SORTEADOS SÃO:</h1>
            <h2>{numeros.join(', ')}</h2>
            <div>
                <label>Quantidade de números: </label>
                <input
                    min='6'
                    max='15'
                    type="number"
                    value={quantidade}
                    onChange={(e) => {
                        setQuantidade(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }
                    } />
            </div>
            <button onClick={() => setNumeros(gerarNumeros(quantidade))}> Gerar Números </button>
        </div>
    )
}