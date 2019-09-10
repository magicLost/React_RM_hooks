import React, { useMemo } from 'react';
import classes from './PortfolioSlider.module.scss';

import { usePortfolioSlider } from "../../../hooks/PortfolioSlider/portfolioSlider";

import PortfolioSliderController from './Controller/PortfolioSliderController';
//import PortfolioSliderView from './View/PortfolioSliderView';

import CarouselOpacity from "../../Carousel/CarouselOpacity/CarouselOpacity";
import Scroller from "../../Scroller/Scroller";
import ControlsFeature, {type} from "../../ControlsFeature/ControlsFeature";
import ArrowCarouselControls from "../../../component/ArrowCarouselControls/ArrowCarouselControls";

import {formType} from "../../ControlsFeature/Model/Config";
import ImgOnLoad from '../../../component/UI/ImgOnLoad/ImgOnLoad';
import Button, {button_type} from '../../../component/UI/Button/Button';
//import Img from "../../../component/UI/Img/Img";


const PortfolioSlider = ({categories, icons, photos, showFeedBackFormHandler}) => {

    const [ 
        controller, 
        categoryIndex,
        photoIndex ] = usePortfolioSlider(new PortfolioSliderController());

    controller.photos = photos;
    //controller.showFeedBackFormHandler = showFeedBackFormHandler;

    const onWantTheSameButtonClick = (event) => {

        event.stopPropagation();
        event.preventDefault();

        const id = photos[categoryIndex].desc[photoIndex].id;

        showFeedBackFormHandler(
            [
                { name: "photoId", value: id }
            ]
        );

    };

    /* const getCarouselItem = (index, activeIndex) => {

        return (

            <Img
                isActive={ index === activeIndex }
                src300={photos[categoryIndex]["300"][index]}
                src600={photos[categoryIndex]["600"][index]}
            />

        );

    };
 */

    const getCarouselItems = (itemClass, getItemStyle, isTranslated, opacity, activeIndex) => {

        console.log("getCarouselItems");

        return photos[categoryIndex]["300"].map((value, index) => {

            let style = getItemStyle(isTranslated, opacity, activeIndex, index);

            return (

                <li
                    key={itemClass + index}
                    className={itemClass}
                    style={style}
                >

                    <div className={classes.CarouselPhotoItem}>
                        <ImgOnLoad
                            alt={"Пример нашей работы."}
                            isActive={ index === activeIndex }
                            src={photos[categoryIndex]["300"][index]}
                            srcSets={[
                                { media: "(min-width: 700px)", srcSet: photos[categoryIndex]["600"][index]}
                            ]}
                        />
                    </div>

                </li>

            );

        });

    };

    const getScrollerItem = (itemClickHandler, index) => {

        //console.log("getItem");

        let style = {
            backgroundImage: 'url(' + icons[categoryIndex] + ")",
            backgroundPosition: _getBGPosition(index, 100)
        };

        return (

            <div
                className={classes.Wrapper}
                data-index={index}
            >
                <div
                    className={classes.Content}
                    data-index={index}
                    style={style}
                    onClick={itemClickHandler}
                >

                </div>
            </div>

        );

    };

    const getDescription = () => {

        const desc = photos[categoryIndex].desc[photoIndex];

        return (

            <div className={classes.Description}>

                <h4 className={classes.Title}>{ desc.title }</h4>

                <p className={classes.Text}>
                    { desc.text }
                </p>

                <p className={classes.Price}>
                    Примерная стоимость: { desc.price }
                </p>

                <Button type={button_type.TEXT} label={"Хочу такую"} onClick={onWantTheSameButtonClick} />

            </div>

        );

    };

    const _getBGPosition = (index, offset) => {

        let multi = Math.floor(index / 3);

        return "-" + ((index - 3 * multi) * offset) + "px -" + offset * multi + 'px';

    };

    return (
        
        <div className={classes.PortfolioSlider}>

            <h3 className={classes.MainTitle}>Наши работы.</h3>

            { useMemo(() => (
                    <div className={classes.CarouselWrapper}>
                        <div className={classes.Carousel}>

                            <CarouselOpacity
                                itemsLength={photos[categoryIndex]["300"].length}
                                items={photos[categoryIndex]["300"]}
                                getItems={getCarouselItems}
                                activeIndex={photoIndex}
                                decreaseActiveIndex={controller.onDecreasePhotoIndex}
                                increaseActiveIndex={controller.onIncreasePhotoIndex}
                            />

                        </div>

                        <div className={classes.Arrows}>
                            <ArrowCarouselControls
                                increaseActiveIndex={controller.onIncreasePhotoIndex}
                                decreaseActiveIndex={controller.onDecreasePhotoIndex}
                                activeIndex={photoIndex}
                                length={photos[categoryIndex]["300"].length}
                                arrowSizeClass={classes.ArrowsSize}
                            />
                        </div>
                    </div>
                ), [photoIndex, categoryIndex])
            }

            { useMemo(() => (
                <div className={classes.Controls}>

                    <ControlsFeature
                        itemClickHandler={controller.onSetCategoryIndex}
                        items={categories}
                        configuration={{
                            type: type.SVG,
                            formType: formType.CIRCLE,
                            isShowTitle: true,
                            isMainItemText: false,
                            mainDivStyle: { top: "30px" },
                            mainItemStyle: { backgroundColor: "white" }
                        }}
                    />

                </div>
            ), []) }

            { useMemo(() => (
                <div className={classes.Scroller}>

                    <Scroller
                        items={photos[categoryIndex]["300"]}
                        getItem={getScrollerItem}
                        itemClickHandler={controller.onScrollerItemClick}
                    />

                </div>
            ), [categoryIndex])}

            { useMemo(() => getDescription(), [ categoryIndex, photoIndex]) }


        </div>
            
    );

};

export default PortfolioSlider;
        