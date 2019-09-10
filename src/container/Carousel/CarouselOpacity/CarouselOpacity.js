import React, {useEffect, useMemo} from 'react';
import classes from './CarouselOpacity.module.scss';
import {useCarouselOpacity} from "../../../hooks/Carousel/carousel";
import CarouselOpacityController from './Controller/CarouselOpacityController';

import CalcTranslateX from '../CarouselTranslate/Model/CalcTranslateX';
import CastTranslateXToOpacity from "./Model/CastTranslateXToOpacity";

        
const CarouselOpacity = ({itemsLength, items, getItems, activeIndex, increaseActiveIndex, decreaseActiveIndex}) => {

    const [ controller, opacity, isTranslated ] = useCarouselOpacity(
            new CarouselOpacityController(
                new CalcTranslateX(),
                new CastTranslateXToOpacity()
            )
        );

    controller.activeIndex = activeIndex;
    controller.itemsLength = itemsLength;
    controller.increaseActiveIndex = increaseActiveIndex;
    controller.decreaseActiveIndex = decreaseActiveIndex;

    console.log("render carouselTranslate", opacity, isTranslated);

    /*RENDER*/

    const getItemStyle = (isTranslated, opacity, activeIndex, index) => {

        //where going
        //const nextIndex = controller.calc.isIndexIncrease() ? activeIndex + 1 : activeIndex - 1;

        let style = null;

        if(activeIndex === index){

            if(isTranslated){

                style = {
                    transitionProperty: 'opacity',
                    opacity: opacity >= 0.5 ? opacity : 0.5
                }

            }else{

                style = {
                    transitionProperty: 'opacity',
                    transitionDuration: '1s',
                    opacity: opacity
                }

            }

        }

        return style;

    };

    return (
        
        <div className={classes.CarouselOpacity}>

            <ul
                className={classes.ItemsList}
                onMouseDown={controller.onMouseDown}
                onTouchStart={controller.onTouchStart}
                onTouchMove={controller.onTouchMove}
                onTouchEnd={controller.onTouchEnd}
            >

                { useMemo(() => getItems(classes.Item, getItemStyle, isTranslated, opacity, activeIndex), [activeIndex, items, opacity, isTranslated]) }

            </ul>

        </div>
            
    );
};

export default CarouselOpacity;
        