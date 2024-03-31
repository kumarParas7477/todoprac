import React from "react";
import { myObject } from "../../../types";

interface IInputProps{
type :string,
handleChange: (e) => void,
inputProps ?:myObject,
}

const InputComponent=(props :IInputProps)=>{
    const {type,handleChange,inputProps={}} = props;

    return <input type={type} onChange={handleChange} {...inputProps}></input>
}

export default InputComponent