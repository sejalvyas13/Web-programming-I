const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");


 try{
    let obj = arrayUtils.range(8, "hi");
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }
 try{
    let obj = arrayUtils.range(-8);
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }

 try{
    let obj = arrayUtils.countElements(["a","a",5,"b"]);
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }
 try{
    let obj = arrayUtils.countElements("a");
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }

 try{
    let obj = stringUtils.capitalize("home");
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }
 try{
    let obj = stringUtils.capitalize();
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }

 try{
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    let obj = objUtils.extend(first, undefined, third);
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }

 try{
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    let obj = objUtils.extend(first, second, third);
    console.log(obj);
 }
 catch(e){
     console.log(e);
 }


