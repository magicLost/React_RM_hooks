import {useState} from "react";


export const actions = {
    INIT: "INIT",
    POINTER_DOWN: "POINTER_DOWN",
    POINTER_MOVE: "POINTER_MOVE",
    POINTER_UP: "POINTER_UP",
    WINDOW_RESIZE: "WINDOW_RESIZE",
    ITEM_CLICK: "ITEM_CLICK"
}

export const useScroller = (ctrl) => {

    const [state, setState] = useState({

        controller: ctrl,
        translateX: 0,
        isNeedScroller: false,

        numberOfActiveItems: 0
    });

    state.controller.setState = setState;

    return [ state.controller, state.translateX, state.isNeedScroller, state.numberOfActiveItems ];

};