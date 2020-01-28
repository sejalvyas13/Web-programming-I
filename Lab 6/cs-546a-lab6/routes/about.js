const express = require("express");
const router = express.Router();
const data = require("../data");
const aboutData = data.about;

router.get("/", async (req, res) => {
    try {
      const info=await aboutData.getAboutData();
      res.json(info);
    } catch (e) {
      res.status(404).json({ message:"not found!" });
    }
});


module.exports = router;