
class CastTranslateXToOpacity{

    bodyWidth = 0;
    //multiplier = 0;

    onPointerDown = () => {

        this.bodyWidth = document.documentElement.clientWidth;

    };

    calcOpacityByTranslateX = (translateX) => {

        //console.log("calcOpacityByTranslateX", translateX, this.bodyWidth, Math.abs(translateX / this.bodyWidth));
        return 1 - Math.abs(translateX / this.bodyWidth);

    }

}

export default CastTranslateXToOpacity;