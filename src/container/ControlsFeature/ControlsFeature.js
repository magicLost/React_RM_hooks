import React from 'react';
import classes from './ControlsFeature.module.scss';
import { useControlsFeature, actions } from '../../hooks/ControlsFeature/controlsFeature';
import ControlsFeatureController from './Controller/ControlsFeatureController';
import Config from './Model/Config';
import ControlsFeatureView from './View/ControlsFeatureView';

//import FeatureConfig from './Helper/FeatureConfig';


//import { getMainItem, getTitle, getItems } from './Helper/render';

//import icons from "./../../static/icons/ICONS.svg";



export const type = {

    TEXT: "TEXT",
    SVG: "SVG"

};
        
/* configuration={{
    type: type.TEXT,
    formType: formType.BOTTOM_HALF_CIRCLE,
    isShowTitle: false,
    isMainItemText: false,
    mainDivStyle: { top: 0 },
    mainItemStyle: { backgroundColor: "white" }
}} */
const ControlsFeature = ({items, itemClickHandler,  configuration}) => {

    //type, itemsLength, topRightClass, topLeftClass, bottomRightClass, bottomLeftClass, hiddenClass
    const [ controller, isShowItems, title, mainItemText] = 
        useControlsFeature(new ControlsFeatureController(
            new Config(items.length, classes, configuration),
            new ControlsFeatureView(),
            items,
            itemClickHandler  
        ));


    let titleElement = controller.getTitleElement(isShowItems, title);
    let bgStyle = controller.getBgStyle(isShowItems);

    //
    const mainItem = controller.getMainItem(mainItemText);

    const itemsElements = controller.getItems(isShowItems);

    console.log("render ControlFeature ", controller, isShowItems, title, mainItemText);

    return (
        
        <div className={classes.ControlsFeature} style={configuration.mainDivStyle}>

        { titleElement }

        <div
            className={classes.ItemBG}
            style={bgStyle}
        >
            <div className={controller.config.topLeftBgClasses}> </div>
            <div  className={controller.config.topRightBgClasses}> </div>
            <div  className={controller.config.bottomLeftBgClasses}> </div>
            <div  className={controller.config.bottomRightBgClasses}> </div>
        </div>

        { itemsElements }

        { mainItem }

        </div>
            
    );
};

export default ControlsFeature;
        