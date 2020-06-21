import React from 'react'
import './Button.css'
import { createPublicKey } from 'crypto'

interface IPropsButton {
    label: string;
    operator?: boolean;
    triple?: boolean;
    clear?: boolean;
    double?: boolean

    click?:{(props:any):void};

}


export default (props: IPropsButton) => {


    return (
        <button
        onClick={(e) => props.click && props.click(props.label)}

        className={`
            button 
            ${props.triple ? 'triple' : ''}
            ${props.double ? 'double' : ''}
            ${props.clear ? 'clear' : ''}
            ${props.operator ? 'operator' : ''}
        `}>
            {props.label}
        </button>
    )
}