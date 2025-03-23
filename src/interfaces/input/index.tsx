interface InputProps {
    inputName: string
    onEdit: any
}
interface InputOnChange {
    target: {
        value: string
    }
}

export {InputProps, InputOnChange}