import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome='Rodrigo' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Caio' idade={15} nerd={false}></DiretaFilho>
        </div>
    )
}