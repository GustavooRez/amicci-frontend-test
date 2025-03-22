import React from "react";

const Input = ({inputName, onEdit} : InputProps) => {
    return (
        <input name={inputName} onChange={(value:string) => {onEdit(value)}} />
    )
}

export default Input