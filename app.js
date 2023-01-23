const express = require("express");

const app = express();
const port = 3000;
//Set up Express middleware
//used to parse the incoming requests with JSON payloads

//require character routes from file
const characterRoutes = require("./routes/characterRoutes");
//register routes - set up base url for all character routes
//localhost:3000/api...
app.use("/api", characterRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
