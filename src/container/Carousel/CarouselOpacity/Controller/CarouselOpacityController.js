
class CarouselOpacityController {

    setState = null;

    //view = null;
    calc = null;
    cast = null;

    decreaseActiveIndex = null;
    increaseActiveIndex = null;

    activeIndex = 0;
    itemsLength = 0;


    constructor(calc, cast){
        //this.view = view;
        this.calc = calc;
        this.cast = cast;

    }

    onPointerDown = (pageX, pageY) => {

        this.calc.onPointerDown(pageX, pageY);
        this.cast.onPointerDown();
    
        this.setState((prevState) => {

            return {...prevState, isTranslated: true};

        });
    
    };

    onPointerMove = (pageX, pageY) => {
    
        this.calc.onPointerMove(pageX, pageY, this.activeIndex, this.itemsLength);
    
        this.setState((prevState) => {

            if(prevState.translateX !== this.calc.translateX){
                return {
                    ...prevState, 
                    translateX: this.calc.translateX,
                    opacity: this.cast.calcOpacityByTranslateX(this.calc.translateX)
                };
            }else{
                return prevState;
            }

        });
    
    };
    
    onPointerUp = () => {


        this.setState((prevState) => {

            if(!this.calc.isYScroll && this.calc.isEnougthDist()){

                if(this.calc.isIndexIncrease()){

                    this.increaseActiveIndex();

                }else{

                    this.decreaseActiveIndex();

                }

            }

            this.calc.onPointerUp();

            return {
                ...prevState, 
                isTranslated: false, 
                translateX: 0,
                opacity: 1
            };

        });
    
    };

    onMouseDown = (event) => {

        //console.log("onMouseDown");

        event.preventDefault();
        event.stopPropagation();

        window.addEventListener('mousemove', this.onMouseMove, false);
        window.addEventListener('mouseup', this.onMouseUp, false);

        this.onPointerDown(event.pageX, event.pageY);

    };

    onMouseMove = (event) => {

        //console.log("onMouseMove");

        event.preventDefault();
        event.stopPropagation();

        this.onPointerMove(event.pageX, event.pageY);

    };

    onMouseUp = (event) => {

        //console.log("onMouseUp");

        event.preventDefault();
        event.stopPropagation();

        window.removeEventListener('mousemove', this.onMouseMove, false);
        window.removeEventListener('mouseup', this.onMouseUp, false);

        this.onPointerUp();

        //onPointerUp(increaseActiveIndex, decreaseActiveIndex);
    };

     /*TOUCH EVENTS*/
     onTouchStart = (event) => {

        event.preventDefault();
        event.stopPropagation();

        const touches = event.changedTouches[0];

        this.onPointerDown(touches.pageX, touches.pageY);

    };

    onTouchMove = (event) => {

        event.preventDefault();
        event.stopPropagation();

        const touches = event.changedTouches[0];

        this.onPointerMove(touches.pageX, touches.pageY);

    };

    onTouchEnd = (event) => {

        event.preventDefault();
        event.stopPropagation();

        this.onPointerUp();

    };

}

export default CarouselOpacityController;