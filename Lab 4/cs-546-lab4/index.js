const animals = require('./data/animal');
ObjectID = require('mongodb').ObjectID;

async function main() {
    const sasha = await animals.create("Sasha", "dog");
    // const animal1 = await animals.get(sasha._id);
    // console.log(animal1);

    // const lucy = await animals.create("Lucy", "Dog");
    // const animal2 = await animals.get(lucy._id);
    // console.log(animal2);
    
    // const duke = await animals.create("Duke", "Walrus");
    // const animal3 = await animals.get(duke._id);
    // console.log(animal3);
    
    const sashita = await animals.rename(sasha._id, "Sashita");
    const animal4 = await animals.get(sashita._id);
    console.log(animal4);
    
    // const lucy1 = await animals.remove(lucy._id);
    // console.log(lucy1);
    
    const all = await animals.getAll();
    console.log(all);
    

}

main().catch(error => {
    console.log("Got an error");
    console.log(error);
  });