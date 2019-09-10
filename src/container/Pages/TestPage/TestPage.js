import React, {useState} from 'react';
import classes from './TestPage.module.scss';
//import CardWithImage from '../../../component/CardWithImage/CardWithImage';
import OneCategorySlider from '../../Slider/OneCategorySlider/OneCategorySlider';
import ImgOnLoad from '../../../component/UI/ImgOnLoad/ImgOnLoad';
import photo from '../../../static/sample-works/auto/600/auto1_600.jpg';
import FullSizeSlider from '../../Slider/FullSizeSlider/FullSizeSlider';

import {icons, photos} from "../../../data/portfolio_data";
import PortfolioContent from '../Homepage/Content/PortfolioContent/PortfolioContent';
import Modal from '../../../component/Modal/Modal';
import CardWithImage from '../../../component/CardWithImage/CardWithImage';

import {useOne, useTwo} from "./../../../hooks/test";


const TestPage = () => {

    const [counter , setCounter] = useOne();
    const [shit , setShit] = useTwo();

    /* const [isShow, setIsShow] = useState(false);

    const toggleImg = () => {

        setIsShow(!isShow);

    }; */

    const showFeedBackFormHandler = () => {

        console.log("showFeedBackFormHandler");

    };

    const onClick = () => {

        setCounter(counter + 1);

        let newShit = shit;
        for(let i = 0; i < 30; i++){
            newShit += 3;
        }
        setShit(newShit);

    }

    console.log("TestPage render");

    return (
        
        <div className={classes.TestPage} style={{textAlign: 'center'}}>

            <p>useOne = {counter}</p>

            <p>useTwo = {shit}</p>

            <button onClick={onClick}>Update</button>

           {/*  <h3 className={classes.Title}>Test page</h3>

            <OneCategorySlider
                items={photos[0]}
                onWannaTheSameClick={() => { console.log("OneCategorySlider onWannaTheSameClick"); }}
            />

            <br />
            <hr />
            <br />

            <button onClick={toggleImg}>ToggleImg</button>
            
            { isShow && 
                <div className={classes.Img}>
                    <ImgOnLoad 
                        alt={"Were we belong..."}
                        isActive={true}
                        src={photo} 
                    />
                </div>
            } */}

           {/*  <CardWithImage 
                src={photo} 
                onButtonClick={() => {console.log("button click")}} 
                onImageClick={() => {console.log("image click")}}
                desc={{desc: "hello", price: 12}}
                isActive={true}
            /> */}

            {/* <div className={classes.Img}>
                <ImgOnLoad 
                    alt={"Were we belong..."}
                    isActive={true}
                    src={photo} 
                    onImageClick={() => {console.log("image click")}}
                />
            </div> */}

        {/*     <FullSizeSlider
                categoryInd={0}
                icons={icons}
                photos={photos}
                showFeedBackFormHandler={showFeedBackFormHandler}
            />

            <Modal
                show={true}
                backdropClickHandler={() => {}}
            >

                <h1>Second Modal</h1>

            </Modal>

            <Modal
                show={true}
                backdropClickHandler={() => {}}
            >

                <h1>First Modal</h1>

            </Modal> */}

            

           {/*  <PortfolioContent
                showFeedBackFormHandler={showFeedBackFormHandler}
            /> */}

        </div>
            
    );


};

export default TestPage;
        