import React from 'react';
import classes from './PortfolioContent.module.scss';
import PortfolioSlider from "../../../../Slider/PortfolioSlider/PortfolioSlider";


import {categories, icons, photos} from "../../../../../data/portfolio_data";

const portfolioContent = ({showFeedBackFormHandler}) => {
    return (
        
        <div className={classes.PortfolioContent}>

            <PortfolioSlider
                categories={categories}
                icons={icons}
                photos={photos}
                showFeedBackFormHandler={showFeedBackFormHandler}
            />

        </div>
            
    );
};

export default portfolioContent;
        