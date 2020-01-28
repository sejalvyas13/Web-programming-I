const mongoCollections = require("./mongoCollections");
const posts = mongoCollections.posts;
const animals = mongoCollections.animals;

async function getPostById(id) {
    if (!id) throw "You must provide an id to search for";
    if(typeof id == "number" || typeof id == "string" || Array.isArray(id)) throw "Please provide an ID of proper type";


    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: id });
    if (post === null) throw "No post with that id";

    return post;
}

async function getAllPosts() {
    const postCollection = await posts();

    const post = await postCollection.find({}).toArray();

    return post;
}

async function addPost(title, author, content) {
    if (!title) throw "You must provide a title";
    if (!author) throw "You must provide an author";
    if (!content) throw "You must provide content";

    if(typeof title == "number" || typeof author == "number" || typeof content == "number" || Array.isArray(title) || Array.isArray(content) || Array.isArray(author) ||
    typeof title == "object" || typeof author == "object" || typeof content == "object") throw "Please provide proper input type";


    let newPostInfo = {
      title: title,
      author: author,
      content: content
    };
    const postCollection = await posts();
    const animalCollection = await animals();

    const info = await animalCollection.find({}).toArray();
    
      for(let i=0;i<info.length;i++){
        if(info[i]._id == author){
          const updateInfo = await animalCollection.updateOne({ _id: info[i]._id },
            { $addToSet: {posts : {"_id" : info[i]._id, "title" : title}}}); 
            newPostInfo = {
              title: title,
              author: {"_id" : info[i]._id, "name" : info[i].name},
              content: content
            };
        }
      }
    
    
    const insertInfo = await postCollection.insertOne(newPostInfo);

    if (insertInfo.insertedCount === 0) throw "Could not add post";
    
    const newPost = await this.getPostById(insertInfo.insertedId);

    return newPost;
}

async function removePost(id) {
    if (!id) throw "You must provide an id to search for";
    if(typeof id == "number" || typeof id == "string" || Array.isArray(id)) throw "Please provide an ID of proper type";

    const postCollection = await posts();
    const deletedPost = await this.getPostById(id);
    const deletionInfo = await postCollection.removeOne({ _id: id });    
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete post with id of ${id}`;
    }
    else {
      return {"deleted" : true,
              "data" : deletedPost};
    }
}

async function updatePost(id, title, content) {
    if (!id) throw "You must provide a post id";
    if (!title && !content) throw "You must provide a title or content";

    const postCollection = await posts();

    let updatedPost = {};
    if(title!=null && content!=null){
      updatedPost = {
        $set:{title: title,
        content: content}
      };
    }
    else if(title!=null){
      updatedPost = {
        $set:{title: title}
      };
    }
    else if(content!=null){
      updatedPost = {
        $set:{content: content}
      };
    }
      
    console.log(id, title, content);

    const updatedInfo = await postCollection.updateOne(
      { _id: id },
      updatedPost
    );

    if (updatedInfo.modifiedCount === 0) {
      throw "Could not update post!";
    }

    return await this.getPostById(id);
}


module.exports = {getPostById, getAllPosts, addPost, removePost, updatePost};