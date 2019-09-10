import React from 'react';
import classes from './../Button/Button.module.scss';
import { button_type } from '../Button/Button';
        
const anchor = ({href, label, type, style}) => {

    let buttonClasses = classes.Button;

    switch(type){
        case button_type.TEXT: buttonClasses += ' ' + classes["Button--Text"];break;
        case button_type.OUTLINED: buttonClasses += ' ' + classes["Button--Outlined"];break;
        case button_type.CONTAINED: buttonClasses += ' ' + classes["Button--Contained"];break;

        default:
            console.error("Bad anchor type " + type);
            buttonClasses += ' ' + classes["Button--Text"];
            break;
    }

    return (

        <a
            href={""}
            className={buttonClasses}
            style={style}
        >
            <span className={classes.Label}>{ label }</span>
        </a>
            
    );

    
};

export default anchor;
        