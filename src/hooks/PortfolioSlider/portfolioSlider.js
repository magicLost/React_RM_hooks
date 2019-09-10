import { useState, useReducer } from 'react';

/*
export const usePortfolioSlider = (ctrl) => {

    const [ state, setState ] = useState({

        controller: ctrl,

        categoryIndex: 0,
        photoIndex: 0,
        descriptionId: 0,

    });

    state.controller.setState = setState;

    return [ state.controller, state.categoryIndex, state.photoIndex, state.descriptionId ];

};*/

export const actions = {

    SET_CATEGORY_INDEX: "SET_CATEGORY_INDEX",
    DECREASE_PHOTO_INDEX: "DECREASE_PHOTO_INDEX",
    INCREASE_PHOTO_INDEX: "INCREASE_PHOTO_INDEX",
    SCROLLER_ITEM_CLICK: "SCROLLER_ITEM_CLICK"

};

export const usePortfolioSlider = (ctrl, categoryIndex = 0, photoIndex = 0) => {

    const reducer = (state, action) => {

        //console.log("STATE", state);
        //console.log("ACTION", action);

        switch(action.type){

            case actions.SET_CATEGORY_INDEX: return state.controller.onSetCategoryIndexAC(state, action);
            case actions.DECREASE_PHOTO_INDEX: return state.controller.onDecreasePhotoIndexAC(state, action);
            case actions.INCREASE_PHOTO_INDEX: return state.controller.onIncreasePhotoIndexAC(state, action);
            case actions.SCROLLER_ITEM_CLICK: return state.controller.onScrollerItemClickAC(state, action);

            default: return state;
        }

    };

    const [ state, dispatch ] = useReducer(reducer, {

        controller: ctrl,

        categoryIndex: categoryIndex,
        photoIndex: photoIndex,
        //descriptionId: 0,

    });

    state.controller.dispatch = dispatch;

    return [ state.controller, state.categoryIndex, state.photoIndex ];

};