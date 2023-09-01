import React from 'react';
// import classes from "./MyInput.model.css";
import classes from './InpurStyle.css'
const MyInput = (prop) => {
    return (
        <input className={classes.Input} {...prop}/>
    );
};

export default MyInput;