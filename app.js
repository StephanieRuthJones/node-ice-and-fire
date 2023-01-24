const express = require("express");

const app = express();
const PORT = 3000;
const characterRoutes = require("./routes/characterRoutes");

app.listen(PORT, () => {
  `Server is running on port ${PORT}`;
});

/* app.use(express.json());
app.use(express.urlencoded({ extended: false })); */
app.get("/", (req, res) => {
  res.send("Hello World! Server is up and running");
});
app.use("/api", characterRoutes);

//Set up Express middleware
//used to parse the incoming requests with JSON payloads

//require character routes from file

//register routes - set up base url for all character routes
//localhost:3000/api...
