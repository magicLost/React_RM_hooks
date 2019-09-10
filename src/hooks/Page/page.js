import {useState} from "react";


export const usePage = (ctrl) => {

    const [state, setState] = useState({

        controller: ctrl,

        activeSectionIndex: ctrl.activeIndex,

        //FORMS
        isShowForm: false,
        formType: '',
        hiddenFields: [], // [{}, {}]

        //SLIDER
        isShowSlider: false

    });

    state.controller.setState = setState;

    return [ state.controller, state.activeSectionIndex, state.isShowForm, state.formType, state.hiddenFields, state.isShowSlider ];

}
