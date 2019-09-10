
class ShowContentHelper {

    numberOfActiveItems = 0;

    init = (listWidth, itemWidth) => {

        this.calcNumberOfActiveItems(listWidth, itemWidth, 0, 0);

    };

    onPointerMove = (listWidth, itemWidth, translateX, numberOfActiveItems, itemsLength) => {

        this.calcNumberOfActiveItems(listWidth, itemWidth, translateX, numberOfActiveItems, itemsLength);
    };

    onPointerUp = (listWidth, itemWidth, translateX, numberOfActiveItems, itemsLength) => {

        this.calcNumberOfActiveItems(listWidth, itemWidth, translateX, numberOfActiveItems, itemsLength);

    };
 
    /* initNumberOfActiveItems = (listWidth, itemWidth) => {

        return Math.ceil(listWidth / itemWidth) + 1;

    }; */

    calcNumberOfActiveItems = (listWidth, itemWidth, translateX, numberOfActiveItems, itemsLength) => {

        //console.log("calcNumberOfActiveItems", translateX, itemWidth, listWidth);
        if(this.numberOfActiveItems >= itemsLength) return;

        const newNumberOfActiveItems = Math.ceil((listWidth + Math.abs(translateX)) / itemWidth);

        this.numberOfActiveItems = newNumberOfActiveItems <= numberOfActiveItems ? numberOfActiveItems : newNumberOfActiveItems;

    };

    /* calcIncreaseNumberOfActiveItems = (translateX, itemWidth) => {

        return Math.floor(Math.abs(translateX / itemWidth));

    }; */

}

export default ShowContentHelper;

