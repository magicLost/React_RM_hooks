export const toRadians = (angle) => {

    return angle * (Math.PI / 180);

};

export const toDegrees = (angle) => {

    return angle * (180 / Math.PI);

};

export const sinDegrees = (angleDegrees) => {

    return Math.sin( angleDegrees * Math.PI/180 );

};

export const cosDegrees = (angleDegrees) => {

    return Math.cos( angleDegrees * Math.PI/180 );

};

export const clamp = (number, min, max) => {

    //return Math.min(Math.max(number, min), max);
    return number <= min ? min : number >= max ? max : number;

};

/* Math.floor
Округляет вниз
Math.ceil
Округляет вверх
Math.round
Округляет до ближайшего целого
 alert( Math.floor(3.1) );  // 3
alert( Math.ceil(3.1) );   // 4
alert( Math.round(3.1) );  // 3 */