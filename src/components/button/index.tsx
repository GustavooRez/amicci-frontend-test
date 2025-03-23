import React from "react";

const Button = ({buttonLabel, onClick}:ButtonProps) => {

    return (
        <button onClick={onClick}>{buttonLabel}</button>
    )
}



export default Button