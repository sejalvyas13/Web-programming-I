const arrayUtils = require("./arrayUtils");

const capitalize = function(inpString){
    if(typeof inpString == "string" && inpString.trim() != ""){
        let opString = inpString.charAt(0).toUpperCase();
        inpString = inpString.slice(1,inpString.length);
        opString = opString + inpString.toLowerCase();
        return opString;
    }
    else{
        throw "Invalid input";
    }
}

const repeat = function(inpString, num){
    let opString = "";
    if(typeof inpString == "string" && num >= 0 && Number.isInteger(num)){
        if(num === 0){
            return "";
        }
        else if(num === 1){
            return inpString;
        }
        else{
            for(let i=0; i<num; i++){
                opString = opString.concat(inpString);
            }
            return opString;
        }
    }
    else{
        throw "Invalid input";
    }
}

const countChars = function(inpString){
    if(typeof inpString == "string" && inpString != ""){
        let opString = inpString.split("");
        let ans = arrayUtils.countElements(opString);
        return ans;
    }
    else{
        throw "Invalid input";
    }

}

module.exports = {capitalize, repeat, countChars};
