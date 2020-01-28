const axios = require('axios');


async function getWeather(){
  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
  return data; // this will be the array of weather
}

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data; // this will be the array of people
}

async function shouldTheyGoOutside(first, second){
    let people = await getPeople();
    let weather = await getWeather();
    if(first && second && typeof first == "string" && typeof second == "string"){
        for(key in people){
            if(people[key].firstName.toUpperCase() === first.toUpperCase() && people[key].lastName.toUpperCase() === second.toUpperCase()){
                for(i in weather){
                    if(people[key].zip === weather[i].zip){
                        if(weather[i].temp >= 34){
                            return "Yes, " + people[key].firstName + " should go outside.";
                        }
                        if(weather[i].temp < 34){
                            return "No, " + people[key].firstName + " should not go outside.";
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

module.exports = {shouldTheyGoOutside};