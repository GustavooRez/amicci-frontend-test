import React from "react";
import {ButtonProps} from "../../interfaces/button"
import { ButtonElement } from "./index.ts";

const Button = ({buttonLabel, onClick}:ButtonProps) => {

    return (
        <ButtonElement onClick={onClick}>{buttonLabel}</ButtonElement>
    )
}



export default Button