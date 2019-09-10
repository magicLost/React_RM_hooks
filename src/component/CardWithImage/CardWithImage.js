import React from 'react';
import classes from './CardWithImage.module.scss';
import Button, {button_type} from '../UI/Button/Button';
import ImgOnLoad from '../UI/ImgOnLoad/ImgOnLoad';


/* <picture>

    <source media="(min-width: 700px)" srcSet={src600} />

    <img src={src300}  alt="Пример нашей работы" />

 </picture> */

//alt, isActive, src
const cardWithImage = ({desc, onButtonClick, onImageClick, src, isActive, index = 0}) => {

    return (
        
        <div className={classes.CardWithImage}>

            <div className={classes.Image} >

                <ImgOnLoad index={index} alt={"Пример нашей работы"} onImageClick={onImageClick} isActive={isActive} src={src} />

            </div>

            <div className={classes.Content}>

                <div className={classes.Desc}>
                    <p>{desc.text}</p>
                </div>

                <div className={classes.Price}>
                    Примерная цена: {desc.price}.
                </div>

                <div className={classes.Actions}>

                    <Button index={index} type={button_type.TEXT} label={"Хочу такую."} onClick={onButtonClick} />

                </div>

            </div>

        </div>
            
    );

};

export default cardWithImage;
        