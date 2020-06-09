import React from 'react'

export default function Fragmento(props){
    return (

        // <> </> nesse modelo reduzido não aceita atributos a mais
        // <React.Fragment></React.Fragment>  aceita atributos a mais.
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}