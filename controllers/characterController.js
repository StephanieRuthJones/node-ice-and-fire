//require axios - what is axios?
const axios = require("axios");
//set base URL "https://www.anapioficeandfire.com/api"
const baseURL = "https://www.anapioficeandfire.com/api";

//@desc Get all characters
//@route GET /api/v1/characters
//@access Public
//returns 20 characters
const getCharacters = async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}/characters?page=1&pageSize=20`
    );
    const character = response.data;
    res.json(character);
  } catch (error) {
    console.log(error);
  }
};

// GET character by name :name

const characterByName = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${baseURL}/characters/?name=${name}`);
    const character = response.data;
    res.json(character);
  } catch (error) {
    console.log(error);
  }
};

const characterTitle = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${baseURL}/characters/?name=${name}`);
    const character = response.data;
    const titles = character[0].titles;

    res.json(titles);
  } catch (error) {
    console.log(error);
  }
};

const characterByPage = async (req, res) => {
  try {
    const { page, pageSize } = req.params;
    const response = await axios.get(
      `${baseURL}/characters?page=${page}&pageSize=${pageSize}`
    );
    const character = response.data;
    res.json(character);
  } catch (error) {
    console.log(error);
  }
};

const bookByCharacter = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${baseURL}/characters/?name=${name}`);
    const character = response.data;
    const books = character[0].books;

    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

const allegianceByCharacter = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${baseURL}/characters/?name=${name}`);
    const character = response.data;
    const allegiances = character[0].allegiances;

    res.json(allegiances);
  } catch (error) {
    console.log(error);
  }
};

// get all lords

const getLords = async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}/characters?page=5&pageSize=50`
    );
    const characters = response.data; // this is an object

    const titles = characters
      .map((character) => character.titles)
      .filter((title) => {
        if (title != "Lord") {
          title.splice(1);
        }
      });
    res.json(titles);
  } catch (error) {
    console.log(error);
  }
};
//how do we send a 500 error with a "Server Error" message?

//export controller funcs
module.exports = {
  getCharacters,
  characterByName,
  characterTitle,
  characterByPage,
  bookByCharacter,
  allegianceByCharacter,
  getLords,
};
