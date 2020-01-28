const questionOne = function questionOne(arr) {
    // Implement question 1 here
    //Used this method of checking array from developer.mozilla website
    if(!Array.isArray(arr)){
        return "Invalid data type";
    }
    else{
        var sum;
        if(!arr){
            sum = 0;
        }
        else{
            sum = arr.reduce(function(accumulator,item){
                return accumulator + (item*item);
            },0);
        }
        return sum;
    }
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(typeof num != 'number'){
        return "Invalid data type";
    }
    else{
        var fib;
        if(num<=0){
            fib = 0;
        }
        else if(num == 1){
            fib = 1;
        }
        else{
            var last = 1;
            var secLast = 0;
            for(var i = 1; i<num; i++){
                fib = last + secLast;
                secLast = last;
                last = fib;
            }   
        }
        return fib;
    }
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    var counter = 0;
    for(var i = 0; i<text.length; i++){
        if(i === text.length){
            continue;
        }
        else if(text.slice(i,i+1) === 'a' || text.slice(i,i+1) === 'e' || text.slice(i,i+1) === 'i' || text.slice(i,i+1) === 'o'|| text.slice(i,i+1) === 'u'){
            counter++; 
       } 
    }
    return counter;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(typeof num != 'number'){
        return "Invalid data type";
    }
    else{
        var fac = 1;
        n = num;
        if(num === 0){
            return 1;
        }
        else if(num > 0){
            while(n != 1){
                fac = fac*n;
                n--;
            }
            return fac;
        }
        else if(num < 0){
            return "Factorial is defined only for non-negative integers!";
        }   
        
    }

}

module.exports = {
    firstName: "Sejal", 
    lastName: "Vyas", 
    studentId: "10450395",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};