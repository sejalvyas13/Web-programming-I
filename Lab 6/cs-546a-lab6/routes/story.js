const express = require("express");
const router = express.Router();
const data = require("../data");
const storyData = data.story;

router.get("/", async (req, res) => {
    try {
      const info=await storyData.getStoryData();
      res.json(info);
    } catch (e) {
      res.status(404).json({ message:"not found!" });
    }
});

module.exports = router;