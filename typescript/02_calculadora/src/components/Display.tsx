import React from 'react'
import './Display.css'
interface IPropsDisplay {
    value: string;
}

export default (props: IPropsDisplay) => {

    return (
        <div className='display'>
            {props.value}
        </div>
    )
}