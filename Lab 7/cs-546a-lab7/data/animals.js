const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;
const postData = require('./posts');

async function get(id){
    if(!id) throw "Please provide an ID";
    if(typeof id == "number" || typeof id == "string" || Array.isArray(id)) throw "Please provide an ID of proper type";

    const animalCollection = await animals();
    const animal = await animalCollection.findOne({ _id: id });
    if (animal === null) throw "No animal with that id";

    return animal;

}

async function create(name,animalType){
    if(!name) throw "You must provide a name for your animal";

    if (!animalType) throw "You must specify the animal kingdom of your animal";

    if(typeof name == "number" || typeof animalType == "number" || Array.isArray(name) || Array.isArray(animalType) ||
        typeof name == "object" || typeof animalType == "object") throw "Please provide proper input type";

    const animalCollection = await animals();

    let newAnimal = {
      name: name,
      animalType: animalType,
      likes : [],
      posts:[]
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount == 0) throw "Could not add animal";

    const newId = insertInfo.insertedId;

    return await this.get(newId);
}

async function getAll(){
    const animalCollection = await animals();

    const animal = await animalCollection.find({}).toArray();

    return animal;
}

async function remove(id){
    if (!id) throw "Please provide an ID";

    if(typeof id == "number" || Array.isArray(id) || typeof name == "string") throw "Please provide proper input type";

    const animalCollection = await animals();
    let deletedDog = await this.get(id);
    const deletedInfo = await animalCollection.removeOne({ _id: id });
    //console.log(deletedInfo);

    if (deletedInfo.deletedCount === 0) {
        throw `Could not delete animal with id of ${id}`;
    }
    else{
        return {"deleted" : true,
                "data" : deletedDog};
    }
}

async function rename(id, newName, newType){
    if(!id) throw "Please provide id";
    if(!newName && !newType) throw "Please provide new name or type";

    if(typeof id == "number" || typeof newName == "number" || Array.isArray(id) || Array.isArray(newName) ||
        typeof newName == "object" || typeof newType == "number" || Array.isArray(newType) ||
        typeof newType == "object") throw "Please provide proper input type";

    const animalCollection = await animals();
    let updatedanimal = {};
    
    if(newName && newType){
        updatedanimal = {
            $set:{name: newName,
            animalType: newType} 
        };
    }
    else if(newName){
        updatedanimal = {
            $set:{name: newName} 
        };
    }
    else if(newType){
        updatedanimal = {
            $set:{animalType: newType} 
        };
    }
  
    const updateInfo = await animalCollection.updateOne({ _id: id }, updatedanimal);
    if (updateInfo.modifiedCount === 0) {
        throw "could not update animal successfully";
    }

    return await this.get(id);
}

async function likeUnlike(animalId, postId, like){
    if(!animalId) throw "Please provide animal ID";
    if(!postId) throw "Please provide post ID";
    //improve on error checking
    if(typeof animalId == "number" || Array.isArray(animalId) || Array.isArray(postId)) throw "Please provide proper input type";
    const postInfo = await postData.getPostById(postId);
    const animalCollection = await animals();
    let updatedanimal = {};
    console.log(await this.get(animalId));
    if(like){
        updatedanimal = {
            $push:{likes: {"_id" :postId, "title" : postInfo.title}} 
        };
    }
    else{
        updatedanimal = {
            $pull:{likes: {"_id" :postId, "title" : postInfo.title}} 
        };
    }
    const updateInfo = await animalCollection.updateOne({ _id: animalId }, updatedanimal);
    if (updateInfo.modifiedCount === 0) {
        throw "could not update animal successfully";
    }
    return await this.get(animalId);
}


module.exports = {create, getAll, get, remove, rename, likeUnlike};
