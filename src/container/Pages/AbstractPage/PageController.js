
import {form_type} from "./../../../data/forms";

class PageController {

    setState = null;

    classesManager = null;
    //classes = null;

    numberOfSections = 0;
    prevIndex = 0;
    activeIndex = 0;
    
    created = [];

    /* mainSectionClasses = '';
    leftSectionClasses = '';
    contactsSectionClasses = ''; */

    html = null;

    //TODO: make no scroll when modal shows
    //TODO: remember scrollTop for each section

    constructor(manager, numberOfSections, activeIndex, prevIndex){

        this.classesManager = manager;
        //this.classes = classes;
        this.numberOfSections = numberOfSections;
        this.activeIndex = activeIndex;
        this.prevIndex = prevIndex;
        //this.mainSectionClasses = classes.Section;

        const arrayOfCreated = [];

        for(let i = 0; i < numberOfSections; i++){
            arrayOfCreated[i] = i === activeIndex;
        }

        this.created = arrayOfCreated;
        this.html = document.querySelector("html");

    }

    onIncreaseActiveIndex = (event) => {

        event.stopPropagation();
        event.preventDefault();
        //TODO check index

        this.setState((prevState) => {

            if(this.activeIndex < this.numberOfSections - 1){

                this.html.scrollTop = 0;
    
                this.prevIndex = this.activeIndex;
    
                this.activeIndex = this.activeIndex + 1;
    
    
                if(this.created[this.activeIndex] === false){
    
                    this.created[this.activeIndex] = true;
    
                }
    
    
                this.classesManager.setClassesByActiveIndex(this.activeIndex, this.prevIndex);
    
                return {
                    ...prevState,
                    activeSectionIndex: this.activeIndex
                };
    
            }

            return prevState;

        });

    };

    onDecreaseActiveIndex = (event) => {

        //TODO check index
        event.stopPropagation();
        event.preventDefault();

        this.setState((prevState) => {

            if(this.activeIndex > 0){

                this.html.scrollTop = 0;
    
                this.prevIndex = this.activeIndex;
    
                this.activeIndex = this.activeIndex - 1;
    
    
                if(this.created[this.activeIndex] === false){
    
                    this.created[this.activeIndex] = true;
    
                }
    
    
                this.classesManager.setClassesByActiveIndex(this.activeIndex, this.prevIndex);
    
                return {
                    ...prevState,
                    activeSectionIndex: this.activeIndex
                };

            }

            return prevState;

        });

    };

    onSetActiveIndex = (index) => {

        this.setState((prevState) => {

            //let index = -1;

            /* if(target && target.datase && target.dataset.featureIndex){
                index = parseInt(target.dataset.featureIndex);
            }else{

                console.error("No data-index on item...");
                return;

            } */

            console.log("onSetActiveIndex", index);

            if(index >= 0 && index <= this.numberOfSections - 1){

                if(this.created[index] === false){

                    this.created[index] = true;

                }

                this.html.scrollTop = 0;

                this.prevIndex = this.activeIndex;

                this.activeIndex = index;

                this.classesManager.setClassesByActiveIndex(this.activeIndex, this.prevIndex);
    
                if(prevState.activeSectionIndex !== this.activeIndex){

                    return {
                        ...prevState,
                        activeSectionIndex: this.activeIndex
                    };
                }

            }

            return prevState;

        });

    };

    onShowSlider = (event) => {

        event.preventDefault();
        event.stopPropagation();

        this.setState((prevState) => {
            return {
                ...prevState,
                isShowSlider: true
            };
        });
    

    };

    onHideSlider = (event) => {

        event.preventDefault();
        event.stopPropagation();

        this.setState((prevState) => {
            return {
                ...prevState,
                isShowSlider: false
            };
        });
    

    };

    onShowCallMeForm = (event) => {

        event.preventDefault();
        event.stopPropagation();
        
        this.onShowForm(form_type.CALL_ME);

    };

    onShowCallMeWithSampleForm = (hiddenFields) => {

        /*event.preventDefault();
        event.stopPropagation();

        const id = event.target.dataset.jobId;*/
        
        this.onShowForm(
            form_type.CALL_ME_WITH_SAMPLE,
            hiddenFields
        );

    };


    onShowForm = (formType, hiddenFields) => {

        this.setState((prevState) => {
            return {
                ...prevState,
                isShowForm: true,
                formType: formType,
                hiddenFields: hiddenFields ? hiddenFields : []
            };
        });
    
    };

    onHideForm = (event) => {

        event.preventDefault();
        event.stopPropagation();

        this.setState((prevState) => {

            return { 
                ...prevState, 
                isShowForm: false,
                hiddenFields: []
            };

        });
    
    };


    getMainSectionClasses = () => {

        return this.classesManager.mainSectionClasses;

    }

    getLeftSectionClasses = () => {

        return this.classesManager.leftSectionClasses;

    }

    getContactsSectionClasses = () => {

        return this.classesManager.contactsSectionClasses;

    }

}

export default PageController;