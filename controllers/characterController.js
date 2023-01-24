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

//how do we send a 500 error with a "Server Error" message?

//export controller funcs
module.exports = { getCharacters };
