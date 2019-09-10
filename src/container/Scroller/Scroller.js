import React, {useRef, useMemo, useEffect} from 'react';
import classes from './Scroller.module.scss';
import { useScroller } from '../../hooks/Scroller/scroller';

import EventTyper, { EVENT_TYPE } from './Model/EventTyper';
import CalcTranslateX from './Model/CalcTranslateX';
import ScrollerView from './View/ScrollerView';
import ScrollerController from './Controller/ScrollerController';
import ShowContentHelper from './Model/ShowContentHelper';

const Scroller = ({items, type, itemClickHandler, getItem}) => {

    //console.log(ctrl);

    const [ controller, translateX, isNeedScroller, numberOfActiveItems ]
     = 
    useScroller(    
        new ScrollerController(
            new ScrollerView(),
            new CalcTranslateX(), 
            new EventTyper(),
            new ShowContentHelper()
        )
    );

    useEffect(() => {

       /* console.log("useEffect");

        console.log(controller.containerRef);
        console.log(controller.listRef);
        console.log(controller.itemRef);*/

        //console.log("useEffect add resize");

        window.addEventListener('resize', controller.onWindowResize, false);

        return () => {
            window.removeEventListener('resize', controller.onWindowResize, false);
        };

    }, []);

    useEffect(() => {

        controller.init();

    }, [items]);

    //console.log(controller);

    controller.containerRef = useRef(null);
    controller.listRef = useRef(null); 
    controller.itemRef = useRef(null);
    controller.numberOfItems = items.length;

    const onItemClick = (event) => {

        //console.log("onItemClick ");

        const target = event.target;
        //console.log("itemClickHandler start", state.eventType, state.isNeedScroller);
    
        if(isNeedScroller){
    
            if(controller.eventType === EVENT_TYPE.CLICK){
    
                //console.log("itemClickHandler eval", state.eventType);
                itemClickHandler(target);
    
            }
    
        }else{
    
            itemClickHandler(target);
    
        }
    
    };

    //const item = controller.getItem(classes.Item);

    //console.log("scroller render", numberOfActiveItems, controller);

     /*RENDER*/

    let finalListStyle = {justifyContent: "center"};
    let mouseDownHandler = null;
    let touchStartHandler = null;
    let touchMoveHandler = null;
    let touchEndHandler = null;

    if(isNeedScroller){

        finalListStyle = {
            ...controller.listStyle,
            transform: 'translateX(' + translateX + 'px)'
        };

        mouseDownHandler = controller.onMouseDown;
        touchStartHandler = controller.onTouchStart;
        touchMoveHandler = controller.onTouchMove;
        touchEndHandler = controller.onTouchEnd;

    }

    return (

        <div
            className={classes.Scroller}
            ref={controller.containerRef}
        >

            <ul
                ref={controller.listRef}
                className={classes.ItemsList}
                onMouseDown={mouseDownHandler}
                onTouchStart={touchStartHandler}
                onTouchMove={touchMoveHandler}
                onTouchEnd={touchEndHandler}
                style={finalListStyle}
            >

                { useMemo(() => (controller.getItems(
                        items, getItem, 
                        onItemClick, 
                        classes.Item, 
                        numberOfActiveItems)
                    ), [items, isNeedScroller, numberOfActiveItems]) }

            </ul>

        </div>
        
    );
};

export default Scroller;
        