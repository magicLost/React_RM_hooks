import React, {useState, useEffect, useMemo} from 'react';
import classes from './Header.module.scss';

import ControlsFeature, {type} from "../../../ControlsFeature/ControlsFeature";
import Logo from "../../../../component/UI/Logo/Logo";
import MenuButton from "../../../../component/UI/MenuButton/MenuButton";
import { formType } from '../../../ControlsFeature/Model/Config';

        
const Header = (
    {
        toolbarItems,
        toolBarItemClick,
        onShowMainMenu,
        activeSectionIndex,
        increaseSectionIndex,
        decreaseSectionIndex,
        showFeedBackFormButtonClickHandler
    }
) => {

    const [ isShow, setIsShow ] = useState(true);
    const [ previousY, setPreviousY ] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll, false);
    });

    useEffect(() => {
        return () => { window.removeEventListener('scroll', onWindowScroll, false); };
    });

    const onWindowScroll = (event) => {

        const y = document.body.getBoundingClientRect().y;

        //console.log("onWindowScroll - ", isShow, previousY);

        if(previousY > y){

            //console.log("Hide");
            if(isShow === true){
                setIsShow(false);
            }

        }else{

            //console.log("Show");
            if(isShow === false){
                setIsShow(true);
            }

        }

        setPreviousY(y);

    };

    const wrapperClasses = isShow ?
        [classes.Wrapper, classes.ShowHeader].join(' ') : [classes.Wrapper, classes.HideHeader].join(' ');

    const toolButtonsClass = isShow ?
        [ classes.ToolButtons, classes.ShowToolButtons].join(' ') : [ classes.ToolButtons, classes.HideToolButtons ].join(' ');

    return (
        
        <div className={classes.Header}>

            <div className={wrapperClasses}>

                <div className={classes.Logo}>

                    { useMemo(() => (
                        <Logo
                            isHomepage={true}
                        />
                    ), [])}

                </div>

                <div className={classes.Toolbar}>

                    {
                        useMemo(() => (
                            <ControlsFeature
                                itemClickHandler={toolBarItemClick}
                                items={toolbarItems}
                                configuration={{
                                    type: type.TEXT,
                                    formType: formType.BOTTOM_HALF_CIRCLE,
                                    isShowTitle: false,
                                    isMainItemText: false,
                                    mainDivStyle: { top: 0 },
                                    mainItemStyle: { backgroundColor: "white" }
                                }}
                            />
                        ), [])
                    }

                </div>

                <div className={classes.MainMenuButton}>

                    <MenuButton
                        onClick={onShowMainMenu}
                    />

                </div>

            </div>

            <div className={toolButtonsClass}>



            </div>

        </div>
            
    );
};

export default Header;
        