import {useState} from "react";


export const actions = {
    INIT: "INIT",
    POINTER_DOWN: "POINTER_DOWN",
    POINTER_MOVE: "POINTER_MOVE",
    POINTER_UP: "POINTER_UP",
    WINDOW_RESIZE: "WINDOW_RESIZE",
    ITEM_CLICK: "ITEM_CLICK"
}

export const useCarouselOpacity = (ctrl) => {

    const [state, setState] = useState({

        controller: ctrl,
        opacity: 1,
        isTranslated: false,
        translateX: 0
    });

    state.controller.setState = setState;

    return [ state.controller, state.opacity, state.isTranslated ];

};

export const useCarouselTranslate = (ctrl) => {

    const [state, setState] = useState({

        controller: ctrl,

        listStyle: {
            transitionProperty: 'transform',
            transitionDuration: '0.5s'
        },

        isTranslated: false,

        translateX: 0

    });

    state.controller.setState = setState;

    return [ state.controller, state.listStyle, state.isTranslated, state.translateX ];

};

/* import {useReducer} from 'react';
//import CalcTranslateX from '../container/Carousel/CarouselTranslate/Helper/calcTranslateX';

export const useCarouselOpacity = (calcOpacity) => {

    const initState = {

        calc: calcOpacity,

        isTranslated: false,

        opacity: 1

    }

    const onPointerDown = (state, action) => {

        state.calc.onPointerDown(action.pageX, action.pageY);

        return {...state, isTranslated: true};


    };

    const onPointerMove = (state, action) => {

        //action.pageX, action.pageY
        const pageX = action.pageX;
        const pageY = action.pageY;

        state.calc.onPointerMove(pageX, pageY);

        if(state.calc.isYScroll){
            return state;
        }else{
            return {...state, isTranslated: true, opacity: state.calc.calcOpacity(pageX, pageY)};
        }

    };

    const onPointerUp = (state, action) => {

        if(!state.calc.isYScroll && state.calc.isEnougthDist()){

            if(state.calc.isIndexIncrease()){

                action.increaseActiveIndex();

            }else{

                action.decreaseActiveIndex();

            }

        }

        state.calc.isYScroll = false;
        state.calc.isFirstMove = true;

        return {...state, isTranslated: false, opacity: 1};

    };

    const reducer = (state, action) => {

        //console.log(state, action);

        switch(action.type){

            case "POINTER_DOWN": return onPointerDown(state, action);

            case "POINTER_MOVE": return onPointerMove(state, action);

            case "POINTER_UP": return onPointerUp(state, action);

            default: return state;
        }

    };

    const [state, dispatch] = useReducer(reducer, initState);

    return [
        state.opacity,
        state.isTranslated,
        dispatch
    ];

};

export const useCarouselTranslate = (calcTranslateX) => {

    const initState = {

        calc: calcTranslateX,

        listStyle: {
            transitionProperty: 'transform',
            transitionDuration: '0.5s'
        },

        isTranslated: false,

        translateX: 0

    }

    const onPointerDown = (state, action) => {

        state.calc.onPointerDown(action.pageX, action.pageY);

        return {...state, listStyle: {}, isTranslated: true};


    };

    const onPointerMove = (state, action) => {

        console.log("Move ", state.translateX, state.calc);
        //action.pageX, action.pageY
        const pageX = action.pageX;
        const pageY = action.pageY;

        state.calc.onPointerMove(pageX, pageY, action.activeIndex, action.itemsLength);

        if(state.translateX !== state.calc.translateX){
            return {...state, translateX: state.calc.translateX};
        }else{
            return state;
        }

    };

    const onPointerUp = (state, action) => {

        let listStyle = {};

        if(!state.calc.isYScroll && state.calc.isEnougthDist()){

            console.log("Enought dist ", state.calc.dist);

            listStyle = {
                transitionProperty: 'transform',
                transitionDuration: '0.5s'
            };

            if(state.calc.isIndexIncrease()){

                action.increaseActiveIndex();

            }else{

                action.decreaseActiveIndex();

            }

        }

        state.calc.onPointerUp();

        return {...state, listStyle: listStyle, isTranslated: false, translateX: 0};

    };

    const reducer = (state, action) => {

        //console.log(state, action);

        switch(action.type){

            case "POINTER_DOWN": return onPointerDown(state, action);

            case "POINTER_MOVE": return onPointerMove(state, action);

            case "POINTER_UP": return onPointerUp(state, action);

            default: return state;
        }

    };

    const [state, dispatch] = useReducer(reducer, initState);

    return [
        state.translateX,
        state.isTranslated,
        state.listStyle,
        state.calc.getTranslateX,
        dispatch
    ];

}; */