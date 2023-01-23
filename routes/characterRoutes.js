//import dependencies
const express = require("express");
const router = express.Router();

//import controller
const {
  getAllCharacters,
  getCharactersByPage,
  getCharacterByName,
  getCharacterTitlesByName,
  getCharacterBooksByName,
  getCharacterAllegiancesByName,
  getAllOverlordCharacters,
} = require("../controllers/characterController");

//GET all characters from the API of Ice And Fire
router.get("/characters", getAllCharacters);

//GET all characters by page
router.get("/characters/:page", getCharactersByPage);

//GET character by name
router.get("/character/name/:name", getCharacterByName);

//GET list of character titles by name
router.get("/character/titles/:name", getCharacterTitlesByName);

//GET book titles by character name
router.get("/character/books/:name", getCharacterBooksByName);
module.exports = router;

//GET allegiances by character name
router.get("/character/allegiances/:name", getCharacterAllegiancesByName);

//GET all House Overlord characters
router.get("/overlords", getAllOverlordCharacters);
