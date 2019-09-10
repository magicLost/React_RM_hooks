import React from 'react';
import classes from './CategoryShowcase.module.scss';
import Button, {button_type} from '../UI/Button/Button';
import iconsHref from "../../static/icons/ICONS.svg";
        
const arrOfConditions = [
    { label: 'Цена от 900р.', hrefId: "#price" },
]

const categoryShowcase = ({title, arrOfConditions, orderButtonClick, isCalcButton = false, calcButtonClick = null}) => {

    const conditions = arrOfConditions.map((value, index) => {

        return (

            <li key={classes.Condition + index} className={classes.Condition}>
                <svg className={classes.Svg} width={"10"} height={"10"} viewBox={"0 0 1024 1024"}>
                    <use xlinkHref={iconsHref + value.hrefId} />
                </svg>
                <p className={classes.Paragraph}>{ value.label }</p>
            </li>

        )

    });


    return (
        
        <div className={classes.CategoryShowcase}>

            <div className={classes.Wrapper}>

                <h3 className={classes.Title}>{title}</h3>

                <ul className={classes.Conditions}>

                    { conditions }

                </ul>

                <div className={classes.Buttons}>

                    <Button label={"Заказать"} type={button_type.TEXT} onClick={orderButtonClick} />

                    { isCalcButton && 
                        <Button label={"Рассчитать стоимость"} type={button_type.TEXT} onClick={calcButtonClick} /> }

                </div>

            </div>

        </div>
            
    );

};

export default categoryShowcase;