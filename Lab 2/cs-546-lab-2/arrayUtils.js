const head = function(array){
    if(Array.isArray(array)){
        if(array.length === 0){
            throw "Empty array exception";
        }
        else{
            return array[0];
        }
    }
    else{
        throw "Invalid input";
    }
}

const last = function(array){
    if(Array.isArray(array)){
        if(array.length === 0){
            throw "Empty array exception";
        }
        else{
            return array[array.length - 1];
        }
    }
    else{
        throw "Invalid input";
    } 
}

const remove = function(array, index){
    if(Array.isArray(array) && index < array.length){
        array.splice(index,1);
        return array;
    }
    else{
        throw "Invalid input";
    } 
}

const range = function(end, value){
    let array = [];
    if(typeof end == "number" && end > 0){
        if(Number.isInteger(end)){
            if(value || value === '' || value === null || value === 0){
                for(let i=0; i<end; i++){
                    array.push(value);
                }
            }
            else{
                for(let i=0; i<end; i++){
                    array.push(i);
                }
            }
            return array;
        }
        else{
            throw "Exception : Floats are invalid. Please enter a positive integer";
        }
    }
    else{
        throw "Invalid input";
    }
}

const countElements = function(array){
    let dupArray = array; 
    let obj = {};
    let counter = 0;
    if(Array.isArray(dupArray)){
        if(dupArray == []){
            return {"": 0};
        }
        else{
            for(let i = 0; i<array.length; i++){
                counter = 1;
                if(!obj[`${array[i]}`]){
                    obj[`${array[i]}`] = counter;
                    for(let j = i+1; j<dupArray.length; j++){
                        if(array[i] == dupArray[j]){
                            counter++;
                            if(obj[`${array[i]}`]){
                                obj[`${array[i]}`] = counter;
                            }
                        }
                    }
                }
            }
        }
        return obj;
    }
    else{
        throw "Invalid input";
    }
}

const isEqual = function(arrayOne, arrayTwo){
    if(Array.isArray(arrayOne) && Array.isArray(arrayTwo)){
        if(arrayOne.length === arrayTwo.length){
            let counter = 0;
            for(let i=0; i<arrayOne.length; i++){
                if(arrayOne[i] === arrayTwo[i]){
                    counter++;
                }
                else{
                    return false;
                }
            }
            if(counter === arrayOne.length){
                return true;
            }
        }
        else{
            return false;
        }
    }
    else{
        throw "Invalid input";
    }
}

module.exports = {last, head, remove, range, countElements, isEqual};
