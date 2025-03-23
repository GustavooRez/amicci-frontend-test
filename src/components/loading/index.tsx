import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {LoadingElement} from "./index.ts"

const Loading = () => {
    return (
        <LoadingElement><CircularProgress  color="inherit" size="5rem"/></LoadingElement>
    )
}

export default Loading