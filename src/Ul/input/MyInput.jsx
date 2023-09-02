import React from 'react';
// import classes from "./MyInput.model.css";
import classes from './InpurStyle.css'
const MyInput = React.forwardRef((prop,ref) => {
    return (
        <input  ref={ref} className={classes.Input} {...prop}/>
    );
});

export default MyInput;