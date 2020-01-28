const lab1 = require("./lab1");

console.log("Logs for question 1");
console.log(lab1.questionOne([1,2,3])); 
// should output 14
console.log(lab1.questionOne([5, 3, 10])); 
// 134
console.log(lab1.questionOne([2,1,2])); 
// 9
console.log(lab1.questionOne([5, 10, 9])); 
// 206
console.log(lab1.questionOne([1,1,0,0,1,1,1,1,1,0])); 
// 7

console.log("Logs for question 2");
console.log(lab1.questionTwo(7)); 
// should output 13 
console.log(lab1.questionTwo(10)); 
// should output 55
console.log(lab1.questionTwo(11)); 
// should output 89 
console.log(lab1.questionTwo(-9)); 
// should output 0 


console.log("Logs for question 3");
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196
console.log(lab1.questionThree("aeiou")); 
// should output 196

console.log("Logs for question 4");
console.log(lab1.questionFour(-1)); 
// should display an error
console.log(lab1.questionFour(5)); 
// should output 120 