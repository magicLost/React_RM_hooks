import {useState} from "react";



export const useOne = () => {

    const [ counter , setCounter ] = useState(0);

    
    return [ counter, setCounter ];

};

export const useTwo = () => {

    const [ shit , setShit ] = useState(34);

    

    return [ shit, setShit ];

};