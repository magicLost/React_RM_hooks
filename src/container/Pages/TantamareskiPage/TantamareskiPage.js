import React, {useMemo} from 'react';
//import classes from './TantamareskiPage.module.scss';
import classes from '../Homepage/Homepage.module.scss';

import commonClasses from '../../../css/CommonClasses.module.scss';//CommonClasses.module.scss

import {icons, photos} from "../../../data/portfolio_data";

import Modal from "../../../component/Modal/Modal";
import CallMe from "../../Forms/CallMe/CallMe";
import Header from "../Partial/Header/Header";
import Contacts from "../Partial/Contacts/Contacts";

import {usePage} from "../../../hooks/Page/page";

import PageController from "./../AbstractPage/PageController";
import ClassesManager from "./../AbstractPage/Model/ClassesManager";

import { tantamareskiConditions, price, toolbarItemsArray, figureConditions } from '../../../data/tantamareski_data';
import FigureContent from './Content/FigureContent/FigureContent';
import TantamareskiContent from './Content/TantamareskiContent/TantamareskiContent';
import FullSizeSlider from '../../Slider/FullSizeSlider/FullSizeSlider';

        
const TantamareskiPage = ({}) => {

    /*HOOKS*/
    const [controller, activeSectionIndex, isShowForm, formType, hiddenFields, isShowSlider] = usePage(
        new PageController(
            new ClassesManager({...classes, ...commonClasses}),
            toolbarItemsArray.length, 
            1, 0
    ));

    return (
        
        <div className={classes.Homepage}>

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
                        <FigureContent
                            arrOfConditions={figureConditions}
                            photos={photos[2]}
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
        
                                <TantamareskiContent />
        
                            </section>
                        );
                    }else{
                        return null;
                    }
                }, [controller.created[0], activeSectionIndex]) }

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

                }, [controller.created[0], activeSectionIndex]) }

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

            { useMemo(() => (
                <Modal
                    show={isShowSlider}
                    backdropClickHandler={controller.onHideSlider}
                >

                    <button className={classes.closeSliderButton}>Close</button>

                    <FullSizeSlider
                        categoryInd={2}
                        icons={icons}
                        photos={photos}
                        showFeedBackFormHandler={controller.onShowCallMeWithSampleForm}
                    />

                </Modal>
            ), [isShowSlider])}


        </div>
            
    );
};

export default TantamareskiPage;
        