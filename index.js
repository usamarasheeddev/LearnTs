"use strict";
const userName = "usama";
const age = 20;
const address = 'chak no 188 rb';
const array = [12, 2, 4, 5, 6, 7];
const array1 = ['usmaa', 3, 4, 5, "helo"];
//functions
function testing1(n, o) {
    console.log(o);
}
function testing(n, o) {
    console.log(o);
    return n;
}
// testing(5, 8)
//objects in TS
const user = {
    userName: "usama", age: 23, address: "faisalabad"
};
const employee = {
    name: 'usama', age: 12, address: 'dfjsdjlksdfj'
};
const person = {
    name: 'usama',
    age: 23,
    address: 'chak no 188',
    adult: true
};
const object = {
    value: "100"
};
//getting object value
// console.log(object.value)
//typecasting or type assertion
// const num:number=(<number>object.value)
// const num1:number=object.value as number
// console.log(num1)
//AS CONST =---------------------------------------
let person1 = {
    name: 'usama',
    address: 'dfasdfasdf',
    age: 30,
    adult: true
};
console.log(person1);
