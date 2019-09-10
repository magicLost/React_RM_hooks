import React from 'react';
import classes from './OneCategorySlider.module.scss';
import Scroller from './../../Scroller/Scroller';
import CardWithImage from '../../../component/CardWithImage/CardWithImage';

        
const oneCategorySlider = ({items, onWannaTheSameClick, onImageClick}) => {

    const getScrollerItem = (onItemClick, index, isActive) => {

        //console.log("getScrollerItem", index, isActive);

        return (

            <CardWithImage 
                src={items[300][index]} 
                onButtonClick={onItemClick} 
                onImageClick={onItemClick}
                desc={items.desc[index]}
                isActive={isActive}
                index={index}
            />

        );

    };

    //items, getItem, itemRef, onItemClick, itemClass, numberOfActiveItems
    const getScrollerItems = (itemRef, itemClass, onItemClick, numberOfActiveItems) => {

        return items.map((value, index) => {

            //console.log("get scroller items", numberOfActiveItems, index);
            let isActive = ( index + 1 ) <= numberOfActiveItems;

            return (
                <li
                    key={itemClass + index}
                    className={itemClass}
                    ref={ index === 0 ? itemRef : null}
                    data-index={index}
                >
                    <CardWithImage 
                        src={items[300][index]} 
                        onButtonClick={onItemClick} 
                        onImageClick={onItemClick}
                        desc={items.desc[index]}
                        isActive={isActive}
                        index={index}
                    />

                </li>
            );
            
        });

    };
 
    const onScrollerItemClick = (target) => {

        //console.log(target);
        let index = 0;

        if(target.dataset && target.dataset.index){
            index = parseInt(target.dataset.index);
        }else{
            console.error("No data index");
        }

        if(target.tagName === "IMG"){
            onImageClick(index);
        }else{
            onWannaTheSameClick(index);
        }

    };

    return (
        
        <div className={classes.OneCategorySlider}>

                <Scroller
                    items={items[300]}
                    getItem={getScrollerItem}
                    itemClickHandler={onScrollerItemClick}
                />

        </div>
            
    );

};

export default oneCategorySlider;
        