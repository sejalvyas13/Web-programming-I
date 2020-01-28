const express = require("express");
const router = express.Router();
const data = require("../data");
const postsData = data.posts;
const animalsData = data.animals;
const ObjectID = require('mongodb').ObjectID;



router.get("/", async (req, res) => {
    try {
        const postInfo = await postsData.getAllPosts();
        const info = await animalsData.getAll();
        for(let j=0; j<postInfo.length; j++){
            for(let i=0;i<info.length;i++){
                if(typeof postInfo.author == "string" && postInfo[j].author.trim() == info[i]._id){
                    postInfo[j].author = {
                        "_id" : info[i]._id,
                        "name" : info[i].name
                    }; 
                    break;
                }
            }
        }
        res.status(200).json(postInfo);
    } catch (e) {
      res.status(404).json({ message:"Posts were not found!" });
    }
});

router.post("/", async (req, res) => {
    const newPostData = req.body;
    try {
        const {title, author, content} = newPostData;
        const newPost = await postsData.addPost(title, author, content);
        res.status(200).json(newPost);
    } catch (e) {
      res.status(400).json({ message: e });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const postInfo = await postsData.getPostById(ObjectID(req.params.id));
        const info = await animalsData.getAll();
            for(let i=0;i<info.length;i++){
                if(typeof postInfo.author == "string" && postInfo.author.trim() == info[i]._id){
                    postInfo.author = {
                        "_id" : info[i]._id,
                        "name" : info[i].name
                    }; 
                    break;
                }
            }
        res.status(200).json(postInfo);
    } catch (e) {
        res.status(404).json({ message:"Post not found!" });
    }
});


router.put("/:id", async (req, res) => {
    const updatedData = req.body;    
    try {
        await postsData.getPostById(ObjectID(req.params.id));
    } 
    catch (e) {
        res.status(404).json({error: e});
        return;
    }
    
    try {
        const {newTitle, newContent} = updatedData;
        const updatedPost = await postsData.updatePost(ObjectID(req.params.id), newTitle, newContent);
        res.status(200).json(updatedPost);
    } catch (e) {
        res.status(500).json({error: e});
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await postsData.getPostById(ObjectID(req.params.id));
    }
    catch (e) {
        res.status(404).json({error: e});
        return;
    }
    try {
        const deletedPost = await postsData.removePost(ObjectID(req.params.id));
        res.status(200).json(deletedPost);
    } 
    catch (e) {
        res.status(500).json({error: e});
    }
});


module.exports = router;