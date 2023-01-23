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
    // throw new Error("test error");
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

//@desc     Get book titles by character name
//@route    GET /api/character/books/:name
//@access   Public
const getCharacterBooksByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`${gotBaseURL}/characters/?name=${name}`);
    const character = response.data;
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    const books = character[0].books;
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

//@desc     Get allegiances by character name
//@route    GET /api/character/allegiances/:name
//@access   Public
const getCharacterAllegiancesByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`${gotBaseURL}/characters/?name=${name}`);
    const character = response.data;
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    const allegiances = character[0].allegiances;
    console.log("allegiances", allegiances);
    //make a fetch call for every element in the array
    const allegiancesPromises = allegiances.map((allegiance) =>
      axios.get(allegiance)
    );
    //wait for all the promises to resolve
    const allegiancesResponse = await Promise.all(allegiancesPromises);
    //get the data from the response
    const allegiancesData = allegiancesResponse.map(
      (allegiance) => allegiance.data
    );
    //get the name from the data
    const allegiancesNames = allegiancesData.map(
      (allegiance) => allegiance.name
    );
    res.status(200).json(allegiancesNames);
  } catch (err) {
    next(err);
  }
};
// - [ ] Create a route for `/characters/overlords` that returns a list of all the characters who are House Overlords
const getAllOverlordCharacters = async (req, res, next) => {
  try {
    const response = await axios.get(`${gotBaseURL}/houses`);
    const houses = response.data;
    const overlordHouses = houses.filter((house) => house.overlord);

    const overlordHousesPromises = overlordHouses.map((house) =>
      axios.get(house.url)
    );
    const overlordHousesResponse = await Promise.all(overlordHousesPromises);
    const overlordHousesData = overlordHousesResponse.map(
      (house) => house.data
    );
    console.log("overlordHousesData", overlordHousesData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCharacters,
  getCharactersByPage,
  getCharacterByName,
  getCharacterTitlesByName,
  getCharacterBooksByName,
  getCharacterAllegiancesByName,
  getAllOverlordCharacters,
};
