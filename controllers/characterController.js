//require axios - what is axios?
const axios = require("axios");
//set base URL "https://www.anapioficeandfire.com/api"
const gotBaseURL = "https://www.anapioficeandfire.com/api";
//@desc Get all characters
//@route GET /api/v1/characters
//@access Public
const getCharacters = async (req, res) => {
  try {
    const response = await axios.get(`${gotBaseURL}/characters`);
    //returns 20 characters
    const characters = response.data;
    res.json(characters);
  } catch (err) {
    console.log(err);
    //how do we send a 500 error with a "Server Error" message?
  }
};
//export controller funcs
module.exports = { getCharacters };
