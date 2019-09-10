
class ClassesManager {

    //setState = null;

    classes = null;


    mainSectionClasses = '';
    leftSectionClasses = '';
    contactsSectionClasses = '';


    constructor(classes){

        this.classes = classes;

        this.mainSectionClasses = classes.Section;

    }

    setClassesByActiveIndex = (activeIndex, prevIndex) => {

        switch(activeIndex){

            case 1:

                if(prevIndex === 0){

                    this.mainSectionClasses = [ this.classes.Section, this.classes.AnimationMoveFromRightToCenter ].join(' ');
                    this.leftSectionClasses = this.classes.Section;
                    this.contactsSectionClasses = this.classes.Section;

                }else{

                    this.mainSectionClasses = [ this.classes.Section, this.classes.AnimationMoveFromLeftToCenter ].join(' ');
                    this.leftSectionClasses = this.classes.Section;
                    this.contactsSectionClasses = this.classes.Section;

                }

                break;

            case 0:

                this.mainSectionClasses = this.classes.Section;
                this.leftSectionClasses = [ this.classes.Section, this.classes.AnimationMoveFromLeftToCenter ].join(' ');
                this.contactsSectionClasses = this.classes.Section;
                break;

            case 2:
                this.mainSectionClasses = this.classes.Section;
                this.leftSectionClasses = this.classes.Section;
                this.contactsSectionClasses = [ this.classes.Section, this.classes.AnimationMoveFromRightToCenter ].join(' ');
                break;

            default: console.error("no implementation for index == " + activeIndex);

        }

    };

}

export default ClassesManager;