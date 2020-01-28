const express = require("express");
const router = express.Router();
const data = require("../data");
const animalsData = data.animals;
const postsData = data.posts;
const ObjectID = require('mongodb').ObjectID;


router.post("/:animalId", async (req, res) => {
    try {
        console.log("postId" + req.query.postId);
        const newAnimal = await animalsData.likeUnlike(ObjectID(req.params.animalId), ObjectID(req.query.postId), true);
        res.status(200).json(newAnimal);
    } catch (e) {
        res.status(400).json({ message: e });
    }
});



router.delete("/:animalId", async (req, res) => {
    try {
        const newAnimal = await animalsData.likeUnlike(ObjectID(req.params.animalId), ObjectID(req.query.postId), false);
        res.status(200).json(newAnimal);
    } catch (e) {
        res.status(400).json({ message:"Failed to unlike a post!" });
    }
});

module.exports = router;