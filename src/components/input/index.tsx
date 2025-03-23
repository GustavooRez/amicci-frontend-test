import React from "react";
import {InputProps, InputOnChange} from "../../interfaces/input"

const Input = ({inputName, onEdit} : InputProps) => {
    return (
        <input name={inputName} onChange={(value:InputOnChange) => {onEdit(value.target.value)}} />
    )
}

export default Input

