import React from 'react';
import classes from './FigureContent.module.scss';
import commonClasses from '../../../../../css/CommonClasses.module.scss';//CommonClasses.module.scss

import CategoryShowcase from '../../../../../component/CategoryShowcase/CategoryShowcase';
import OneCategorySlider from '../../../../Slider/OneCategorySlider/OneCategorySlider';


        
const figureContent = ({arrOfConditions, orderButtonClick, calcButtonClick, onWannaTheSameClick, onShowFullSizeSlider, photos}) => {


    //title, arrOfConditions, orderButtonClick, isCalcButton = false, calcButtonClick = null
    return (
        
        <div className={classes.FigureContent}>

            <CategoryShowcase
                title={"Ростовые фигуры."}
                arrOfConditions={arrOfConditions}
                orderButtonClick={() => {console.log("orderButtonClick");}}
                isCalcButton={true}
                calcButtonClick={() => {console.log("calcButtonClick");}}
            />

            <p className={commonClasses.Paragraph} style={{paddingTop: "10px", paddingBottom: "10px"}}>
                Ростовые фигуры представляют собой один из распространенных современных видов рекламных материалов. Они весьма наглядны и потому отлично служат, привлекая внимание к рекламируемым объектам. Можно сказать, что они выполняют сразу две функции: они не только содержат информацию, но и служат своеобразным указателем. 
            </p>

            <div className={classes.Slider}>
                <OneCategorySlider
                    items={photos}
                    onWannaTheSameClick={(photoIndex) => { console.log("OneCategorySlider onWannaTheSameClick", photoIndex); }}
                    onImageClick={(photoIndex) => { console.log("OneCategorySlider onImageClick", photoIndex); }}
                />
            </div>

            <h3 className={commonClasses.Title}>Изготовление по Вашему эскизу или наш дизайн.</h3>

            <p className={commonClasses.Paragraph}>
                Ростовые фигуры представляют собой один из распространенных современных видов рекламных материалов. Очень часто они изображают людей, животных либо различные предметы крупным планом. Они весьма наглядны и потому отлично служат, привлекая внимание к рекламируемым объектам. Можно сказать, что они выполняют сразу две функции: они не только содержат информацию, но и служат своеобразным указателем. 
            </p>

            <p className={commonClasses.Paragraph}>
                Ростовая фигура - великолепная возможность привлечь внимания а также развеселить гостей на празднике, выставке или презентации, создать иллюзию присутствия знаменитостей, а если Вы не любите (не хотите) фотографироваться с многочисленными гостями, то можно выставить и себя - "картонного". Рекламный указатель в виде фигуры.
            </p>

            <p className={commonClasses.Paragraph}>
                Ростовая фигура может комплектоваться лотком, либо карманом для буклетов. Возможно изготовление из картона на больших тиражах либо из древесного листового материала с закаткой пленкой. Отличное качество печати (интерьерный плоттер) позволяет использовать ростовые фигуры как привлекательный объект при оформлении магазинов, витрин, различных мероприятий, в таких случаях мимо них невозможно пройти. Наличие лотка под полиграфическую продукцию дает возможность качественного распространения рекламной продукции.
            </p>



        </div>
            
    );
};

export default figureContent;
        