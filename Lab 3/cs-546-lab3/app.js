const people = require("./people");
const weather = require("./weather");
const work = require("./work");



async function main(){
    
    try{
        const peopledata = await people.getPersonById(43);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    
    try{
        let sortedPerson = await people.lexIndex();
        console.log(sortedPerson);
    }catch(e){
        console.log (e);
    } 
    
    try{
        const metrics = await people.firstNameMetrics("test");
        console.log(metrics);
    }
    catch(e){
        console.log (e);
    }

    try{
        var message = await weather.shouldTheyGoOutside("caLli", "Ondrasek");
        console.log(message);
    }
    catch(e){
        console.log (e);
    }

    try{
        var message = await work.whereDoTheyWork();
        console.log(message);
    }
    catch(e){
        console.log (e);
    }

    try{
        var message = await work.findTheHacker("79.232.167.180");
        console.log(message);
    }
    catch(e){
        console.log (e);
    }
    
}

main()