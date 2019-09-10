import React from 'react';

export const getKey = () => {

    return Math.floor(Math.random() * (12000 - 38)) + 1;

};

export const getHeader = (header, classTitle) => {

    let key = getKey();

    if(header !== null && header !== undefined){

        switch (header.type) {
            case "h1": return (<h1 key={key} className={classTitle}>{header.text}</h1>);
            case "h2": return (<h2 key={key}  className={classTitle}>{header.text}</h2>);
            case "h3": return (<h3 key={key}  className={classTitle}>{header.text}</h3>);
            case "h4": return (<h4 key={key}  className={classTitle}>{header.text}</h4>);
            case "h5": return (<h5 key={key}  className={classTitle}>{header.text}</h5>);

            default: console.error("Bad header type == " + header.type);

        }

    }else{
        console.error("Bad header ");
    }

};

export const getContent = (paragraph, classLink) => {

    let content = [];

    let key = 0;
    let linkCount = 0;
    let textCount = 0;

    for(let i = 0; i < paragraph.content.length; i++){

        key = getKey();

        switch (paragraph.content[i]) {

            case "^a":

                if(paragraph.links && paragraph.links[linkCount]){

                    content.push(
                        <a className={classLink} key={key} href={paragraph.links[linkCount].href}> {paragraph.links[linkCount].title} </a>
                    );
                    linkCount++; break;

                }else{

                    console.error("No link...");break;

                }

            case "^p":

                if(paragraph.text && paragraph.text[textCount]){

                    content.push(<span key={key} >{paragraph.text[textCount]}</span>);
                    textCount++;break;

                }else{

                    console.error("No text...");break;

                }

            default: console.error("Unknown content type === " + paragraph.content[i]);break;

        }

    }

    return content;

};

export const getList = (list, classItem, classLink, classList) => {

    const items = list.map((value) => {

        let key = getKey();

        if(typeof value === "string"){

            return <li className={classItem} key={key}>{ value }</li>;

        }else if(typeof value === "object"){

            return <li className={classItem} key={key}><a className={classLink} href={value.href}>{ value.text }</a></li>;

        }else{

            console.error("BAd value...");
            return null;

        }

    });

    return <ul key={getKey()} className={classList} >{ items }</ul>;



};

export const getParagraph = (paragraph, classWrapper, classParagraph, classLink, classTitle) => {

    let header = (paragraph.header && paragraph.header.type) ? getHeader(paragraph.header, classTitle) : null;
    let content = getContent(paragraph, classLink);
    let key = getKey();

    return (
        <div key={key} className={classWrapper}>
            {header}
            <p className={classParagraph}>{content}</p>
        </div>
    ) ;

};
