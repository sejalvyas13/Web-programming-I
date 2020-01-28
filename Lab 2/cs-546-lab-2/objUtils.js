const extend = function(...args){
    if(args.length > 1){
        let opObj = args[0];
        for(let i=1; i<args.length; i++){
            if(typeof args[i] == "object"){
                Object.keys(args[i]).forEach(function(key){
                    if(opObj[key] === undefined){
                        opObj[`${key}`] = args[i][key];
                    }
                });
            }
            else{
                throw "Invalid type";
            }
        }
        return opObj;
    }
    else{
        throw "Invalid input";
    }
}


const smush = function(...args){
    if(args.length > 1){
        let opObj = args[0];
        for(let i=1; i<args.length; i++){
            if(typeof args[i] == "object"){
                Object.keys(args[i]).forEach(function(key){
                    opObj[`${key}`] = args[i][key];
                }); 
            }
            else {
                throw "Invalid type";
            }
        }
        return opObj;
    }
    else{
        throw "Invalid input";
    }
}


const mapValues = function(object, func){
    let newObj;
    let keys;
    if(typeof object == "object" && typeof func == "function"){
        newObj = Object.values(object).map(func);
        keys = Object.keys(object);
        for(let i=0; i<keys.length; i++){
            object[keys[i]] = newObj[i];
        }
        return object;
    }
    else{
        throw "Invalid input";
    }
}

module.exports = {extend, smush, mapValues};



