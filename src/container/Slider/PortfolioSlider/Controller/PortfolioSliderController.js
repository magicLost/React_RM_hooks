import {actions} from "../../../../hooks/PortfolioSlider/portfolioSlider";

class PortfolioSliderController {

    //setState = null;
    dispatch = null;

    photos = null;

    //view = null;

    //showFeedBackFormHandler = null;

   /* controlsFeatureConfig = {
        mainDivStyle: { top: '30px' },
        mainItemStyle: { backgroundColor: "#fff" }
    };*/



    constructor(){

        //this.view = view;

    }

    /* ACTION CREATORS */
    onDecreasePhotoIndexAC = (state, action) => {

        if(state.photoIndex === 0)
            return state;

        return { ...state, photoIndex: state.photoIndex - 1 };

    };

    onIncreasePhotoIndexAC = (state, action) => {

        if(state.photoIndex === this.photos[state.categoryIndex]["300"].length - 1)
            return state;

        return { ...state, photoIndex: state.photoIndex + 1 };

    };

    onSetCategoryIndexAC = (state, action) => {

        if(state.categoryIndex === action.index)
            return state;

        return {
            ...state,
            categoryIndex: action.index,
            photoIndex: 0
        };

    };

    onScrollerItemClickAC = (state, action) => {

        if(state.photoIndex === action.index)
            return state;

        return { ...state, photoIndex: action.index };

    };

    onSetCategoryIndex = (index) => {

        this.dispatch({type: actions.SET_CATEGORY_INDEX, index: index});

    };

    onDecreasePhotoIndex = () => {

        this.dispatch({type: actions.DECREASE_PHOTO_INDEX});

    };

    onIncreasePhotoIndex = () => {

        this.dispatch({type: actions.INCREASE_PHOTO_INDEX});

    };

    onScrollerItemClick = (target) => {

        if(target && target.dataset && target.dataset.index)
            this.dispatch({type: actions.SCROLLER_ITEM_CLICK, index: parseInt(target.dataset.index)});

    };

     /* RENDER */
    /* getCarouselItem = (index, activeIndex, photos, categoryIndex) => {

        this.view.getCarouselItem(index, activeIndex, photos, categoryIndex);

    };

    getScrollerItem = (index, imageBgSrc) => {

        this.view.getScrollerItem(index, imageBgSrc);

    };

    getDescription = (photos, categoryIndex, photoIndex) => {

        this.view.getDescription(photos, categoryIndex, photoIndex, this.wantTheSameButtonClickHandler);

    }; */

    /*onWantTheSameButtonClickAC = (state, action) => {

        const id = action.photos[state.categoryIndex].desc[state.photoIndex].id;

        this.showFeedBackFormHandler(
            [
                { name: "photoId", value: id }
            ]
        );

        return state;

    };

    onWantTheSameButtonClick = (event) => {

        event.stopPropagation();
        event.preventDefault();

        this.dispatch({type: actions.WANT_THE_SAME_BUTTON_CLICK, photos: this.photos })

    };*/



    /* CATEGORY INDEX */
   /* setCategoryIndex = (index) => {

        this.dispatch({type: actions.SET_CATEGORY_INDEX, index: index});

        /!*this.setState((prevState) => {

            if(prevState.categoryIndex === index)
                return prevState;

            return {
                categoryIndex: index,
                photoIndex: 0
            };

        })*!/

    };



    /!* PHOTO INDEX *!/
    decreasePhotoIndex = () => {

        this.setState((prevState) => {

            if(prevState.photoIndex === 0)
                return prevState;

            return { photoIndex: prevState.photoIndex - 1 };

        })

    };

    increasePhotoIndex = () => {

        this.setState((prevState) => {

            if(prevState.photoIndex === this.props.photos[this.state.categoryIndex]["300"].length - 1)
                return prevState;

            return { photoIndex: prevState.photoIndex + 1 };

        })

    };

    scrollerItemClickHandler = (index) => {

        //console.log("scrollerItemClickHandler == " + event.target.dataset.index);

        this.setState((prevState) => {

            if(prevState.photoIndex === index)
                return prevState;

            return { photoIndex: index };

        })

    };

    wantTheSameButtonClickHandler = (event) => {

        event.stopPropagation();
        event.preventDefault();

        const id = this.props.photos[this.state.categoryIndex].desc[this.state.photoIndex].id;

        this.showFeedBackFormHandler(
            [
                { name: "photoId", value: id }
            ]
        );

    };*/


}

export default PortfolioSliderController;