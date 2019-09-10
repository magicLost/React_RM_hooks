import React, {useState, useMemo} from 'react';
import classes from './Homepage.module.scss';
import commonClasses from './../../../../css/CommonClasses.module.scss';

//import Button, {button_type} from "../../../component/UI/Button/Button";
import Modal from "../../../component/Modal/Modal";
import CallMe from "../../Forms/CallMe/CallMe";
import Header from "../Partial/Header/Header";
import MainContent from "./Content/MainContent/MainContent";
import { toolbarItemsArray, mainPresentationItems, mainPresentationItemsControls} from "../../../data/homepage_data";
//import {usePage} from "../../../hooks/page";
//import {form_type} from "../../../data/forms";
import Contacts from "../Partial/Contacts/Contacts";

//import PageHelper from '../../../hooks/Page/PageHelper';
import {usePage} from "../../../hooks/Page/page";

import PageController from "./../AbstractPage/PageController";
import ClassesManager from "./../AbstractPage/Model/ClassesManager";
import PortfolioContent from "./Content/PortfolioContent/PortfolioContent";


const Homepage = () => {

    /*HOOKS*/
    const [controller, activeSectionIndex, isShowForm, formType, hiddenFields] = usePage(
        new PageController(
            new ClassesManager({...classes, ...commonClasses}),
            toolbarItemsArray.length, 
            1, 0
    ));
    
    /*RENDER*/

    console.log("render homepage", controller, activeSectionIndex, isShowForm, formType, hiddenFields);

    return (
        
        <div className={classes.Homepage}>

           {/* <br />
            <hr />
            <br />

            <div style={{textAlign: 'center'}}>
                <Button type={button_type.CONTAINED} label={"Show form"} onClick={onShowCallMeForm}/>
            </div>*/}
            
            <header>
                
                { useMemo(() => (
                    <Header
                        toolbarItems={toolbarItemsArray}
                        toolBarItemClick={controller.onSetActiveIndex}
                        onShowMainMenu={() => {console.log("onShowMainMenu");}}
                        activeSectionIndex={activeSectionIndex}
                        increaseSectionIndex={controller.onIncreaseActiveIndex}
                        decreaseSectionIndex={controller.onDecreaseActiveIndex}
                        showFeedBackFormButtonClickHandler={() => {console.log("showFeedBackFormButtonClickHandler");}}
                    />
                ), [activeSectionIndex])}

            </header>

            <main>
                <section
                    className={controller.getMainSectionClasses()}
                    style={(activeSectionIndex !== 1) ? { display: 'none'} : null}
                >
                    { useMemo(() => (
                        <MainContent
                            mainPresentationItems={mainPresentationItems}
                            mainPresentationItemsControls={mainPresentationItemsControls}
                        />
                    ), []) }
                </section>

                { useMemo(() => {
                    if(controller.created[0]){
                        return (
                            <section
                                className={controller.getLeftSectionClasses()}
                                style={(activeSectionIndex !== 0) ? { display: 'none'} : null}
                            >
        
                                <PortfolioContent
                                    showFeedBackFormHandler={controller.onShowCallMeWithSampleForm}
                                />
        
        
                            </section>
                        );
                    }else{
                        return null;
                    }
                }, [controller.created[0], activeSectionIndex]) }

               {/*  { controller.created[0] &&
                    <section
                        className={controller.getLeftSectionClasses()}
                        style={(activeSectionIndex !== 0) ? { display: 'none'} : null}
                    >

                        <PortfolioContent
                            showFeedBackFormHandler={controller.onShowCallMeWithSampleForm}
                        />


                    </section>
                } */}

            </main>

            <footer>
                
            { useMemo(() => {

                    if(controller.created[2]){
                        return (
                            <div
                                className={controller.getContactsSectionClasses()}
                                style={(activeSectionIndex !== 2) ? { display: 'none'} : null}
                            >

                                <Contacts/>

                            </div>
                        );
                    }else{
                        return null;
                    }
                }, [controller.created[0], activeSectionIndex]) 
            }

            </footer>

            { useMemo(() => (
                <Modal
                    show={isShowForm}
                    backdropClickHandler={controller.onHideForm}
                >

                    <CallMe
                        url={"http://public.local"}
                        successOKButtonClickHandler={controller.onHideForm}
                        hiddenFields={hiddenFields}
                    />

                </Modal>
            ), [isShowForm])}

        </div>
            
    );
};

export default Homepage;
        