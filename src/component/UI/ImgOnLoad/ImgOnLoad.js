import React, {useState, useRef, useEffect} from 'react';
import classes from './ImgOnLoad.module.scss';
import Spinner from './../Spinner/Spinner';
        
/* srcSets = [
    { media: "(min-width: 700px)", srcSet: '/path' }
] */

//<source media="(min-width: 700px)" srcSet={src600} />

/* WE MUST SET THIS TO WRAPPER DIV WITH WIDTH AND HEIGHT ATTRIBUTES */

const ImgOnLoad = ({ alt, isActive, src, onImageClick, index = 0, srcSets = []}) => {

    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);

    let image = null;
    let spinner = null;


    const onLoad = () => {

        console.log("Load Image");
        setIsLoad(true);

    };

    const onError = () => {

        console.log("Error Image");
        setIsError(true);

    };

    const getSpinner = () => {

        return (
            <div className={classes.Spinner}>
                <Spinner />
            </div>
        )

    }

    const getImageWithSrcSet = () => {

        const sources = srcSets.map((value, index) => {

            return (
                <source key={value.srcSet + index} media={value.media} srcSet={value.srcSet} />
            );

        });

        const image = getImageTag();

        return (
    
            <picture>

                { sources }

                { image }

            </picture>

        );

    }

    const getImageTag = () => {

        return <img data-index={index} onClick={onImageClick}  style={{visibility: isLoad ? 'visible' : 'hidden'}} onLoad={onLoad} onError={onError} src={src}  alt={alt} />;

    }
    
    
    if(isActive === true){

        if(isError){

            image = <p>Oppps....</p>;

        }else{

            if(srcSets.length > 0){

                image = getImageWithSrcSet();
        
            }else{
        
                image = getImageTag();
            
            }

            spinner = isLoad ? null : getSpinner();

        }
        
    }    

    return (

        <div className={classes.ImgOnLoad}>

            { image }
            { spinner }

        </div>

    );

};

export default ImgOnLoad;
        