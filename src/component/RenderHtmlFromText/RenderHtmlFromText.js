import React from 'react';
import classes from './RenderHtmlFromText.module.scss';
import { getList, getParagraph} from "./Helper/render";

const renderHtmlFromText = ({items}) => {

    const paragraphs = items.map((value) => {

        switch(value.type){

            case "p": return getParagraph(value, classes.Wrapper, classes.Paragraph, classes.Link, classes.Title);
            case "ul": return getList(value.list, classes.Item, classes.Link, classes.List);

            default: console.error("Unknown type === " + value.type); return null;
        }


    });

    return (

        <div className={classes.RenderHtmlFromText}>

            { paragraphs }

        </div>
            
    );
};

export default renderHtmlFromText;
        