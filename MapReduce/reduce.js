// const arr=[1,2,3,4,5];
// const reduced=arr.reduce(function(accumulator,currentValue){
//     accumulator+=currentValue;
//     return accumulator;
// },0);
// console.log(reduced);



//<<<<<<<----This Keyword----->>>>>>>
"use strict";   //without strict mode this will point to window object
function f() {
    console.log(this);
}
f();// undefined
window.f(); // window object

const obj = {
    x:10,
    y: function() {
        console.log(this);
    }   
};
obj.y(); // it will print {x: 10, y: ƒ} because this will point to the object which is calling the function
