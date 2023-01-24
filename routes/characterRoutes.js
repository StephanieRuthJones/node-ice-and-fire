//Import express
const express = require("express");
//Access express router
const router = express.Router();
//Import characterController
const {
  getCharacters,
  getByName,
} = require("../controllers/characterController");
//GET all characters from the API
router.get("/characters", getCharacters);
//router.get("/characters/name", getByName);
//Export router

module.exports = router;
