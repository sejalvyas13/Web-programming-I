const express = require("express");
const router = express.Router();
const data = require("../data");
const animalsData = data.animals;
const postsData = data.posts;
const mongoCollections = require('../data/mongoCollections');
const animals = mongoCollections.animals;
const ObjectID = require('mongodb').ObjectID;


router.get("/", async (req, res) => {
    try {
      const info = await animalsData.getAll();
      const postInfo = await postsData.getAllPosts();
      const animalCollection = await animals();
      res.status(200).json(info);
    } catch (e) {
      res.status(404).json({ message: e });
    }
});



router.post("/", async (req, res) => {
    const newAnimalData = req.body;
    console.log(newAnimalData);
    try {
        const {name, animalType} = newAnimalData;
        const newAnimal = await animalsData.create(name, animalType);
        res.status(200).json(newAnimal);
    } catch (e) {
        res.status(400).json({ message:"Failed to add animal!" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const info = await animalsData.get(ObjectID(req.params.id));
        res.status(200).json(info);
    } catch (e) {
        res.status(404).json({ message:"Animal not found!" });
    }
});


router.put("/:id", async (req, res) => {
    const updatedData = req.body;    
    try {
        await animalsData.get(ObjectID(req.params.id));
    } 
    catch (e) {
        res.status(404).json({error: "Failed to update"});
        return;
    }
    
    try {
        const {newName, newType} = updatedData;
        const updatedAnimal = await animalsData.rename(ObjectID(req.params.id), newName, newType);
        res.status(200).json(updatedAnimal);
    } catch (e) {
        res.status(500).json({error: "Failed to update"});
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await animalsData.get(ObjectID(req.params.id));
    }
    catch (e) {
        res.status(404).json({error: e});
        return;
    }
    try {
        const deletedAnimal = await animalsData.remove(ObjectID(req.params.id));
        res.status(200).json(deletedAnimal);
    } 
    catch (e) {
        res.status(500).json({error: e});
    }
});



module.exports = router;