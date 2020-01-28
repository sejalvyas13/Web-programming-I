const axios = require('axios');


async function getPeople(){
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
  return data; // this will be the array of people
}

async function getPersonById(id){
    const data = await getPeople();
    if(typeof id == "number" && Number.isInteger(id) && id>0 && id<=500){
        for(key in data){
            if(data[key].id === id){
                return data[key].firstName + " " + data[key].lastName;
            }
        }
    }
    else{
        throw "Invalid ID";
    }
    
    
}

async function lexIndex(id){
    const data = await getPeople();
        if(typeof id == "number" && Number.isInteger(id) && id>=0 && id<500){
            data.sort(function(a,b){
                if(a.lastName > b.lastName){
                    return 1;
                }
                else if (a.lastName < b.lastName){
                    return -1;
                }
            });
            return data[id].firstName + " " + data[id].lastName;
        }
        else{
            throw "Invalid index";
        } 
}

async function firstNameMetrics(param){
    const data = await getPeople();
    let resultData;
    let totalLetters = 0;
    let c;
    let totalVowels = 0;
    let totalConsonants = 0;
    let longestName = data[0].firstName;
    let shortestName = data[0].firstName;
    for(key in data){
        c = data[key].firstName.split("");
        totalLetters = totalLetters + c.length;
        for(let i=0; i <c.length; i++){
            if(c[i] === 'a' || c[i] === 'e' || c[i] === 'i' || c[i] === 'o' || c[i] === 'u' || c[i] === 'A' || c[i] === 'E' || c[i] === 'I' || c[i] === 'O' || c[i] === 'U'){
                totalVowels = totalVowels + 1;
            }
        }
        if(longestName.split("").length < c.length){
            longestName = data[key].firstName;
        }
        if(shortestName.split("").length > c.length){
            shortestName = data[key].firstName;
        }
    }
    totalConsonants = totalLetters - totalVowels;
    resultData = {
        'totalLetters' : totalLetters,
        'totalVowels' : totalVowels,
        'totalConsonants' : totalConsonants,
        'longestName' : longestName,
        'shortestName' : shortestName
    }
    return resultData;
}

module.exports = {getPersonById, lexIndex, firstNameMetrics};