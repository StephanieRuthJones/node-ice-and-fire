//require axios - what is axios?
const axios = require("axios");
//set base URL "https://www.anapioficeandfire.com/api"
const gotBaseURL = "https://www.anapioficeandfire.com/api";

//@desc Get 20 characters
//@route GET /api/characters
//@access Public
const getCharacters = async (req, res) => {
  try {
    const response = await axios.get(
      `${gotBaseURL}/characters?page=1&pageSize=20`
    );
    const characters = response.data;
    res.status(200).json(characters);
  } catch (err) {
    console.log(err);
    //how do we send a 500 error with a "Server Error" message?
    res.status(500).json({ error: "Server Error" });
  }
};

//@desc Get a single character by name
//@route GET /api/characters/:name
//@access Public
const getCharacterByName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${gotBaseURL}/characters?name=${name}`);
    const character = response.data;
    //handle the case in which there is no character that has the specified name
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    res.status(200).json(character);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }
};

//@desc Get character titles by name
//@route GET /api/character/titles/:name
//@access Public
const getCharacterTitles = async (req, res) => {};

//@desc Get characters by page number
//@route GET /api/characters/:page
//@access Public
const getCharactersByPage = async (req, res) => {};

//@desc Get book titles by character name
//@route GET /api/character/books/:name
//@access Public
const getBookTitlesByCharacterName = async (req, res) => {};

//@desc Get allegiances by character name
//@route GET /api/character/allegiances/:name
//@access Public
const getAllegiancesByCharacterName = async (req, res) => {};

//@desc Get all characters who are lords for houses
//@route GET /api/lords
//@access Public
const getLords = async (req, res) => {};
//export controller funcs
module.exports = {
  getCharacters,
  getCharacterByName,
  getAllegiancesByCharacterName,
};
