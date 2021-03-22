import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'




function merge(s1, s2){
        
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {
    
const [value1, setValue1] = useState("")
const [value2, setValue2] = useState("")

const count = useRef(0)
const myInput1 = useRef(null)
const myInput2 = useRef(null)


//useRef não causa uma renderização no componente, não causando um loop infinito, por isso não precisa usar um useEffect, entretanto, é possivel usar o useEffect para atribuir a um valor específico

// count.current = count.current + 1
useEffect(function(){
    count.current++
},[value1,value2])

useEffect(function(){
    count.current++
    myInput2.current.focus()
},[value1])

useEffect(function(){
    count.current++
    myInput1.current.focus()
},[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício
            #01" />
            <div>
                <span className="text">Valor: </span>
                <span className="text">{merge(value1, value2)} [</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
            </div>
            <div className="center">
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e=>setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e=>setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
