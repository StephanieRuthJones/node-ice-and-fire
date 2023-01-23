//Import express
const express = require("express");
//Access express router
const router = express.Router();
//Import characterController
const { getCharacters } = require("../controllers/characterController");
//GET all characters from the API
router.get("/characters", getCharacters);
//Export router
module.exports = router;
