//import dependencies
const express = require("express");
const router = express.Router();

//import controller
const {
  getAllCharacters,
  getCharactersByPage,
  getCharacterByName,
  getCharacterTitlesByName,
} = require("../controllers/characterController");

//GET all characters from the API of Ice And Fire
router.get("/characters", getAllCharacters);

//GET all characters by page
router.get("/characters/:page", getCharactersByPage);

//GET character by name
router.get("/character/name/:name", getCharacterByName);

//GET list of character titles by name
router.get("/character/titles/:name", getCharacterTitlesByName);

module.exports = router;
