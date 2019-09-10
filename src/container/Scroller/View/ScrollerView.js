import React from 'react';
//import {scrollerItemsType} from "../Scroller";


class ScrollerView {

    getItems = (items, getItem, itemRef, onItemClick, itemClass, numberOfActiveItems) => {

        //console.log("get scroller items");

        return items.map((value, index) => {

            //console.log("get scroller items", numberOfActiveItems, index);
            let isActive = ( index + 1 ) <= numberOfActiveItems;

            if(index === 0){

                return (
                    <li
                        key={itemClass + index}
                        className={itemClass}
                        ref={itemRef}
                        data-index={index}
                    >
                        { getItem(onItemClick, index, isActive) }
                    </li>
                );
    

            }else{

                return (
                    <li
                        key={itemClass + index}
                        className={itemClass}
                        data-index={index}
                    >
                        { getItem(onItemClick, index, isActive) }
                    </li>
                );
    

            }
            
        });

    };

}

export default ScrollerView;