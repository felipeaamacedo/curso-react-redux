import React, { ReactElement } from "react"

//Para exportar um component o tipo correto é ReactElement.

export default ():ReactElement=>{
    const msg:string = 'seja bem vindo'
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>{ msg }</p>
        </div>
    )
}
