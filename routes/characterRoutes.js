//Import express
const express = require("express");
//Access express router
const router = express.Router();
//Import characterController
const {
  getCharacters,
  characterTitle,
  characterByName,
  characterByPage,
  bookByCharacter,
  allegianceByCharacter,
  getLords,
} = require("../controllers/characterController");
//GET all characters from the API
router.get("/characters", getCharacters);
//router.get("/characters/name", getByName);
router.get("/character/name/:name", characterByName);
// get character titles
router.get("/character/titles/:name", characterTitle);
// get chatacter by page
router.get("/character/page/:page&:pageSize", characterByPage);
// get books by character
router.get("/character/books/:name", bookByCharacter);
// get allegiance by character
router.get("/character/allegiances/:name", allegianceByCharacter);
// get all lords
router.get("/lords", getLords);
//Export router

module.exports = router;
