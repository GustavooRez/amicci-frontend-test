import React from "react";

const Button = ({buttonLabel, onClick}:ButtonI) => {

    return (
        <button onClick={onClick}>{buttonLabel}</button>
    )
}

interface ButtonI {
    buttonLabel: string,
    onClick: any
}

export default Button