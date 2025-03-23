import React from "react";
import {InputProps, InputOnChange} from "../../interfaces/input"
import { InputElement } from "./index.ts";

const Input = ({inputName, onEdit} : InputProps) => {
    return (
        <InputElement name={inputName} placeholder={"São Paulo"} onChange={(value:InputOnChange) => {onEdit(value.target.value)}} />
    )
}

export default Input

