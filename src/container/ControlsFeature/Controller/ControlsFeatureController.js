import {getDegrees, getTranslateByCircle} from './../Model/CalcDegrees';
import { type } from '../ControlsFeature';


class ControlsFeatureController {

    config = null;
    view = null;

    itemClickHandler;
    items;

    setState = null;

    constructor(config, view, items, itemClickHandler){

        this.config = config;
        this.view = view;

        this.items = items;
        this.itemClickHandler = itemClickHandler;

    }

    /*LISTENERS */
    onMainItemMouseDown = (event) => {
        
        event.stopPropagation();
        event.preventDefault();

        window.addEventListener('mouseup', this.onWindowMouseUp, false);

        this.setState((prevState) => {

            if(!prevState.isShowItems){

                return { ...prevState, isShowItems: true };
        
            }
        
            return prevState;

        })

    };

    onItemPointerUp = (target) => {

        this.setState((prevState) => {

            if(prevState.isShowItems){

                let index = -1;
                let mainItemText = '';
        
                if(target && target.dataset && target.dataset.featureIndex){
        
                    index = parseInt(target.dataset.featureIndex);
                    //console.log(target, target.dataset.featureIndex);
                    //console.log("call this.props.setActiveCarouselIndex with index == " + index);
                    if(this.itemClickHandler){

                        //console.log("Controls feature itemClickHandler", index);
                        this.itemClickHandler(index);

                    }
                    
                }
        
                if(this.config.config.isMainItemText && this.config.config.type === type.TEXT){
        
                    mainItemText = (index >= 0) ? this.items[index] : prevState.mainItemText;
        
                }
        
                return {
                    ...prevState,
                    isShowItems: false,
                    mainItemText: mainItemText,
                    title: ''
                }
        
            }
        
            return prevState;

        });

    };

    onMainItemTouchStart = (event) => {

        event.preventDefault();
        event.stopPropagation();
        
        this.setState((prevState) => {

            if(!prevState.isShowItems){

                return { ...prevState, isShowItems: true };
        
            }
        
            return prevState;

        })

    };

    onMainItemTouchMove = (event) => {

        event.preventDefault();
        event.stopPropagation();
    
        const touch = event.changedTouches[0];

        const target = document.elementFromPoint(touch.clientX, touch.clientY);

        this.setState((prevState) => {

            if(prevState.isShowItems){

                if(target && target.dataset && target.dataset.featureName){
        
                    //console.log("call this.props.setActiveCarouselIndex with index == " + target.dataset.index);
        
                    const name = target.dataset.featureName;
        
                    if(prevState.title !== name){
                        return {...prevState, title: name};
                    }
        
                }else{
        
                    if(prevState.title !== ''){
                        return {...prevState, title: ''};
                    }
        
                }
        
            }
        
            return prevState;

        })

    };

    onMainItemTouchEnd = (event) => {

        event.stopPropagation();
        event.preventDefault();

        const touch = event.changedTouches[0];

        const target = document.elementFromPoint(touch.clientX, touch.clientY);

        this.onItemPointerUp(target);

    };

    onItemMouseUp = (event) => {

        event.preventDefault();
        event.stopPropagation();

        window.removeEventListener('mouseup', this.onWindowMouseUp, false);

        this.onItemPointerUp(event.target);

    };

    onItemMouseEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const target = event.target;

        this.setState((prevState) => {

            if(target.dataset && target.dataset.featureName){

                const name = target.dataset.featureName;
        
                if(prevState.title !== name)
                    return {...prevState, title: name};
                
            }else{
        
                console.error("No control feature item name");
        
            }
        
            return prevState;

        });
    };

    onItemMouseLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState((prevState) => {

            if(prevState.title !== ''){

                return {...prevState, title: ''};
                
            }
        
            return prevState;

        });

    };

    onWindowMouseUp = (event) => {
        event.stopPropagation();
        event.preventDefault();

        window.removeEventListener('mouseup', this.onWindowMouseUp, false);

        this.setState((prevState) => {

            if(prevState.isShowItems){

                return { ...prevState, isShowItems: false, title: '' };
        
            }
        
            return prevState;

        });
    };


    /*RENDER */
    getBgStyle = (isShowItems) => {

        return this.view.getBgStyle(isShowItems);

    };

    getTitleElement = (isShowItems, title) => {

        return this.view.getTitleElement(
            isShowItems, 
            title, 
            this.config.titleStyle, 
            this.config.config.isShowTitle, 
            this.config.classes.Title);

    };

    getMainItem = ( mainItemText ) => {

        return this.view.getMainItem(
            this.onMainItemTouchMove,
            mainItemText, 
            this.onMainItemMouseDown, 
            this.onMainItemTouchStart, 
            this.onMainItemTouchEnd,
            
            this.config.classes,
            this.config.config
        );

    };

    getItems = ( 
        isShowItems
    ) => {

        return this.view.getItems(
            this.items, 
            isShowItems, 
            this.onItemMouseEnter, 
            this.onItemMouseLeave, 
            this.onItemMouseUp,

            this.config.classes,
            this.config.config,

            this.config.itemsLength,
            this.config.degreesAll,
            this.config.itemsLengthForDegreesCalc,
            this.config.degreesMarga,
            this.config.radius,

            getDegrees,
            getTranslateByCircle
        );

    };

}

export default ControlsFeatureController;