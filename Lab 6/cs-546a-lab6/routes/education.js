const express = require("express");
const router = express.Router();
const data = require("../data");
const educationData = data.education;

router.get("/", async (req, res) => {
    try {
      const info=await educationData.getEducationData();
      res.json(info);
    } catch (e) {
      res.status(404).json({ message:"not found!" });
    }
});

module.exports = router;