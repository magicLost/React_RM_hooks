import React from 'react';
import classes from './MenuButton.module.scss';
import icons from "./../../../static/icons/ICONS.svg";
        
const menuButton = ({onClick}) => {
    return (
        
        <button className={classes.MenuButton} onClick={onClick}>

            <svg
                className={classes.Svg}
                width="5"
                height={"5"}
                viewBox={"0 0 384 384"}
            >
                <use  xlinkHref={ icons + "#main_menu" }/>
            </svg>

        </button>
            
    );
};

export default menuButton;
        