const axios = require('axios');

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data; // this will be the array of people
}
async function getWork(){
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
  return data; // this will be the array of weather
}

async function whereDoTheyWork(first, second){
    let people = await getPeople();
    let work = await getWork();
    if(first && second && typeof first == "string" && typeof second == "string"){
        for(key in people){
            if(people[key].firstName === first && people[key].lastName === second){
                for(i in work){
                    if(people[key].ssn === work[i].ssn){
                        if(work[i].willBeFired){
                            return people[key].firstName + " " +people[key].lastName + " - " + work[i].jobTitle + " at " + work[i].company + ". They will be fired.";
                        }
                        if(!work[i].willBeFired){
                            return people[key].firstName + " " +people[key].lastName + " - " + work[i].jobTitle + " at " + work[i].company + ". They will not be fired.";
                        }
                    }
                }
            }
        }
        if(key == 499){
            throw "Invalid first name or last name";
        }
    }
    else{
        throw "Invalid input";
    }
}

async function findTheHacker(ip){
    let people = await getPeople();
    let work = await getWork();
    if(ip && typeof ip == "string"){
        for(i in work){
            if(work[i].ip === ip){
                for(key in people){
                    if(people[key].ssn === work[i].ssn){
                        return people[key].firstName + " " +people[key].lastName + " is the hacker.";       }
                }
            }
        }
        if(work.indexOf(work[i]) === work.indexOf(work[work.length - 1])){
            throw "Invalid IP";
        }
    }
    else{
        throw "Invalid input";
    }
        
}

module.exports = {whereDoTheyWork, findTheHacker};