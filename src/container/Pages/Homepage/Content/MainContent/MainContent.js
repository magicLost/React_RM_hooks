import React from 'react';
import classes from './MainContent.module.scss';
import {clients, mainText} from "../../../../../data/homepage_data";
import MainPresentation from "../../../../MainPresentation/MainPresentation";
import ListSvg, {svgType} from "../../../../../component/UI/ListSvg/ListSvg";
import RenderHtmlFromText from "../../../../../component/RenderHtmlFromText/RenderHtmlFromText";



const mainContent = ({mainPresentationItems, mainPresentationItemsControls }) => {
    return (
        
        <div className={classes.MainContent}>

            <MainPresentation
                carouselItems={mainPresentationItems}
                carouselControlItems={mainPresentationItemsControls}
            />

            <RenderHtmlFromText items={mainText}/>

            <div className={classes.Clients}>
                <ListSvg title={"Наши клиенты"} items={clients} typeSvg={svgType.CLIENTS} />
            </div>

        </div>
            
    );
};

export default mainContent;
        