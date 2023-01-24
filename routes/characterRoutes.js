//Import express
const express = require("express");
//Access express router
const router = express.Router();
//Import characterController
const {
  getCharacters,
  getAllegiancesByCharacterName,
} = require("../controllers/characterController");
//GET all characters from the API
router.get("/characters", getCharacters);
//GET a single character by name

//GET character titles by name

//GET characters by page number

//GET book titles by character name

//GET allegiances by character name
router.get("/character/allegiances/:name", getAllegiancesByCharacterName);
//GET all characters who are lords for houses

//Export router
module.exports = router;
