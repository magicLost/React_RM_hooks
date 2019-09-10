class CalcTranslateX {

    //itemsLength: itemsLength,
    dist = 0;

    prevPageX = 0;
    pageXStart = 0;
    pageYStart = 0;

    isYScroll = false;
    isFirstMove = true;

    offset = 30;

    translateX = 0;

    onPointerDown = (pageX, pageY) => {

        this.pageXStart = pageX;
        this.pageYStart = pageY;
        this.prevPageX = pageX;
        this.dist = 0;


    };

    onPointerMove = (pageX, pageY, activeIndex, itemsLength) => {

        //console.log("onPointerMove", pageX);

        if(this.isFirstMove){

            this.isYScroll = this.isYScrollFunc(pageX, pageY);

            this.isFirstMove = false;

        }

        if(this.isYScroll) return ;

        this.dist = this.pageXStart - pageX;

        this.translateX += this.calcTranslateXOnMove(pageX, activeIndex, itemsLength);

        this.prevPageX = pageX;

    };

    onPointerUp = () => {

        this.isYScroll = false;
        this.isFirstMove = true;

        this.translateX = 0;

    };


    calcTranslateXOnMove = (pageX, activeIndex, itemsLength) => {
    
        if(activeIndex === 0 && this.translateX > 0){
    
            if(pageX > this.prevPageX){

                if(this.translateX > this.offset) return 0;

                return 0.3;

            }
    
        }else if(activeIndex === itemsLength - 1 && this.translateX < 0){

            if(pageX < this.prevPageX){

                if(this.translateX < -this.offset) return 0;

                return -0.3;

            }
    
        }
    
        return pageX - this.prevPageX;
    
    };

    getTranslateX = (activeIndex, translateX) => {

        const translateByActiveIndex = - activeIndex * 100 + '%';
    
        return  'calc(' + translateByActiveIndex + " + " + translateX + 'px)';
    
    };

    isIndexIncrease = () => {

        return this.dist > 0;

    };

    isEnougthDist = () => {

        return Math.abs(this.dist) > 25;

    };

    isYScrollFunc = (pageX, pageY) => {

        const distX = Math.abs(pageX - this.pageXStart);
        const distY = Math.abs(pageY - this.pageYStart);

        //console.log("distX " + distX);
        //console.log(event);

        return distY > distX;

    };

}

export default CalcTranslateX;