//import axios
const axios = require("axios");

// Access GOT_BASE_URL
const gotBaseURL = process.env.GOT_BASE_URL;

//@desc     Get characters
//@route    GET /api/characters
//@access   Public
const getAllCharacters = async (req, res, next) => {
  try {
    const response = await axios.get(`${gotBaseURL}/characters`);
    const characters = response.data;
    //res.json(data): used to return a response object as a JSON string,
    //res.send(data) can be used to return any type of data, e.g., a string, number, boolean, or any other type of data.Res.json(data) also automatically sets the Content - Type header of the response to application / json, whereas res.send(data) does not.
    res.status(200).json(characters);
  } catch (err) {
    //Catch the error and pass it to the next() function
    //so app able to run without interruption
    //and invoke the default error handler
    //or any custom error handler if we have defined it.
    next(err);
  }
};

//GET all characters by page
//URL looks like this: http://localhost:3000/api/characters/1?pageSize=5
//@desc     Get character by page
//@route    GET /api/characters/:page
//@access   Public
const getCharactersByPage = async (req, res, next) => {
  //if no page number is provided, default to page 1
  const page = req.params.page || 1;
  //if no page size is provided, default to 20
  const pageSize = req.query.pageSize || 20;
  try {
    const response = await axios.get(
      `${gotBaseURL}/characters/?page=${page}&pageSize=${pageSize}`
    );
    const characters = response.data;
    //if the returned array is empty, send a 400 status code and a message
    if (!characters.length) {
      res.status(400).send({ message: "Characters not found" });
    }
    res.status(200).json(characters);
  } catch (err) {
    next(err);
  }
};

//@desc     Get character by name
//@route    GET /api/character/name/:name
//@access   Public
const getCharacterByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`${gotBaseURL}/characters/?name=${name}`);
    const character = response.data;
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    res.status(200).json(character);
  } catch (err) {
    next(err);
  }
};

//GET list of character titles by name
//@desc     Get character titles by name
//@route    GET /api/character/titles/:name
//@access   Public
const getCharacterTitlesByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`${gotBaseURL}/characters/?name=${name}`);
    const character = response.data;
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    const titles = character[0].titles;
    res.status(200).json(titles);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCharacters,
  getCharactersByPage,
  getCharacterByName,
  getCharacterTitlesByName,
};
