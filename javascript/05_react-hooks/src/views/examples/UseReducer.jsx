import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState={
    cart:[],
    products: [],
    user:null,

    //foco
    number: 0,
}

function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return{...state, number: state.number+2}
        case 'login':
            return {...state, user:{name: action.payload}}

        case 'numberMultiply7':
            return{...state, number: state.number*7}

        case 'numberDivide25':
            return{...state, number: state.number/25}

        case    'numberParseInt':
            return{...state, number: parseInt(state.number)}

        case 'numberAddAny':
            return{...state, number: state.number + parseInt(action.payload) }
        case 'numberZeroise':
            return{...state,number: 0}
        
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [numToAdd, setNumToAdd] = useState('0')
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" 
                    onClick={()=>dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn"
                    onClick={()=>dispatch({type: 'numberZeroise'})}>0</button>
                    <button className="btn" 
                    onClick={()=>dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className='btn'
                    onClick={()=>dispatch({type: 'numberMultiply7'})}>*7</button>
                   <button className="btn"
                   onClick={()=>dispatch({type: 'numberDivide25'})}>/25</button> 
                   <button className="btn"
                   onClick={()=>dispatch({type:'numberParseInt'})}>RoundToInt</button>
                </div>
                <div>
                    <span className="text">{numToAdd}</span>
                    <input type="text" className="text" 
                        value={state.numberAdd}
                        onChange={(e)=>setNumToAdd(e.target.value)}/>
                    <button className="btn"
                    onClick={()=>dispatch({type:'numberAddAny', payload: numToAdd})}>addNumber</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
