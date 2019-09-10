import {useState} from 'react';


export const useControlsFeature = (helper) => {

    const [state, setState] = useState({

        helper: helper,

        isShowItems: false,
        title: '',
        mainItemText: 'Главное'
    });

    state.helper.setState = setState;

    return [ state.helper, state.isShowItems, state.title, state.mainItemText ];

};