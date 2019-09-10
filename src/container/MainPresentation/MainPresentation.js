import React, { useState, useMemo } from 'react';
import classes from './MainPresentation.module.scss';
import CarouselTranslate from "../Carousel/CarouselTranslate/CarouselTranslate";
//import CarouselOpacity from "../Carousel/CarouselOpacity/CarouselOpacity";
import ArrowCarouselControls from "../../component/ArrowCarouselControls/ArrowCarouselControls";
import ControlsFeature, { type } from "../ControlsFeature/ControlsFeature";
import Anchor from '../../component/UI/Anchor/Anchor';
import { button_type } from '../../component/UI/Button/Button';
import { formType } from '../ControlsFeature/Model/Config';

        
const MainPresentation = ({ carouselItems, carouselControlItems}) => {

    //const [ params ] = useState(() => { return {carouselItemsLength: carouselItems.length};});
    const [ activeIndex, setActiveIndex ] = useState(0);

    const carouselItemsLength = carouselItems.length;

    const increaseActiveIndex = () => {

        //console.log("increaseActiveIndex");
        if(activeIndex < carouselItemsLength - 1){

            setActiveIndex(activeIndex + 1);

        }
    };

    const decreaseActiveIndex = () => {

        //console.log("decreaseActiveIndex");
        if(activeIndex > 0){

            setActiveIndex(activeIndex - 1);

        }
    };

    const setActiveIndexToState = (index) => {

        //console.log("setActiveIndex", index, activeIndex);

        if(index >= 0 && index <= carouselItemsLength - 1){

                
            setActiveIndex(index);

        }

       /*  if(activeIndex !== index){

           

        } */

    };


    /*RENDER*/

  /*    const getCarouselItem = (value) => {

        return (

            <div className={classes.Content}>

                    <h3>{ value.title }</h3>
                    <p className={classes.Paragraph}>{ value.text }</p>
                    <Anchor label={"Подробнее"} href={value.href} type={button_type.OUTLINED}/>

            </div>

        );

    }; 
 */
    const getCarouselItems = (items, itemClass) => {

        console.log("CarouselTranslate getItems");

        return items.map((value, index) => {

            //return getItem(index, 0, itemClass);
            //console.log("item");

            return (

                <li key={itemClass + index} className={itemClass}>
                    <div className={classes.Content}>

                        <h3>{ value.title }</h3>
                        <p className={classes.Paragraph}>{ value.text }</p>
                        <Anchor label={"Подробнее"} href={value.href} type={button_type.OUTLINED}/>

                    </div>
                </li>

            ); 

        });

    }

    console.log("render MainPresentation", activeIndex);

    return (
        
        <div className={classes.MainPresentation}>

            { useMemo(() => (
                <CarouselTranslate
                    itemsLength={carouselItemsLength}
                    items={carouselItems}
                    activeIndex={activeIndex}
                    increaseActiveIndex={increaseActiveIndex}
                    decreaseActiveIndex={decreaseActiveIndex}
                    getItems={getCarouselItems}
                />
            ), [activeIndex]) }

            <div className={classes.Arrows}>

                { useMemo(() => (
                    <ArrowCarouselControls
                        increaseActiveIndex={increaseActiveIndex}
                        decreaseActiveIndex={decreaseActiveIndex}
                        activeIndex={activeIndex}
                        length={carouselItemsLength}
                        arrowSizeClass={classes.ArrowsSize}
                    />
                ), [activeIndex]) }

            </div>

            <div className={classes.MobileControls}>
                { useMemo(() => (
                    <ControlsFeature
                        itemClickHandler={setActiveIndexToState}
                        items={carouselControlItems}
                        configuration={{
                            type: type.SVG,
                            formType: formType.CIRCLE,
                            isShowTitle: true,
                            isMainItemText: false,
                            mainDivStyle: { top: "-40px" },
                            mainItemStyle: { backgroundColor: "#fafafa" }
                        }}
                    />
                ), [])}
            </div>


        </div>
            
    );
};

export default MainPresentation;
        