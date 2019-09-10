import React, {useMemo} from 'react';
import classes from './CarouselTranslate.module.scss';
import {useCarouselTranslate} from "../../../hooks/Carousel/carousel";

//import {useCarouselTranslate} from "../../../hooks/carousel";
//import {getTranslateX} from "./Helper/tech";
import CalcTranslateX from './Model/CalcTranslateX';
import CarouselTranslateController from './Controller/CarouselTranslateController';

const CarouselTranslate = ({itemsLength, items, activeIndex, increaseActiveIndex, decreaseActiveIndex, getItems }) => {

    //const [ isTranslated, state, onPointerDown, onPointerMove, onPointerUp ] = useCarouselTranslate(itemsLength, activeIndex, increaseActiveIndex, decreaseActiveIndex);
    const [ controller, listStyle, isTranslated, translateX ] = useCarouselTranslate(
            new CarouselTranslateController(
                new CalcTranslateX()
            )
        );

    controller.activeIndex = activeIndex;
    controller.itemsLength = itemsLength;
    controller.increaseActiveIndex = increaseActiveIndex;
    controller.decreaseActiveIndex = decreaseActiveIndex;


    console.log("render carouselTranslate", listStyle, translateX, activeIndex);

    /*RENDER*/
    const finalTranslateX = controller.calc.getTranslateX(activeIndex, translateX);

    const finalListStyle = {
        ...listStyle,
        transform: 'translateX(' + finalTranslateX + ')'
    };

   /*  const getItems = () => {

        console.log("CarouselTranslate getItems");

        return items.map((value, index) => {

            //return getItem(index, 0, itemClass);
            //console.log("item");

            return (

                <li key={classes.Item + index} className={classes.Item}>
                    {getItem(value)}
                </li>

            ); 

        });

    } */

    return (

        <div className={classes.CarouselTranslate}>

            <ul
                className={classes.ItemsList}
                onMouseDown={controller.onMouseDown}
                onTouchStart={controller.onTouchStart}
                onTouchMove={controller.onTouchMove}
                onTouchEnd={controller.onTouchEnd}
                style={finalListStyle}
            >

                { useMemo(() => getItems(items, classes.Item, activeIndex), [items, activeIndex])  }

            </ul>

        </div>

    );
};

export default CarouselTranslate;
        