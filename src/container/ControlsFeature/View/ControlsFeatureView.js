import React from 'react';
import icons from './../../../static/icons/ICONS.svg';
import { type } from '../ControlsFeature';

class ControlsFeatureView {

    getBgStyle = (isShowItems) => {

        if(isShowItems) 
            return {
                transform: 'scale(10.5, 10.5)',
                opacity: 1,
            };

        return null;
    };

    getTitleElement = (isShowItems, title, titleStyle, isShowTitle, titleClass) => {

        if(isShowItems) 
            return this.getTitle(isShowItems, title, titleStyle, isShowTitle, titleClass);

        return null;

    };

    getTitle = (isShowItems, title, titleStyle, isShowTitle, titleClass) => {

        let finalTitleStyle = null;

        if(isShowItems && isShowTitle){
    
            finalTitleStyle = {...titleStyle};
    
            if(title !== ''){
    
                finalTitleStyle.opacity = 1;
                //title = this.state.title;
    
            }
    
            return (
    
                <div
                    style={finalTitleStyle}
                    className={titleClass}
                >
                    <p>{ title }</p>
                </div>
    
            );
    
        }
    
        return null;

    };

    getMainItem = (
        mainItemTouchMoveHandler,
        mainItemText, 
        mainItemsMouseDownHandler, 
        mainItemTouchStartHandler, 
        mainItemTouchEndHandler,
        
        classes,
        config
        ) => {

        let mainItemContent = '';
        let className = classes.ItemMain;
        let onTouchMove = config.isShowTitle ? mainItemTouchMoveHandler : null;

        if(config.isMainItemText === true){

            mainItemContent = mainItemText;
            className = classes.ItemMainText;

        }else{
            mainItemContent = (
                <svg
                    className={classes.Svg}
                    width="5"
                    height={"5"}
                >
                    <use  xlinkHref={ icons + "#more" }/>
                </svg>
            )
        }

        return (

            <div
                className={className}
                onMouseDown={mainItemsMouseDownHandler}
                onTouchStart={mainItemTouchStartHandler}
                onTouchEnd={mainItemTouchEndHandler}
                onTouchMove={onTouchMove}
                style={config.mainItemStyle}
            >
                { mainItemContent }
            </div>

        );

    };

    getItems = ( 
        items, 
        isShowItems, 
        itemMouseEnter, 
        itemMouseLeave, 
        itemMouseUpHandler,

        classes,
        config,

        itemsLength,
        degreesAll,
        itemsLengthForDegreesCalc,
        degreesMarga,
        radius,

        getDegrees,
        getTranslateByCircle
        ) => {
    
        let itemClass = classes.Item;
        let style = null;
    
        let onMouseEnter = null;
        let onMouseLeave = null;
    
        if(config.type === type.TEXT){
            itemClass = classes.ItemText;
        }
    
        if(isShowItems && config.isShowTitle){
    
            onMouseEnter = itemMouseEnter;
            onMouseLeave = itemMouseLeave;
    
        }
    
        
    
        return items.map((value, index) => {
    
            
            if(isShowItems){
    
                //index, ttype, fformType, itemsLength, degreesAll, itemsLengthForDegreesCalc, degreesMarga
                let degrees = getDegrees(
                    index,
                    config.type,
                    config.formType,
                    itemsLength,
                    degreesAll,
                    itemsLengthForDegreesCalc,
                    degreesMarga
                );
    
                //radius, degrees
                let translate = getTranslateByCircle(radius, degrees);
    
                //console.log("translate ", translate);
    
                style = { transform: translate, opacity: 1 };
                //style.boxShadow = "0 10px 18px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22)";
                style.boxShadow = "0 1px 5px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)";
    
            }
    
            
    
            if(config.type === type.TEXT){
    
                return this.getTextItem(itemClass, classes.Label, value, index, style, onMouseEnter, onMouseLeave, itemMouseUpHandler);
            }else{
    
                return this.getSvgItem(itemClass, classes.ItemSvg, value, index, style, onMouseEnter, onMouseLeave, itemMouseUpHandler);
    
            }
    
        });
    
    };

    getTextItem = (itemClass, labelClass, value, index, style, onMouseEnter, onMouseLeave, itemMouseUpHandler) => (

        <div
            key={itemClass + index}
            className={itemClass}
    
            data-feature-name={value}
            data-feature-index={index}
    
            onMouseUp={itemMouseUpHandler}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
    
            style={style}
        >
            <p
                data-feature-name={value}
                data-feature-index={index}
                className={labelClass}
            >
                {value}
            </p>
    
        </div>
    );
    
    getSvgItem = (itemClass, itemSvgClass, value, index, style, onMouseEnter, onMouseLeave, itemMouseUpHandler) => (
    
        <div
            key={itemClass + index}
            className={itemClass}
    
            data-feature-name={value.title}
            data-feature-index={index}
    
            onMouseUp={itemMouseUpHandler}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
    
            style={style}
        >
            <svg
                className={itemSvgClass}
                width="5"
                height={"5"}
                data-feature-name={value.title}
                data-feature-index={index}
            >
                <use data-feature-index={index} data-feature-name={value.title}  xlinkHref={icons + value.href}/>
            </svg>
        </div>
    
    ); 

}

export default ControlsFeatureView;