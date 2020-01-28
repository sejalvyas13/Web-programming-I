const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

const portNumber = 3000;
app.listen(portNumber, () => {
    console.log("Your routes are running on port localhost:"+ portNumber);
});