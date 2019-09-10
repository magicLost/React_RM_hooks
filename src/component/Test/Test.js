import React, {useState, useMemo, useEffect, useReducer} from 'react';
import classes from './Test.module.scss';
import Card from "../Card/Card";
import Scroller from "../../container/Scroller/Scroller";
import button, {button_type} from "../UI/Button/Button";
import {useMain} from "../../hooks/test";


const test = ({}) => {

    const [ shit, update ] = useMain();

    /*const [ pageX , setPageX ] = useState(0);
    const [ pageY , setPageY ] = useState(0);*/
    //const [ isTranslated, setIsTranslated ] = useState(false);

    const initState = {
        pageX: 0
    };

    const onSetPageX = (state, action) => {

        console.log(state.pageX);

        return { pageX: action.pageX };

    };


    const reducer = (state, action) => {

        switch(action.type){

            //case "INIT_STATE": return {...state, created: action.created, activeSectionIndex: action.activeSectionIndex, prevIndex: action.prevIndex};
            case "SET_PAGE_X": return onSetPageX(state, action);

            default: return state;
        }

    };



    const [state, dispatch] = useReducer(reducer, initState);

   /* useEffect(() => {

      /!*  if(isTranslated){
            //console.log("addEventListener");
            window.addEventListener('mousemove', onMouseMove, false);
            window.addEventListener('mouseup', onMouseUp, false);
        }

        return () => {
            //console.log("removeEventListener");
            window.removeEventListener('mousemove', onMouseMove, false);
            window.removeEventListener('mouseup', onMouseUp, false);
        };*!/

    });//, [state.isTranslated]*/

    /*MOUSE EVENTS*/
    const onClick = (event) => {
        update();
    };

    const onMouseDown = (event) => {

        console.log("onMouseDown");

        event.preventDefault();
        event.stopPropagation();

        //setIsTranslated(true);
        //setPageX(event.pageX);

        window.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('mouseup', onMouseUp, false);

    };

    const onMouseMove = (event) => {

        console.log("onMouseMove - ");

        event.preventDefault();
        event.stopPropagation();

       /* setPageX(event.pageX);
        setPageY(event.pageY);*/
        dispatch({type: "SET_PAGE_X", pageX: event.pageX});
    };

    const onMouseUp = (event) => {

        console.log("onMouseUp");

        event.preventDefault();
        event.stopPropagation();

        //setIsTranslated(false);

        window.removeEventListener('mousemove', onMouseMove, false);
        window.removeEventListener('mouseup', onMouseUp, false);
    };

    const scrollerItemClickHandler = (event) => {

        console.log("scrollerItemClickHandler");

    };

    console.log("render test");

    /*onMouseDown={onMouseDown}*/

    return (

        <>
            <div
                className={classes.Test}
                style={{textAlign: 'center'}}
            >
                <p> { shit } </p>
                <button onClick={onClick}>Click me.</button>
            </div>

            <div className={classes.Scroller}>

                {/*<Scroller numberOfItems={6} items={[0,1,2,3,4,5]} itemClickHandler={scrollerItemClickHandler}/>*/}

                { useMemo(() => (
                    <Scroller numberOfItems={6} items={[0,1,2,3,4,5]} itemClickHandler={scrollerItemClickHandler}/>
                ), []) }

            </div>
        </>
            
    );
};

export default test;
        