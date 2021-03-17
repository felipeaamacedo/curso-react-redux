import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
function UseState(props){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial...")

    //Para fazer uma mudança na UI é preciso ter uma mudança no estado. Por isso o useState name, num inputText precisa ser ligado a uma função onChange que altera o estado, e aí sim a UI é alterada.

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <span className="text">{count}</span>
                <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
            </div>

            <SectionTitle title='Exercício #02'/>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            <span className="text">{name}</span>

        </div>
    )
}

export default UseState;