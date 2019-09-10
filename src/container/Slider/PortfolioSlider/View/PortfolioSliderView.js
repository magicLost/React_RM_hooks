import React from 'react';
import Img from '../../../../component/UI/Img/Img';

class PortfolioSliderView {

    classes = null;

    constructor(classes){
        this.classes = classes;
    }

    getCarouselItem = (index, activeIndex, photos, categoryIndex) => {

        return (

            <Img
                isActive={ index === activeIndex }
                src300={photos[categoryIndex]["300"][index]}
                src600={photos[categoryIndex]["600"][index]}
            />

        );

    };

    getScrollerItem = (index, imageBgSrc) => {

        console.log("getItem");

        let style = {
            backgroundImage: 'url(' + imageBgSrc + ")",
            backgroundPosition: this._getBGPosition(index, 100)
        };

        return (

            <div
                className={this.classes.Wrapper}
                data-index={index}
            >
                <div
                    className={this.classes.Content}
                    data-index={index}
                    style={style}
                >

                </div>
            </div>

        );

    };

    getDescription = (photos, categoryIndex, photoIndex, wantTheSameButtonClickHandler) => {

        const desc = photos[categoryIndex].desc[photoIndex];

        return (

            <div className={this.classes.Description}>

                <h4 className={this.classes.Title}>{ desc.title }</h4>

                <p className={this.classes.Text}>
                    { desc.text }
                </p>

                <p className={this.classes.Price}>
                    Примерная стоимость: { desc.price }
                </p>

                <button className={this.classes.wantTheSameButton} onClick={wantTheSameButtonClickHandler} >Хочу такую.</button>

            </div>

        );

    };

    _getBGPosition = (index, offset) => {

        let multi = Math.floor(index / 3);

        return "-" + ((index - 3 * multi) * offset) + "px -" + offset * multi + 'px';

    };

}

export default PortfolioSliderView;