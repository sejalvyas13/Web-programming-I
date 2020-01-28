const primeRoutes = require("./prime");

const constructorMethod = app => {
  app.use("/", primeRoutes);

  // display error page

  /*app.use("*", (req, res) => {
    res.redirect("/calculator/static");
  });   */
};

module.exports = constructorMethod;
