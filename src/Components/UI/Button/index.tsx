import React from 'react';
import { myObject } from '../../../types';

interface IButtonProps{
handleClick : () => void,
text : string,
btnProps ?: myObject
}

const Button =(props : IButtonProps)=>{
   const {handleClick,text,btnProps={}} = props;
    return (
        <button onClick={handleClick} {...btnProps}>{text}</button>
    )
}

export default Button;