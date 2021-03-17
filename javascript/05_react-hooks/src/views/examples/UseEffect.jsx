import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//useEffect causa um efeito colateral, quando há mudança de um estado específico. por isso eles pedem dois parâmetros, uma função, que é o efeito colateral, e um estado em brackets e.g. [fatorial]

function calcFatorial(n){
    if(n <0) return -1
    if (n === 0) return 1
    return calcFatorial(n-1) * n
}



const UseEffect = (props) => {
       //Ex 1 
        const [number, setNumber] = useState(1)
        const [fatorial, setFatorial] = useState(1)

        useEffect(function(){
            setFatorial(calcFatorial(number))
        }, [number])

        useEffect(function(){
            if(fatorial > 10000){
                document.title = "Eitaa!!"
            }
        }, [fatorial])



       //Ex 2 
        const[status, setStatus] = useState("Ímpar")

        useEffect(function(){
            //outra possibilidade desse simples if else seria
            //setStatus(number % 2 === 0 ? "Par" : "Ímpas")
            if(number%2===0){
                setStatus("Par")
            }else{
                setStatus("Ímpar")
            }
        }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />


            <SectionTitle title='Exercício #01' />
            <div className='center'>
                <div>
                    <span className="text"> Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>


            <SectionTitle title='Exercício #02' />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>


        </div>
    )
}

export default UseEffect
