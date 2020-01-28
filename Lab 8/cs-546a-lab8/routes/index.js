const searchRoutes = require("./search");
const detailsRoutes = require("./details");
const mainRoutes = require("./main");
const path = require("path");

const constructorMethod = app => {
  app.use("/", mainRoutes);  
  app.use("/search", searchRoutes);
  app.use("/details", detailsRoutes);
  
    
  app.use("*", (req, res) => {
    res.status(404).json({error : "Oops! Not found!"});
  });
};

module.exports = constructorMethod;
