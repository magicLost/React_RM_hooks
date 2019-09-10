import React, { useMemo } from 'react';
import ownClasses from './FullSizeSlider.module.scss';
import classes from './../PortfolioSlider/PortfolioSlider.module.scss';

import CarouselOpacity from "../../Carousel/CarouselOpacity/CarouselOpacity";
import Scroller from "../../Scroller/Scroller";
import ArrowCarouselControls from "../../../component/ArrowCarouselControls/ArrowCarouselControls";

import { usePortfolioSlider } from "../../../hooks/PortfolioSlider/portfolioSlider";
import PortfolioSliderController from '../PortfolioSlider/Controller/PortfolioSliderController';
import ImgOnLoad from '../../../component/UI/ImgOnLoad/ImgOnLoad';
import Button, { button_type } from '../../../component/UI/Button/Button';

        
const FullSizeSlider = ({categoryInd, photoInd, icons, photos, showFeedBackFormHandler}) => {

    const [ 
        controller, 
        categoryIndex,
        photoIndex ] = usePortfolioSlider(new PortfolioSliderController(), categoryInd, photoInd);

    controller.photos = photos;

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

    //alt, isActive, src, srcSets = []
    /* const getCarouselItem = (value, index, activeIndex) => {

        return (

            <ImgOnLoad
                alt={"Пример нашей работы."}
                isActive={ index === activeIndex }
                src={photos[categoryIndex]["300"][index]}
                srcSets={[
                    { media: "(min-width: 700px)", srcSet: photos[categoryIndex]["600"][index]}
                ]}
            />

        );

    }; */

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

            <div className={classes.Description} style={{color: "rgba(250, 255, 175, 0.705)"}}>

                <h4 className={classes.Title}>{ desc.title }</h4>

                <p className={classes.Text}>
                    { desc.text }
                </p>

                <p className={classes.Price}>
                    Примерная стоимость: { desc.price }
                </p>

                <Button 
                    type={button_type.TEXT} 
                    label={"Хочу такую"} 
                    onClick={onWantTheSameButtonClick} 
                    style={{color: "rgba(250, 255, 175, 0.705)"}}
                />

            </div>

        );

    };

    const _getBGPosition = (index, offset) => {

        let multi = Math.floor(index / 3);

        return "-" + ((index - 3 * multi) * offset) + "px -" + offset * multi + 'px';

    };

    return (
        
        <div className={classes.PortfolioSlider}>

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

                <div className={classes.Scroller}>

                    <Scroller
                        items={photos[categoryIndex]["300"]}
                        getItem={getScrollerItem}
                        itemClickHandler={controller.onScrollerItemClick}
                    />

                </div>

                { useMemo(() => getDescription(), [ categoryIndex, photoIndex]) }

            </div>

        </div>
            
    );

};

export default FullSizeSlider;
        